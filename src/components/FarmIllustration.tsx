import React from 'react';

export default function FarmIllustration() {
  return (
    <div className="mx-auto mt-6 w-full max-w-xs pointer-events-none select-none">
      <svg viewBox="0 0 320 180" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Ground */}
        <rect x="0" y="140" width="320" height="40" className="fill-agri-200" />
        {/* Barn */}
        <g>
          <rect x="40" y="90" width="90" height="60" rx="4" className="fill-soil-500" />
          <polygon points="40,90 85,60 130,90" className="fill-soil-600" />
          <rect x="78" y="110" width="24" height="40" className="fill-white" />
          <rect x="52" y="110" width="18" height="18" className="fill-white" />
          <rect x="100" y="110" width="18" height="18" className="fill-white" />
        </g>
        {/* Windmill */}
        <g transform="translate(220,70)">
          <rect x="-6" y="40" width="12" height="60" className="fill-soil-600" />
          <circle cx="0" cy="40" r="8" className="fill-agri-700" />
          <g className="wind-rotor" style={{ transformOrigin: '0px 40px' }}>
            <polygon points="0,40 0,0 10,15" className="fill-agri-500" />
            <polygon points="0,40 40,40 25,50" className="fill-agri-500" />
            <polygon points="0,40 0,80 -10,65" className="fill-agri-500" />
            <polygon points="0,40 -40,40 -25,30" className="fill-agri-500" />
          </g>
        </g>
        {/* Crops */}
        <g className="opacity-80">
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={i} d={`M ${20 + i * 24} 140 q 6 -14 0 -28`} className="fill-none stroke-agri-700" strokeWidth="2" />
          ))}
        </g>
      </svg>
    </div>
  );
}

