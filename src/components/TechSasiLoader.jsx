import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import "./TechSasiLoader.css";

/**
 * TechSasiLoader — smooth, GPU-friendly loading screen
 *
 * What changed vs. the old version (why it feels smoother):
 *  - No setInterval / Date.now() / setState every 16–20ms. Ring + progress are
 *    framer-motion MotionValues, so they update the DOM directly with ZERO React re-renders.
 *  - One async timeline instead of 8 nested setTimeouts (easy to read, cancel & tweak).
 *  - Only transform + opacity are animated (compositor friendly).
 *  - Spring-based 3D logo settle, proper easing curves, eased (non-linear) progress.
 *  - onComplete stored in a ref -> parent re-renders no longer restart the animation.
 *  - Respects prefers-reduced-motion, locks body scroll, Skip button works instantly.
 *
 * Stages: 0 seed -> 1 ring draws -> 2 logo reveals -> 3 typography -> 4 progress -> sweep -> fade out
 */

const RADIUS = 132;
const EASE_IN_OUT = [0.65, 0, 0.35, 1];
const EASE_OUT = [0.16, 1, 0.3, 1];

const STATUS_TEXT = [
  "INITIALIZING CORE SYSTEMS...",
  "CALIBRATING DIGITAL EXPERIENCES...",
  "LOADING CLOUD & AI MODULES...",
  "TECHSASI ECOSYSTEM READY",
];

const LETTERS = [
  ..."TECH".split("").map((ch) => ({ ch, cls: "ts-letter ts-tech-text" })),
  ..."SASI".split("").map((ch, i) => ({
    ch,
    cls: `ts-letter ts-sasi-text${i === 0 ? " ts-word-start" : ""}`,
  })),
];

const CUBES = [
  { cls: "ts-cube-cyan", pos: { top: 30, right: 16, width: 14, height: 14 } },
  { cls: "ts-cube-electric", pos: { top: 56, right: 2, width: 9, height: 9 } },
  { cls: "ts-cube-black", pos: { top: 12, right: 40, width: 8, height: 8 } },
];

const titleVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 22, rotateX: -70 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

const taglineVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT, delay: 0.45 },
  },
};

const ruleVariants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.8, ease: EASE_OUT, delay: 0.6 } },
};

