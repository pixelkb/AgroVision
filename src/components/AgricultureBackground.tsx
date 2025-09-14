import React from 'react';

export default function AgricultureBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e5f5e7" />
            <stop offset="60%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e5f0ff" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect x="0" y="0" width="1440" height="900" fill="url(#sky)" />

        {/* Sun */}
        <g className="agri-sun" style={{ transformOrigin: '1200px 140px' }}>
          <circle cx="1200" cy="140" r="110" className="fill-crop-200 opacity-40" />
          <circle cx="1200" cy="140" r="70" className="fill-crop-400 opacity-60" />
          <circle cx="1200" cy="140" r="40" className="fill-crop-500" />
        </g>

        {/* Clouds */}
        <g className="agri-cloud" style={{ transform: 'translateX(-200px)' }}>
          <ellipse cx="200" cy="140" rx="90" ry="38" className="fill-white opacity-70" />
          <ellipse cx="260" cy="150" rx="80" ry="34" className="fill-white opacity-70" />
          <ellipse cx="150" cy="155" rx="70" ry="28" className="fill-white opacity-70" />
        </g>
        <g className="agri-cloud slower" style={{ transform: 'translateX(-400px) translateY(40px)' }}>
          <ellipse cx="600" cy="180" rx="80" ry="30" className="fill-white opacity-70" />
          <ellipse cx="650" cy="190" rx="60" ry="26" className="fill-white opacity-70" />
          <ellipse cx="540" cy="195" rx="55" ry="22" className="fill-white opacity-70" />
        </g>
        <g className="agri-cloud faster" style={{ transform: 'translateX(-300px) translateY(-10px)' }}>
          <ellipse cx="1000" cy="120" rx="70" ry="26" className="fill-white opacity-70" />
          <ellipse cx="1050" cy="125" rx="55" ry="22" className="fill-white opacity-70" />
        </g>

        {/* Rolling fields */}
        <g className="agri-field">
          <path d="M0 640 C 240 600, 480 700, 720 660 C 960 620, 1200 700, 1440 660 L 1440 900 L 0 900 Z" className="fill-agri-200" />
          <path d="M0 700 C 240 660, 480 740, 720 700 C 960 660, 1200 740, 1440 700 L 1440 900 L 0 900 Z" className="fill-agri-300" />
          <path d="M0 760 C 240 720, 480 800, 720 760 C 960 720, 1200 800, 1440 760 L 1440 900 L 0 900 Z" className="fill-agri-400" />
        </g>

        {/* Furrows */}
        <g className="agri-field" opacity="0.25">
          <path d="M0 760 Q 200 740 400 760 T 800 760 T 1200 760 T 1600 760" className="fill-transparent stroke-agri-700" strokeWidth="2" />
          <path d="M0 720 Q 240 700 480 720 T 960 720 T 1440 720" className="fill-transparent stroke-agri-700" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

