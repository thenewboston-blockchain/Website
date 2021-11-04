import React, {FC} from 'react';

const Mail: FC<React.HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_865:3399)">
        <path
          d="M24 17.9824L0.0234375 5.85366V2.99707C0.0234375 2.15415 0.320023 1.4439 0.913194 0.866341C1.50636 0.288781 2.2088 0 3.02051 0H44.9795C45.7912 0 46.4937 0.288781 47.0869 0.866341C47.68 1.4439 47.9766 2.15415 47.9766 2.99707V5.85366L24 17.9824ZM22.5015 20.9795H25.4986L47.9766 9.31902V32.9678C47.9766 33.7795 47.68 34.482 47.0869 35.0751C46.4937 35.6683 45.7912 35.9649 44.9795 35.9649H3.02051C2.2088 35.9649 1.50636 35.6683 0.913194 35.0751C0.320023 34.482 0.0234375 33.7795 0.0234375 32.9678V9.31902L22.5015 20.9795Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_865:3399">
          <rect width="48" height="35.9649" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Mail;
