import React from 'react';

interface FinrookLogoProps {
  className?: string;
  size?: number;
}

export const FinrookLogo: React.FC<FinrookLogoProps> = ({
  className = '',
  size = 40,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center relative select-none shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="finrook-rook">
          {/* Top Crown Battlements */}
          <path
            d="M 175 80 
               L 325 80 
               L 325 155 
               C 325 165, 315 170, 290 170 
               L 210 170 
               C 185 170, 175 165, 175 155 
               Z"
            fill="#FF2B06"
          />
          {/* Battlement cutouts */}
          <rect x="205" y="80" width="26" height="26" fill="#0A0A0A" />
          <rect x="269" y="80" width="26" height="26" fill="#0A0A0A" />
          
          {/* Top Crown Rim Line */}
          <path
            d="M 180 155 L 320 155"
            stroke="#0A0A0A"
            strokeWidth="5"
          />

          {/* Waist Band */}
          <rect x="110" y="170" width="280" height="74" fill="#0A0A0A" />
          
          {/* FINROOK Text across the waist */}
          <text
            x="250"
            y="222"
            textAnchor="middle"
            fill="#FF2B06"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="48"
            letterSpacing="6"
            fontWeight="900"
          >
            FINROOK
          </text>

          {/* Lower Tower Trunk flaring down */}
          <path
            d="M 210 244 
               L 290 244 
               C 295 285, 310 325, 335 370 
               L 165 370 
               C 190 325, 205 285, 210 244 
               Z"
            fill="#FF2B06"
          />

          {/* Stepped Pedestal Base */}
          <rect x="170" y="370" width="160" height="22" rx="4" fill="#FF2B06" stroke="#0A0A0A" strokeWidth="4" />
          <rect x="150" y="392" width="200" height="34" rx="6" fill="#FF2B06" stroke="#0A0A0A" strokeWidth="5" />
          <rect x="135" y="426" width="230" height="42" rx="8" fill="#FF2B06" />

          {/* Clean black structural inner groove on base */}
          <path
            d="M 152 426 L 348 426"
            stroke="#0A0A0A"
            strokeWidth="6"
          />
        </g>
      </svg>
    </div>
  );
};
