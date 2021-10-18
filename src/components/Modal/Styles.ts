import styled, {keyframes, css} from 'styled-components';
import zIndex from 'styles/zIndex';
import * as FontWeight from 'styles/fonts/fontWeights';
import colors from 'styles/colors';

const modalHeaderHeight = '48px';
const modalHeaderHeightMobile = '75px';
const modalFooterHeight = '60px';
const breakMobile = '640px';

const addOverlay = keyframes`
  from {
    background: rgba(0, 0, 0, 0);
  }
  to {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const H2 = styled.h2`
  font-size: 20px;
  ${FontWeight.fontWeightSemiBold}
  line-height: 125%;
`;

export const Overlay = styled.div<{submitting?: boolean}>`
  animation: ${addOverlay} 0.3s forwards;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;

  ${(props) =>
    props.submitting &&
    css`
      cursor: wait;
    `}
`;

export const CloseIcon = styled.div<{submitting?: boolean}>`
  position: absolute;
  right: 9px;
  top: 50%;
  transform: translateY(-50%);

  ${(props) =>
    props.submitting &&
    css`
      cursor: wait;
    `}

  @media screen and (max-width: ${breakMobile}) {
    left: 23px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Content = styled.div`
  background: ${colors.palette.gray['050']};
  max-height: calc(85vh - #{${modalHeaderHeight}} - #{${modalFooterHeight}});
  overflow-y: auto;
  padding: 12px;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  height: ${modalHeaderHeight};
  padding: 0 12px;
  position: relative;

  @media screen and (max-width: ${breakMobile}) {
    display: none;
  }
`;

export const Footer = styled.div`
  align-items: center;
  display: flex;
  height: ${modalFooterHeight};
  justify-content: flex-end;
  padding: 0 12px;

  @media screen and (max-width: ${breakMobile}) {
    display: none;
  }
`;

export const HeaderMobile = styled.div`
  display: none;

  @media screen and (max-width: ${breakMobile}) {
    align-items: center;
    background-color: white;
    display: flex;
    height: ${modalHeaderHeightMobile};
    padding: 0 12px;
    position: relative;

    h2 {
      margin-left: 60px;
    }
  }
`;

export const DefaultSubmit = styled.div`
  margin-left: 12px;

  @media screen and (max-width: ${breakMobile}) {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const DefaultCancel = styled.div`
  border: none;
  box-shadow: none;
  margin-left: 12px;
`;

export const Modal = styled.div<{defaultPosition?: boolean}>`
  background: ${colors.white};
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: fixed;

  ${(props) =>
    props.defaultPosition &&
    css`
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 396px;
    `}

  @media screen and (max-width: ${breakMobile}) {
    background-color: ${colors.palette.gray['050']};
    height: 100%;
    position: fixed;
    width: 100vw;
    z-index: ${zIndex.modal};
  }
`;
