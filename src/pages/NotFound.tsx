import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, MoveLeft, Home } from 'lucide-react';

/**
 * NotFound Component
 * Renders a professional 404 error page tailored for the TECH SASI ecosystem.
 */
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col justify-between antialiased selection:bg-[var(--accent)]/20 transition-colors duration-300">
      {/* Top Decorative Border line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[var(--accent-from)] via-[var(--accent)] to-[var(--accent-to)]" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow flex flex-col justify-center items-center">
        <div className="w-full max-w-xl text-center">
          
          {/* Animated Tech/Compass Icon Container */}
          <div className="inline-flex items-center justify-center p-4 bg-[var(--surface-fill)] border border-[var(--border-line)] rounded-2xl text-[var(--accent)] mb-8 transition-transform hover:scale-105 duration-300">
            <Compass className="h-12 w-12 stroke-[1.5] animate-spin-slow" />
          </div>

          {/* Status Code Header */}
          <span className="block text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-2 font-mono">
            Error Code 404
          </span>
          
          <h1 className="text-4xl font-black tracking-tight text-[var(--text-primary)] sm:text-5xl mb-4 font-display">
            Lost in Code? Page Not Found.
          </h1>
          
          <p className="text-base text-[var(--text-muted)] leading-relaxed mb-10 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track to learning, building, and growing.
          </p>

          {/* Call to Actions (CTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border-line)] text-sm font-medium rounded-xl text-[var(--text-primary)] bg-[var(--card-bg)] hover:bg-[var(--surface-fill)] shadow-sm transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <MoveLeft size={16} />
              Go Back
            </button>

            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl text-white bg-[var(--accent)] hover:opacity-90 shadow-md shadow-[var(--accent)]/15 transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <Home size={16} />
              Return Home
            </button>
          </div>
          
        </div>
      </div>

      {/* Professional Brand Footer */}
      <footer className="py-8 border-t border-[var(--border-line)] bg-[var(--surface-fill)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-mono">
            <span className="text-[var(--text-primary)]">TECH</span>
            <span className="text-[var(--accent)]">SASI</span>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} TECH SASI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}