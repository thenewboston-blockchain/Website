import React, {FC} from 'react';

import {CustomIconProps} from './types';

const CoinsIcon: FC<CustomIconProps> = ({size = 24, state = 'default'}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#faqCoinsClip0)">
        <path
          d="M2.807 21.09c2.918 6.8 10.619 9.72 16.653 9.222 1.648-.136 4.963-.41 7.551-2.85 4.97-4.687 4.205-14.484-.553-20.252-.613-.742-4.854-5.719-11.464-5.652-4.84.049-8.236 2.774-8.65 3.114a13.299 13.299 0 00-2.709 3.065c-2.437 3.8-2.651 9.104-.828 13.353z"
          fill="url(#paint0_linear)"
        />
        <g clipPath="url(#faqCoinsClip1)">
          <path
            d="M24.833 16.417c0 6.581-5.334 11.916-11.916 11.916C6.335 28.333 1 23 1 16.417 1 9.835 6.335 4.5 12.917 4.5s11.916 5.335 11.916 11.917z"
            fill="#DC0D16"
          />
          <path
            d="M21.788 16.228a9.058 9.058 0 01-9.06 9.06 9.058 9.058 0 01-9.059-9.06 9.058 9.058 0 019.06-9.06 9.058 9.058 0 019.059 9.06z"
            fill="#7C030C"
          />
          <path d="M22.043 16.605a8.938 8.938 0 11-17.876 0 8.938 8.938 0 0117.876 0z" fill="#94090F" />
          <path d="M12.535 11.639h-2.429l4.454 4.589-4.454 4.589h2.429l4.452-4.59-4.452-4.588z" fill="#fff" />
        </g>
        <g clipPath="url(#clip2)">
          <path d="M27 25.083a5.416 5.416 0 11-10.833 0 5.416 5.416 0 0110.832 0z" fill="#DC0D16" />
          <path d="M25.615 24.998a4.117 4.117 0 11-8.235 0 4.117 4.117 0 018.235 0z" fill="#7C030C" />
          <path d="M25.731 25.17a4.063 4.063 0 11-8.126-.001 4.063 4.063 0 018.126 0z" fill="#94090F" />
          <path d="M21.409 22.912h-1.104l2.024 2.086-2.024 2.085h1.104l2.023-2.085-2.023-2.086z" fill="#fff" />
        </g>
        {state === 'default' && (
          <g style={{mixBlendMode: 'saturation'}}>
            <rect y="-0.299377" width="32" height="32" fill="white" />
          </g>
        )}
      </g>
      <defs>
        <clipPath id="faqCoinsClip0">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="faqCoinsClip1">
          <path fill="#fff" transform="translate(1 4.5)" d="M0 0h23.833v23.833H0z" />
        </clipPath>
        <clipPath id="clip2">
          <path fill="#fff" transform="translate(16.166 19.667)" d="M0 0h10.833v10.833H0z" />
        </clipPath>
        <linearGradient
          id="paint0_linear"
          x1="-.152"
          y1="34.111"
          x2="21.013"
          y2="11.199"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAE3FE" />
          <stop offset="1" stopColor="#E9EFFD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CoinsIcon;
