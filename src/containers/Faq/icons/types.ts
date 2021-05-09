export interface CustomIconProps {
  onClick?(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void;
  size?: number | string;
  state?: 'default' | 'hover' | 'active';
}
