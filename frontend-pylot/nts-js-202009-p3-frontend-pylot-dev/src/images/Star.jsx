import React from 'react';

function Star() {
  return (
    <div>
      <svg
        width="36"
        height="34"
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M17.0489 0.927048C17.3483 0.00573688 18.6517 0.00573985 18.9511 0.92705L21.3677 8.36475C21.5016 8.77677 21.8855 9.05573 22.3188 9.05573H30.1392C31.1079 9.05573 31.5107 10.2953 30.727 10.8647L24.4001 15.4615C24.0496 15.7161 23.903 16.1675 24.0369 16.5795L26.4535 24.0172C26.7529 24.9385 25.6984 25.7047 24.9147 25.1353L18.5878 20.5385C18.2373 20.2839 17.7627 20.2839 17.4122 20.5385L11.0853 25.1353C10.3016 25.7047 9.24714 24.9385 9.54649 24.0172L11.9631 16.5795C12.097 16.1675 11.9504 15.7161 11.5999 15.4615L5.27299 10.8647C4.48928 10.2953 4.89206 9.05573 5.86078 9.05573H13.6812C14.1145 9.05573 14.4984 8.77677 14.6323 8.36474L17.0489 0.927048Z"
            fill="#FFC90B"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.858887"
            y="0.236084"
            width="34.2823"
            height="33.0947"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
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

export default Star;
