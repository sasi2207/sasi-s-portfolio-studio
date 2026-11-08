import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useTheme } from "@/context/useTheme";

export interface CenterFlowNodeItem {
  id?: string | number;
  content?: React.ReactNode;
  label?: string;
  icon?: React.ReactNode;
}

export interface CenterFlowProps {
  nodeItems?: CenterFlowNodeItem[];
  centerContent?: React.ReactNode;
  centerSize?: number;
  nodeSize?: number;
  pulseDuration?: number;
  pulseInterval?: number;
  pulseLength?: number;
  lineWidth?: number;
  pulseWidth?: number;
  pulseSoftness?: number;
  lineColor?: string;
  lineColorLight?: string;
  pulseColor?: string;
  pulseColorLight?: string;
  glowColor?: string;
  glowColorLight?: string;
  maxGlowIntensity?: number;
  glowDecay?: number;
  borderRadius?: number;
  nodeDistance?: number;
  disableBlinking?: boolean;
  className?: string;
}

interface PulseItem {
  id: string;
  pathIndex: number;
  startTime: number;
}

interface RenderPulse {
  id: string;
  d: string;
  opacity: number;
  startPoint: { x: number; y: number };
  endPoint: { x: number; y: number };
}

const defaultNodes: CenterFlowNodeItem[] = Array(8).fill({});

const createCurvedPath = (from: { x: number; y: number }, to: { x: number; y: number }): string => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  return `M ${from.x} ${from.y} C ${from.x + 0.4 * dx} ${from.y + 0.1 * dy}, ${from.x + 0.6 * dx} ${to.y - 0.1 * dy}, ${to.x} ${to.y}`;
};

