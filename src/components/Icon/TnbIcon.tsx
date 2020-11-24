import React, {FC} from 'react';
import clsx from 'clsx';

interface TnbIconProps {
  className?: string;
  color?: string;
  onClick?(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void;
  size?: number | string;
}

const TnbIcon: FC<TnbIconProps> = ({className, color = 'currentColor', onClick, size = 24}) => {
  return (
    <svg
      className={clsx('TnbIcon', {className})}
      width={size}
      height={size}
      fill={color}
      onClick={onClick}
      viewBox="0 0 24 24"
    >
      <path d="M4.23529 0.5H0L7.76471 8.5L0 16.5H4.23529L12 8.5L4.23529 0.5Z" />
    </svg>
  );
};

export default TnbIcon;
