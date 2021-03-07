import React from 'react';

function FooterSelection() {
  return (
    <div>
      <svg
        width="118"
        height="31"
        viewBox="0 0 118 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M61.6238 12C38.6718 12 34.3366 29 6 29H112C93.1089 29 80.0673 12 61.6238 12Z"
            fill="white"
          />
          <path
            d="M61.6238 12C38.6718 12 34.3366 29 6 29H112C93.1089 29 80.0673 12 61.6238 12Z"
            stroke="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0.5"
            width="118"
            height="30"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="-5" />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default FooterSelection;
