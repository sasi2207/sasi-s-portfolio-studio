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
    <main className="min-h-screen bg-white text-gray-900 flex flex-col justify-between antialiased selection:bg-orange-500/20">
      {/* Top Decorative Border line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow flex flex-col justify-center items-center">
        <div className="w-full max-w-xl text-center">
          
          {/* Animated Tech/Compass Icon Container */}
          <div className="inline-flex items-center justify-center p-4 bg-orange-50 rounded-2xl text-orange-500 mb-8 transition-transform hover:scale-105 duration-300">
            <Compass className="h-12 w-12 stroke-[1.5] animate-spin-slow" />
          </div>

          {/* Status Code Header */}
          <span className="block text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">
            Error Code 404
          </span>
          
          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl mb-4">
            Lost in Code? Page Not Found.
          </h1>
          
          <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track to learning, building, and growing.
          </p>

          {/* Call to Actions (CTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-sm font-medium rounded-xl text-gray-600 bg-white hover:bg-gray-50 hover:text-gray-900 shadow-sm transition-all duration-200 active:scale-98"
            >
              <MoveLeft size={16} />
              Go Back
            </button>

            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl text-white bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-200 active:scale-98"
            >
              <Home size={16} />
              Return Home
            </button>
          </div>
          
        </div>
      </div>

      {/* Professional Brand Footer */}
      <footer className="py-8 border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
            <span className="text-gray-900">TECH</span>
            <span className="text-orange-500">SASI</span>
          </div>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} TECH SASI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}