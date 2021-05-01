export interface CustomIconProps {
  className?: string;
  color?: string;
  onClick?(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void;
  size?: number | string;
  state?: 'default' | 'hover' | 'active';
}