export const CenterFlow: React.FC<CenterFlowProps> = ({
  nodeItems = defaultNodes,
  centerContent,
  centerSize = 120,
  nodeSize = 60,
  pulseDuration = 5,
  pulseInterval = 10,
  pulseLength = 0.4,
  lineWidth = 2,
  pulseWidth = 1.5,
  pulseSoftness = 10,
  lineColor = "rgba(255, 255, 255, 0.12)",
  lineColorLight = "rgba(0, 0, 0, 0.08)",
  pulseColor = "#cf8047",
  pulseColorLight = "#b15f2c",
  glowColor = "#cf8047",
  glowColorLight = "#b15f2c",
  maxGlowIntensity = 25,
  glowDecay = 0.95,
  borderRadius = 35,
  nodeDistance = 0.7,
  disableBlinking = false,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerHubRef = useRef<HTMLDivElement>(null);
  const glowIntensityRef = useRef<number>(0);
  const pathCacheRef = useRef<Map<number, SVGPathElement>>(new Map());

  const { theme } = useTheme();
  const isLight = theme === "light";

  const count = Math.max(2, Math.min(14, nodeItems.length));
  const activeLineColor = isLight ? lineColorLight : lineColor;
  const activePulseColor = isLight ? pulseColorLight : pulseColor;
  const activeGlowColor = isLight ? glowColorLight : glowColor;
  const nodeBg = isLight ? "rgba(255, 255, 255, 0.92)" : "rgba(18, 18, 18, 0.88)";
  const centerBg = isLight ? "rgba(255, 255, 255, 0.96)" : "rgba(20, 20, 20, 0.92)";

  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 800, height: 600 });
  const [activePulses, setActivePulses] = useState<PulseItem[]>([]);
  const [renderPulses, setRenderPulses] = useState<RenderPulse[]>([]);

  // Calculate normalized positions around the circle
  const nodePositionsPct = useMemo(() => {
    const arr = Array(count);
    const angleStep = (2 * Math.PI) / count;
    const radius = 45 * nodeDistance;

    for (let i = 0; i < count; i++) {
      const angle = i * angleStep - Math.PI / 2;
      arr[i] = {
        x: 50 + Math.cos(angle) * radius,
        y: 50 + Math.sin(angle) * radius,
      };
    }
    return arr;
  }, [count, nodeDistance]);

  const centerPoint = useMemo(() => ({
    x: dimensions.width / 2,
    y: dimensions.height / 2,
  }), [dimensions]);

  const nodeCoords = useMemo(() => {
    return nodePositionsPct.map((p) => ({
      x: (p.x / 100) * dimensions.width,
      y: (p.y / 100) * dimensions.height,
    }));
  }, [nodePositionsPct, dimensions]);

  const softnessFactor = pulseSoftness / 10;
  const gradStopStart = 30 * softnessFactor;
  const gradStopEnd = 100 - 20 * softnessFactor;

  // Track container sizing
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        if (width > 0 && height > 0) {
          setDimensions({ width, height });
        }
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const triggerGlow = useCallback(() => {
    if (!disableBlinking) {
      glowIntensityRef.current = Math.min(
        glowIntensityRef.current + maxGlowIntensity * 0.6,
        maxGlowIntensity
      );
    }
  }, [maxGlowIntensity, disableBlinking]);

  // Ambient center hub glow pulsing
  useEffect(() => {
    let animId: number;
    const animateGlow = () => {
      if (centerHubRef.current) {
        const intensity = glowIntensityRef.current;
        const base = 40 + intensity;
        const spread1 = base * 0.8;
        const spread2 = base * 1.5;
        const alphaHex = Math.min(255, Math.floor(base * 4))
          .toString(16)
          .padStart(2, "0");

        centerHubRef.current.style.boxShadow = `0 0 ${spread2}px ${spread1}px ${activeGlowColor}30, 0 0 ${spread2 * 2}px ${spread1 * 1.5}px ${activeGlowColor}15, inset 0 0 ${spread2 * 0.5}px ${activeGlowColor}25`;
        centerHubRef.current.style.borderColor = `${activeGlowColor}${alphaHex}`;

        glowIntensityRef.current = intensity > 0.5 ? intensity * glowDecay : 0;
      }
      animId = requestAnimationFrame(animateGlow);
    };

    animId = requestAnimationFrame(animateGlow);
    return () => cancelAnimationFrame(animId);
  }, [activeGlowColor, glowDecay]);

  // Pulse scheduling
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const spawnPulse = (pathIdx: number) => {
      setActivePulses((prev) => [
        ...prev,
        {
          id: `${pathIdx}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
          pathIndex: pathIdx,
          startTime: Date.now(),
        },
      ]);
      const nextTime = pulseInterval * 1000 * (0.7 + 0.6 * Math.random());
      const timer = setTimeout(() => spawnPulse(pathIdx), nextTime);
      timers.push(timer);
    };

    nodeCoords.forEach((_, idx) => {
      const initialDelay = Math.random() * pulseInterval * 1000;
      const timer = setTimeout(() => spawnPulse(idx), initialDelay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [nodeCoords, pulseInterval]);

  // Pulse expiration check
  useEffect(() => {
    let animId: number;
    const durationMs = pulseDuration * 1000;

    const checkExpiration = () => {
      const now = Date.now();
      setActivePulses((prev) =>
        prev.filter((pulse) => {
          const isDone = (now - pulse.startTime) / durationMs >= 1;
          if (isDone) {
            triggerGlow();
            return false;
          }
          return true;
        })
      );
      animId = requestAnimationFrame(checkExpiration);
    };

    animId = requestAnimationFrame(checkExpiration);
    return () => cancelAnimationFrame(animId);
  }, [pulseDuration, triggerGlow]);

  // Reset cached paths on dimension / geometry update
  useEffect(() => {
    pathCacheRef.current.clear();
  }, [nodeCoords, centerPoint]);

  // Render SVG pulse geometries along the curves
  useEffect(() => {
    let animId: number;
    const durationMs = pulseDuration * 1000;

    const computePulses = () => {
      const now = Date.now();
      const nextRenderList: RenderPulse[] = [];

      for (const pulse of activePulses) {
        const targetNode = nodeCoords[pulse.pathIndex];
        if (!targetNode) continue;

        let pathElement = pathCacheRef.current.get(pulse.pathIndex);
        if (!pathElement) {
          pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
          pathElement.setAttribute("d", createCurvedPath(centerPoint, targetNode));
          pathCacheRef.current.set(pulse.pathIndex, pathElement);
        }

        const progress = Math.min((now - pulse.startTime) / durationMs, 1);
        if (progress <= 0 || progress >= 1) continue;

        const totalLen = pathElement.getTotalLength();
        const tailProgress = Math.max(0, progress - pulseLength);
        const samplePoints: { x: number; y: number }[] = [];

        for (let i = 0; i <= 8; i++) {
          const pos = totalLen * (tailProgress + (i / 8) * (progress - tailProgress));
          const pt = pathElement.getPointAtLength(pos);
          samplePoints.push({ x: pt.x, y: pt.y });
        }

        if (samplePoints.length < 2) continue;

        // Smooth fade-in and fade-out
        const opacity = Math.min(1, progress / 0.15) * Math.min(1, (1 - progress) / 0.15);
        const pathData = `M ${samplePoints[0].x} ${samplePoints[0].y}` +
          samplePoints.slice(1).map((p) => ` L ${p.x} ${p.y}`).join("");

        nextRenderList.push({
          id: pulse.id,
          d: pathData,
          opacity,
          startPoint: samplePoints[0],
          endPoint: samplePoints[samplePoints.length - 1],
        });
      }

      setRenderPulses(nextRenderList);
      animId = requestAnimationFrame(computePulses);
    };

    animId = requestAnimationFrame(computePulses);
    return () => cancelAnimationFrame(animId);
  }, [activePulses, nodeCoords, centerPoint, pulseDuration, pulseLength]);

  const nodeCardStyle = useMemo(() => ({
    borderRadius: `${borderRadius * 0.6}px`,
    background: nodeBg,
    backdropFilter: "blur(12px)",
    border: `1px solid ${isLight ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.1)"}`,
    boxShadow: isLight
      ? "0 4px 16px rgba(0, 0, 0, 0.05)"
      : "0 6px 20px rgba(0, 0, 0, 0.35)",
  }), [borderRadius, isLight, nodeBg]);

  const centerHubStyle = useMemo(() => ({
    left: `${centerPoint.x}px`,
    top: `${centerPoint.y}px`,
    width: `${centerSize}px`,
    height: `${centerSize}px`,
    borderRadius: `${borderRadius}px`,
    background: centerBg,
    backdropFilter: "blur(16px)",
    border: `2px solid ${activeGlowColor}30`,
    boxShadow: `0 0 25px 5px ${activeGlowColor}15`,
  }), [centerPoint.x, centerPoint.y, centerSize, borderRadius, centerBg, activeGlowColor]);

  const defaultCenterIcon = (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" style={{ color: activePulseColor }}>
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const defaultNodeDot = (
    <div
      className="w-3.5 h-3.5 rounded-full"
      style={{
        background: `${activePulseColor}50`,
        boxShadow: `0 0 10px ${activePulseColor}40`,
      }}
    />
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[460px] overflow-hidden select-none ${className}`}
      style={{ background: "transparent" }}
    >
      {/* SVG Connecting Lines & Traveling Pulses */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="centerFlowGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {renderPulses.map((pulse) => (
            <linearGradient
              key={`grad-${pulse.id}`}
              id={`pulse-grad-${pulse.id}`}
              x1={pulse.startPoint.x}
              y1={pulse.startPoint.y}
              x2={pulse.endPoint.x}
              y2={pulse.endPoint.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={activePulseColor} stopOpacity="0" />
              <stop offset={`${gradStopStart}%`} stopColor={activePulseColor} stopOpacity="1" />
              <stop offset={`${gradStopEnd}%`} stopColor={activePulseColor} stopOpacity="1" />
              <stop offset="100%" stopColor={activePulseColor} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {/* Static Base Flow Wire Lines */}
        {nodeCoords.map((coord, idx) => (
          <path
            key={`line-${idx}`}
            d={createCurvedPath(centerPoint, coord)}
            fill="none"
            stroke={activeLineColor}
            strokeWidth={lineWidth}
            strokeLinecap="round"
          />
        ))}

        {/* Animated Traveling Pulses */}
        {renderPulses.map((pulse) => (
          <g key={pulse.id}>
            {/* Outer Glow Pass */}
            <path
              d={pulse.d}
              fill="none"
              stroke={`url(#pulse-grad-${pulse.id})`}
              strokeWidth={pulseWidth * 3}
              strokeLinecap="round"
              opacity={pulse.opacity * 0.45}
              filter="url(#centerFlowGlow)"
            />
            {/* Core Pulse Core */}
            <path
              d={pulse.d}
              fill="none"
              stroke={`url(#pulse-grad-${pulse.id})`}
              strokeWidth={pulseWidth}
              strokeLinecap="round"
              opacity={pulse.opacity}
            />
          </g>
        ))}
      </svg>

      {/* Outer Connected Nodes */}
      {nodeCoords.map((coord, idx) => {
        const item = nodeItems[idx];
        const hasCustomContent = item?.content !== undefined;

        return (
          <div
            key={`node-${idx}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform hover:scale-110 duration-200 z-10"
            style={{
              left: `${coord.x}px`,
              top: `${coord.y}px`,
              width: `${nodeSize}px`,
              height: `${nodeSize}px`,
              ...nodeCardStyle,
            }}
          >
            {hasCustomContent ? item.content : defaultNodeDot}
          </div>
        );
      })}

      {/* Central Hub */}
      <div
        ref={centerHubRef}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-colors duration-300 z-20"
        style={centerHubStyle}
      >
        <div
          className="flex items-center justify-center p-3"
          style={{ width: `${centerSize * 0.6}px`, height: `${centerSize * 0.6}px` }}
        >
          {centerContent !== undefined ? centerContent : defaultCenterIcon}
        </div>
      </div>
    </div>
  );
};

CenterFlow.displayName = "CenterFlow";
export default CenterFlow;
