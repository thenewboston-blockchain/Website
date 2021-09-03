import styled from 'styled-components';
import {fontWeightMedium} from 'styles/fonts/fontWeights';
import zIndex from 'styles/zIndex';
import {Icon} from '@thenewboston/ui';

export const BreadcrumbBar = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  ${fontWeightMedium}
  height: 40px;
  justify-content: space-between;
  max-width: 100vw;
  padding: 0 12px;

  &:focus {
    outline: none;
  }
`;

export const BreadcrumbNavigation = styled.div`
  align-items: center;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
`;

export const DropdownMenu = styled.div`
  $navigation-bars-height: 100px; // TopNav.height + BreadcrumbMenu__bar.height
  background: #fff;
  box-shadow: 0 3px 3px rgba(4, 34, 53, 0.06);
  cursor: auto;
  max-height: calc(100vh - #{$navigation-bars-height});
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 10px;
  position: absolute;
  right: 0;
  top: $navigation-bars-height;
  width: 100vw;
  z-index: ${zIndex.breadcrumb};
`;

export const ToggleArrowContainer = styled.div`
  align-items: center;
  display: flex;
  padding-left: 2px;
`;

interface ToggleArrowProps {
  isOpened?: boolean;
}

export const ToggleArrow = styled(Icon)<ToggleArrowProps>`
  transform: ${(props) => (props.isOpened ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition-duration: 0.4s;
`;
