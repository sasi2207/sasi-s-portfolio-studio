import React from "react";

export type ServiceIconType =
  | "static-web"
  | "dynamic-web"
  | "ecommerce"
  | "mobile-apps"
  | "custom-erp"
  | "cloud-devops"
  | "digital-marketing"
  | "academy-mentorship";

interface ServiceCardIconProps {
  type: ServiceIconType;
  className?: string;
  imageSrc?: string;
}

const defaultIconPngMap: Record<ServiceIconType, string> = {
  "static-web": "/images/services/icons/static-web.png",
  "dynamic-web": "/images/services/icons/dynamic-web.png",
  "ecommerce": "/images/services/icons/ecommerce.png",
  "mobile-apps": "/images/services/icons/mobile-app.png",
  "custom-erp": "/images/services/icons/business-web.png",
  "cloud-devops": "/images/services/icons/deployment-hosting.png",
  "digital-marketing": "/images/services/icons/digital-marketing.png",
  "academy-mentorship": "/images/services/icons/coaching.png",
};

export const ServiceCardIcon: React.FC<ServiceCardIconProps> = ({
  type,
  className = "",
  imageSrc,
}) => {
  const [imageError, setImageError] = React.useState(false);
  const activeImageSrc = imageSrc || defaultIconPngMap[type];

  // If a PNG image exists and loads, display the high-res PNG icon with hover glow
  if (activeImageSrc && !imageError) {
    return (
      <div
        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-900/40 dark:bg-slate-950/60 border border-amber-500/30 p-2 flex items-center justify-center shadow-lg shadow-amber-500/10 group transition-all duration-300 hover:scale-105 hover:border-amber-500/50 hover:shadow-amber-500/20 ${className}`}
      >
        <img
          src={activeImageSrc}
          alt={`${type} icon`}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-contain filter drop-shadow transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    );
  }

  // Bespoke SVG Illustrations with rich layered depth & micro-interactions
  switch (type) {
    case "static-web":
      // Lightning bolt + clean browser window (Speed & Lightweight Performance)
      return (
        <div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-amber-600/5 dark:from-amber-500/20 dark:to-orange-500/10 border border-amber-500/30 flex items-center justify-center shadow-lg shadow-amber-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:border-amber-500/50 ${className}`}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-9 h-9 sm:w-10 sm:h-10 transform transition-transform duration-300 group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Browser Window Outline */}
            <rect
              x="8"
              y="10"
              width="48"
              height="44"
              rx="8"
              className="fill-slate-900/10 dark:fill-white/5 stroke-amber-500 dark:stroke-amber-400"
              strokeWidth="2.5"
            />
            {/* Top Bar Header */}
            <line x1="8" y1="20" x2="56" y2="20" className="stroke-amber-500/40" strokeWidth="1.5" />
            <circle cx="15" cy="15" r="2" className="fill-red-400" />
            <circle cx="21" cy="15" r="2" className="fill-amber-400" />
            <circle cx="27" cy="15" r="2" className="fill-emerald-400" />
            {/* Speed Lines */}
            <line x1="16" y1="28" x2="26" y2="28" className="stroke-amber-400/50" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="34" x2="22" y2="34" className="stroke-amber-400/30" strokeWidth="2" strokeLinecap="round" />
            {/* Lightning Bolt Symbol */}
            <path
              d="M36 21L24 37H35L30 51L46 33H34L36 21Z"
              className="fill-amber-400 stroke-amber-500 dark:stroke-amber-300 drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );

    case "dynamic-web":
      // Gears rotating inside browser + interconnected data nodes
      return (
        <div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-indigo-600/5 dark:from-blue-500/20 dark:to-cyan-500/10 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:border-blue-500/50 ${className}`}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-9 h-9 sm:w-10 sm:h-10 transform transition-transform duration-300 group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Browser Frame */}
            <rect
              x="8"
              y="10"
              width="48"
              height="44"
              rx="8"
              className="fill-slate-900/10 dark:fill-white/5 stroke-blue-500 dark:stroke-blue-400"
              strokeWidth="2.5"
            />
            <line x1="8" y1="20" x2="56" y2="20" className="stroke-blue-500/40" strokeWidth="1.5" />
            <circle cx="15" cy="15" r="2" className="fill-blue-400" />
            <circle cx="21" cy="15" r="2" className="fill-cyan-400" />
            {/* Interconnected Nodes */}
            <circle cx="20" cy="44" r="3" className="fill-cyan-400" />
            <circle cx="44" cy="44" r="3" className="fill-cyan-400" />
            <path d="M23 44H41" className="stroke-cyan-400/60" strokeWidth="1.5" strokeDasharray="2 2" />
            {/* Interlocking Gears */}
            <g className="origin-[34px_34px] group-hover:rotate-45 transition-transform duration-700 ease-out">
              <circle cx="34" cy="34" r="9" className="fill-blue-500/30 stroke-blue-400" strokeWidth="2" />
              <circle cx="34" cy="34" r="4" className="fill-white dark:fill-slate-950 stroke-blue-300" strokeWidth="1.5" />
              {/* Gear Teeth */}
              <line x1="34" y1="22" x2="34" y2="25" className="stroke-blue-400" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="34" y1="43" x2="34" y2="46" className="stroke-blue-400" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="22" y1="34" x2="25" y2="34" className="stroke-blue-400" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="43" y1="34" x2="46" y2="34" className="stroke-blue-400" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="26" y1="26" x2="28" y2="28" className="stroke-blue-400" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="40" y1="40" x2="42" y2="42" className="stroke-blue-400" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="40" y1="26" x2="42" y2="28" className="stroke-blue-400" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="26" y1="40" x2="28" y2="42" className="stroke-blue-400" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      );

    case "ecommerce":
      // Shopping cart with checkmark + storefront secure badge
      return (
        <div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-green-600/5 dark:from-emerald-500/20 dark:to-teal-500/10 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:border-emerald-500/50 ${className}`}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-9 h-9 sm:w-10 sm:h-10 transform transition-transform duration-300 group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Storefront Awning / Subtle Roof */}
            <path
              d="M14 16L18 10H46L50 16"
              className="stroke-emerald-500/40"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Shopping Cart Body */}
            <path
              d="M12 18H18L23 38H46L51 23H21"
              className="stroke-emerald-500 dark:stroke-emerald-400"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cart Wheels */}
            <circle cx="26" cy="46" r="3.5" className="fill-emerald-400" />
            <circle cx="43" cy="46" r="3.5" className="fill-emerald-400" />
            {/* Security Checkmark Badge */}
            <g className="filter drop-shadow-[0_2px_6px_rgba(16,185,129,0.5)]">
              <circle cx="37" cy="27" r="10" className="fill-emerald-500 stroke-emerald-300 dark:stroke-white" strokeWidth="2" />
              <path
                d="M32.5 27L35.5 30L41.5 24"
                className="stroke-white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      );

    case "mobile-apps":
      // Smartphone with touch gesture ripple + dual iOS/Android cues
      return (
        <div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-violet-500/15 via-purple-500/10 to-indigo-600/5 dark:from-violet-500/20 dark:to-purple-500/10 border border-violet-500/30 flex items-center justify-center shadow-lg shadow-violet-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:border-violet-500/50 ${className}`}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-9 h-9 sm:w-10 sm:h-10 transform transition-transform duration-300 group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Smartphone Body */}
            <rect
              x="18"
              y="10"
              width="28"
              height="44"
              rx="6"
              className="fill-slate-900/10 dark:fill-white/5 stroke-violet-500 dark:stroke-violet-400"
              strokeWidth="2.5"
            />
            {/* Speaker & Home Bar */}
            <line x1="28" y1="15" x2="36" y2="15" className="stroke-violet-400/60" strokeWidth="2" strokeLinecap="round" />
            <line x1="27" y1="49" x2="37" y2="49" className="stroke-violet-400/80" strokeWidth="2" strokeLinecap="round" />
            {/* Touch Gesture Ripple Circles */}
            <circle cx="32" cy="32" r="11" className="stroke-violet-400/30" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="32" cy="32" r="6" className="stroke-violet-400/60" strokeWidth="1.5" />
            <circle cx="32" cy="32" r="2.5" className="fill-violet-400" />
            {/* Dual OS Dots (iOS + Android subtle dots) */}
            <circle cx="23" cy="22" r="1.5" className="fill-violet-300" />
            <circle cx="41" cy="22" r="1.5" className="fill-purple-300" />
          </svg>
        </div>
      );

    case "custom-erp":
      // Dashboard analytics graph + workflow flowchart
      return (
        <div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500/15 via-rose-500/10 to-orange-600/5 dark:from-amber-500/20 dark:to-rose-500/10 border border-amber-500/30 flex items-center justify-center shadow-lg shadow-amber-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:border-amber-500/50 ${className}`}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-9 h-9 sm:w-10 sm:h-10 transform transition-transform duration-300 group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dashboard Container */}
            <rect
              x="10"
              y="12"
              width="44"
              height="40"
              rx="6"
              className="fill-slate-900/10 dark:fill-white/5 stroke-amber-500 dark:stroke-amber-400"
              strokeWidth="2.5"
            />
            {/* Chart Grid Lines */}
            <line x1="16" y1="44" x2="48" y2="44" className="stroke-amber-400/40" strokeWidth="1.5" />
            {/* Flowchart / Bar Graph Columns */}
            <rect x="16" y="32" width="6" height="12" rx="1.5" className="fill-amber-400/60" />
            <rect x="25" y="24" width="6" height="20" rx="1.5" className="fill-amber-400/80" />
            <rect x="34" y="18" width="6" height="26" rx="1.5" className="fill-amber-400" />
            {/* Rising Analytics Growth Line */}
            <path
              d="M17 31L26 23L35 17L46 22"
              className="stroke-orange-500 dark:stroke-orange-300"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Automated Flow Node Arrow */}
            <circle cx="46" cy="22" r="3" className="fill-orange-400 stroke-white dark:stroke-slate-900" strokeWidth="1.5" />
          </svg>
        </div>
      );

    case "cloud-devops":
      // Cloud server stack with circular sync arrows
      return (
        <div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-sky-600/5 dark:from-cyan-500/20 dark:to-blue-500/10 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:border-cyan-500/50 ${className}`}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-9 h-9 sm:w-10 sm:h-10 transform transition-transform duration-300 group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Stacked Server Rack Blades */}
            {/* Blade 1 */}
            <rect x="14" y="27" width="36" height="9" rx="3" className="fill-slate-900/10 dark:fill-white/5 stroke-cyan-500" strokeWidth="2" />
            <circle cx="20" cy="31.5" r="1.5" className="fill-cyan-400" />
            <circle cx="25" cy="31.5" r="1.5" className="fill-cyan-400" />
            <line x1="38" y1="31.5" x2="44" y2="31.5" className="stroke-cyan-400/60" strokeWidth="1.5" strokeLinecap="round" />
            {/* Blade 2 */}
            <rect x="14" y="39" width="36" height="9" rx="3" className="fill-slate-900/10 dark:fill-white/5 stroke-cyan-500" strokeWidth="2" />
            <circle cx="20" cy="43.5" r="1.5" className="fill-emerald-400" />
            <circle cx="25" cy="43.5" r="1.5" className="fill-emerald-400" />
            <line x1="38" y1="43.5" x2="44" y2="43.5" className="stroke-cyan-400/60" strokeWidth="1.5" strokeLinecap="round" />
            {/* Cloud Outline on Top */}
            <path
              d="M20 22C17.79 22 16 20.21 16 18C16 15.95 17.54 14.26 19.55 14.04C20.35 11.69 22.56 10 25.17 10C27.91 10 30.22 11.87 30.87 14.43C31.52 14.15 32.24 14 33 14C35.21 14 37 15.79 37 18C37 18.25 36.98 18.5 36.93 18.74C38.68 19.16 40 20.73 40 22.6"
              className="stroke-cyan-400/60"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Circular Sync Arrows (Continuous DevOps Deployment) */}
            <path
              d="M48 20A7 7 0 1 1 45 15"
              className="stroke-cyan-400"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M47 13L45 15L43 13" className="stroke-cyan-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    case "digital-marketing":
      // Megaphone + Target board with arrow in bullseye
      return (
        <div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-rose-500/15 via-orange-500/10 to-amber-600/5 dark:from-rose-500/20 dark:to-orange-500/10 border border-rose-500/30 flex items-center justify-center shadow-lg shadow-rose-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:border-rose-500/50 ${className}`}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-9 h-9 sm:w-10 sm:h-10 transform transition-transform duration-300 group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Megaphone Body */}
            <path
              d="M10 28H15L28 19V45L15 36H10C8.89543 36 8 35.1046 8 34V30C8 28.8954 8.89543 28 10 28Z"
              className="fill-slate-900/10 dark:fill-white/5 stroke-rose-500 dark:stroke-rose-400"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Megaphone Handle */}
            <path d="M15 36V43C15 44.1 15.9 45 17 45H19" className="stroke-rose-500/80" strokeWidth="2" strokeLinecap="round" />
            {/* Target Bullseye Board with Arrow */}
            <circle cx="44" cy="32" r="14" className="stroke-rose-400/40" strokeWidth="1.5" />
            <circle cx="44" cy="32" r="9" className="stroke-rose-400/70" strokeWidth="1.5" />
            <circle cx="44" cy="32" r="4" className="fill-rose-500" />
            {/* Arrow in Bullseye */}
            <line x1="32" y1="20" x2="44" y2="32" className="stroke-amber-400" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M31 23L32 20L35 21" className="stroke-amber-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    case "academy-mentorship":
      // Graduation cap + code bracket symbol </>
      return (
        <div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-amber-600/5 dark:from-indigo-500/20 dark:to-blue-500/10 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:border-indigo-500/50 ${className}`}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-9 h-9 sm:w-10 sm:h-10 transform transition-transform duration-300 group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Graduation Mortarboard Diamond */}
            <path
              d="M32 12L52 22L32 32L12 22L32 12Z"
              className="fill-indigo-500/20 stroke-indigo-500 dark:stroke-indigo-400"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Cap Base / Skullcap */}
            <path
              d="M19 25.5V36C19 36 24 41 32 41C40 41 45 36 45 36V25.5"
              className="stroke-indigo-500 dark:stroke-indigo-400"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Cap Tassel */}
            <path d="M48 24V35" className="stroke-amber-400" strokeWidth="2" strokeLinecap="round" />
            <circle cx="48" cy="37" r="2" className="fill-amber-400" />
            {/* Code Brackets </> at Bottom */}
            <g className="filter drop-shadow-[0_2px_4px_rgba(245,158,11,0.4)]">
              {/* Left bracket */}
              <path d="M24 47L19 51L24 55" className="stroke-amber-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* Slash */}
              <line x1="30" y1="56" x2="34" y2="46" className="stroke-indigo-300 dark:stroke-white/80" strokeWidth="2" strokeLinecap="round" />
              {/* Right bracket */}
              <path d="M40 47L45 51L40 55" className="stroke-amber-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