export const TechSasiLoader = ({ onComplete, minDuration = 2800 }) => {
  const reduceMotion = useReducedMotion();

  const [stage, setStage] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [sweep, setSweep] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Motion values: update the DOM directly, no React re-render per frame
  const ring = useMotionValue(0); // 0 -> 1
  const progress = useMotionValue(0); // 0 -> 100

  const overlayRef = useRef(null);
  const cancelRef = useRef(() => {});
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const orbitRotate = useTransform(ring, (v) => v * 360);
  const orbitOpacity = useTransform(ring, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);
  const ringOpacity = useTransform(ring, [0, 0.01], [0, 1]);
  const percentText = useTransform(progress, (v) => `${Math.round(v)}%`);
  const fillWidth = useTransform(progress, (v) => `${v}%`);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    onCompleteRef.current?.();
  }, []);

  // Lock page scroll while the loader is visible
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  // Master timeline
  useEffect(() => {
    const timers = [];
    const controls = [];

    const wait = (ms) =>
      new Promise((resolve) => timers.push(setTimeout(resolve, ms)));

    const run = (mv, to, opts) =>
      new Promise((resolve) => {
        controls.push(animate(mv, to, { ...opts, onComplete: resolve }));
      });

    cancelRef.current = () => {
      timers.forEach(clearTimeout);
      controls.forEach((c) => c.stop());
    };

    const sequence = async () => {
      // reset (also makes React StrictMode double-mount safe)
      ring.set(0);
      progress.set(0);
      setStage(0);
      setStatusIdx(0);
      setSweep(false);
      setExiting(false);

      const progressSecs = Math.max(0.9, minDuration / 1000 - 1.9);
      let lastIdx = 0;

      const runProgress = () =>
        run(progress, 100, {
          duration: progressSecs,
          ease: [0.45, 0.05, 0.25, 1], // eased, feels "alive" instead of robotic-linear
          onUpdate: (v) => {
            const idx = v < 30 ? 0 : v < 60 ? 1 : v < 90 ? 2 : 3;
            if (idx !== lastIdx) {
              lastIdx = idx;
              setStatusIdx(idx); // only 3 state updates for the whole progress run
            }
            overlayRef.current?.setAttribute("aria-valuenow", String(Math.round(v)));
          },
        });

      if (reduceMotion) {
        setStage(4);
        ring.set(1);
        await runProgress();
      } else {
        await wait(350); // seed particle moment
        setStage(1);
        const ringDone = run(ring, 1, { duration: 1.2, ease: EASE_IN_OUT });
        await wait(600);
        setStage(2); // logo settles in (spring)
        await wait(450);
        setStage(3); // TECH SASI + tagline
        await wait(450);
        setStage(4); // progress
        await Promise.all([ringDone, runProgress()]);
      }

      setStatusIdx(3);
      await wait(250);
      setSweep(true); // cyan light sweep
      await wait(650);
      setExiting(true); // fade + subtle scale
      await wait(700);
      finish();
    };

    sequence();
    return () => cancelRef.current();
  }, [minDuration, reduceMotion, ring, progress, finish]);

  const handleSkip = useCallback(() => {
    cancelRef.current();
    setExiting(true);
    setTimeout(finish, 350);
  }, [finish]);

  const logoAnimate =
    stage < 1
      ? { opacity: 0, scale: 0.7, rotateX: 14, rotateY: -20 }
      : stage < 2
      ? { opacity: 0.25, scale: 0.88, rotateX: 8, rotateY: -10 }
      : { opacity: 1, scale: sweep ? 1.04 : 1, rotateX: 0, rotateY: 0 };

  const logoTransition =
    stage >= 2
      ? {
          default: { type: "spring", stiffness: 90, damping: 15, mass: 0.9 },
          opacity: { duration: 0.5, ease: "easeOut" },
        }
      : { duration: 0.6, ease: EASE_OUT };

  const textState = stage >= 3 ? "show" : "hidden";

  return (
    <motion.div
      ref={overlayRef}
      className="techsasi-loader-overlay"
      role="progressbar"
      aria-label="Loading TechSasi"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      initial={{ opacity: 1, scale: 1 }}
      animate={exiting ? { opacity: 0, scale: 1.03 } : { opacity: 1, scale: 1 }}
      transition={{ duration: exiting ? 0.65 : 0, ease: [0.4, 0, 0.2, 1] }}
      style={{ pointerEvents: exiting ? "none" : "auto" }}
    >
      <div className="techsasi-bg-radial" />
      <div className="techsasi-grid-backdrop" />

      <div className="techsasi-loader-stage">
        <div className="techsasi-logo-box">
          {/* Seed particle -> bursts into the ring */}
          <AnimatePresence>
            {stage === 0 && (
              <motion.div
                className="techsasi-seed-particle"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 4, opacity: 0, transition: { duration: 0.35, ease: EASE_OUT } }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
              />
            )}
          </AnimatePresence>

          <motion.div
            className="techsasi-logo-wrapper"
            initial={{ opacity: 0, scale: 0.7, rotateX: 14, rotateY: -20 }}
            animate={logoAnimate}
            transition={logoTransition}
          >
            <motion.div
              className="techsasi-float"
              animate={stage >= 3 ? { y: [0, -6, 0] } : { y: 0 }}
              transition={
                stage >= 3
                  ? { duration: 3.2, ease: "easeInOut", repeat: Infinity }
                  : { duration: 0.4 }
              }
            >
              {/* Circular border draw */}
              <svg className="techsasi-svg-border" viewBox="0 0 288 288" aria-hidden="true">
                <defs>
                  <linearGradient id="tsCyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="60%" stopColor="#00A8FF" />
                    <stop offset="100%" stopColor="#007BFF" />
                  </linearGradient>
                </defs>

                <circle className="ts-circle-bg" cx="144" cy="144" r={RADIUS} />
                <motion.circle
                  className="ts-circle-glow"
                  cx="144"
                  cy="144"
                  r={RADIUS}
                  style={{ pathLength: ring, opacity: ringOpacity }}
                />
                <motion.circle
                  className="ts-circle-ring"
                  cx="144"
                  cy="144"
                  r={RADIUS}
                  style={{ pathLength: ring, opacity: ringOpacity }}
                />
              </svg>

              {/* Orbit light riding the ring head */}
              <motion.div
                className="techsasi-orbit"
                style={{ rotate: orbitRotate, opacity: orbitOpacity }}
                aria-hidden="true"
              >
                <span className="techsasi-orbit-dot" />
              </motion.div>

              {/* Floating digital cubes */}
              <div className="techsasi-cubes" aria-hidden="true">
                {CUBES.map((c, i) => (
                  <motion.span
                    key={i}
                    className={`ts-cube ${c.cls}`}
                    style={c.pos}
                    initial={{ scale: 0, opacity: 0, rotate: -45 }}
                    animate={
                      stage >= 3
                        ? { scale: 1, opacity: 1, rotate: 0 }
                        : { scale: 0, opacity: 0, rotate: -45 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 16,
                      delay: stage >= 3 ? 0.1 + i * 0.08 : 0,
                    }}
                  />
                ))}
              </div>

              {/* Emblem */}
              <div className="techsasi-emblem-disc">
                <img
                  src="/lo.png"
                  alt="TechSasi TS Logo"
                  className="techsasi-logo-image"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
                <motion.div
                  className="techsasi-light-sweep"
                  aria-hidden="true"
                  style={{ skewX: -18 }}
                  initial={false}
                  animate={{ x: sweep ? "320%" : "-160%" }}
                  transition={{ duration: sweep ? 0.75 : 0, ease: EASE_IN_OUT }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Brand typography */}
        <div className="techsasi-brand-container">
          <motion.h2
            className="techsasi-title"
            aria-label="TECHSASI"
            variants={titleVariants}
            initial="hidden"
            animate={textState}
          >
            {LETTERS.map((l, i) => (
              <motion.span
                key={i}
                className={l.cls}
                variants={letterVariants}
                aria-hidden="true"
              >
                {l.ch}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            className="techsasi-tagline-wrapper"
            variants={taglineVariants}
            initial="hidden"
            animate={textState}
          >
            <motion.span className="ts-tagline-rule" variants={ruleVariants} />
            <span className="techsasi-tagline">
              <span>LEARN</span>
              <span className="ts-bullet">•</span>
              <span>BUILD</span>
              <span className="ts-bullet">•</span>
              <span>GROW</span>
            </span>
            <motion.span className="ts-tagline-rule reverse" variants={ruleVariants} />
          </motion.div>

          {/* Progress */}
          <motion.div
            className="techsasi-progress-section"
            initial={{ opacity: 0, y: 12 }}
            animate={stage >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <div className="techsasi-progress-track">
              <motion.div className="techsasi-progress-fill" style={{ width: fillWidth }}>
                <span className="techsasi-progress-head" />
              </motion.div>
            </div>

            <div className="techsasi-progress-meta">
              <span className="techsasi-status-badge">
                <span className="ts-live-blinker" />
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={statusIdx}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                  >
                    {STATUS_TEXT[statusIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <motion.span className="techsasi-percentage">{percentText}</motion.span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        className="techsasi-skip"
        onClick={handleSkip}
        title="Skip intro animation"
        initial={{ opacity: 0 }}
        animate={{ opacity: stage >= 1 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        Skip ↗
      </motion.button>
    </motion.div>
  );
};

export default TechSasiLoader;