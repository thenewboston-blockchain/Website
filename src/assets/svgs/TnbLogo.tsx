import React, {FC} from 'react';

const TnbLogo: FC<React.HTMLAttributes<SVGSVGElement>> = (props) => {
  const {color} = props;
  return (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.23529 0.235291L0 0.235291L7.76471 8L0 15.7647H4.23529L12 8L4.23529 0.235291Z"
        fill={color || 'white'}
      />
    </svg>
  );
};

export default TnbLogo;
