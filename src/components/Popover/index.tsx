import React, {useEffect, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {useLocation} from 'react-router-dom';
import throttle from 'lodash/throttle';

import {useEventListener, useWindowDimensions} from 'hooks';
import {SFC} from 'types/generic';

import * as S from './Styles';

interface DomRect {
  height: number;
  left: number;
  top: number;
  width: number;
}

export type HorizontalPosition = 'center' | 'left' | 'right';
export type VerticalPosition = 'bottom' | 'center' | 'top';

const initialDomRect = {height: 0, left: 0, top: 0, width: 0};

export interface PopoverProps {
  anchorOrigin?: {horizontal: HorizontalPosition | number; vertical: VerticalPosition | number};
  anchorEl: HTMLElement | null;
  closePopover(): void;
  id?: string;
  open: boolean;
  transformOrigin?: {horizontal: HorizontalPosition | number; vertical: VerticalPosition | number};
  transformOffset?: {horizontal: number; vertical: number};
}

const Popover: SFC<PopoverProps> = ({
  anchorEl,
  anchorOrigin = {horizontal: 'left', vertical: 'top'},
  children,
  closePopover,
  id = 'popover',
  open,
  transformOrigin = {horizontal: 'left', vertical: 'top'},
  transformOffset = {horizontal: 0, vertical: 0},
  className,
}) => {
  const {pathname} = useLocation();
  const portalRef = useRef<HTMLDivElement>(null);
  const [anchorDomRef, setAnchorDomRect] = useState<DomRect>(initialDomRect);
  const [portalDomRect, setPortalDomRect] = useState<DomRect>(initialDomRect);
  const windowDimensions = useWindowDimensions();

  useEventListener(
    'mousedown',
    throttle((e: any): void => {
      if (!open) return;

      let targetElement = e.target;

      do {
        if (targetElement.id === id || targetElement === anchorEl) {
          return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);

      closePopover();
    }, 150),
    document,
  );

  useEventListener(
    'scroll',
    throttle((e: any): void => {
      if (!open) return;

      let targetElement = e.target;

      do {
        if (targetElement.id === id) {
          return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);

      closePopover();
    }, 150),
    document,
    true,
  );

  useEffect(() => {
    if (open) {
      closePopover();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (anchorEl) {
      const {height, top, width} = anchorEl.getBoundingClientRect();
      const left = anchorEl.offsetLeft;
      setAnchorDomRect({height, left, top, width});
    }
  }, [anchorEl, windowDimensions]);

  useEffect(() => {
    if (portalRef.current) {
      const {height, left, top, width} = portalRef.current.getBoundingClientRect();
      setPortalDomRect({height, left, top, width});
    }
  }, [portalRef, windowDimensions]);

  const handleStopFromClosing = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.stopPropagation();
  };

  const portalStyle = useMemo(() => {
    let left: number;
    let top: number;

    if (anchorOrigin.horizontal === 'left') {
      left = anchorDomRef.left;
    } else if (anchorOrigin.horizontal === 'right') {
      left = anchorDomRef.left + anchorDomRef.width;
    } else if (anchorOrigin.horizontal === 'center') {
      left = anchorDomRef.left + anchorDomRef.width / 2;
    } else {
      left = anchorOrigin.horizontal;
    }

    if (transformOrigin.horizontal === 'left') {
      left += transformOffset.horizontal;
    } else if (transformOrigin.horizontal === 'right') {
      left -= portalDomRect.width;
      left -= transformOffset.horizontal;
    } else if (transformOrigin.horizontal === 'center') {
      left -= portalDomRect.width / 2;
      left += transformOffset.horizontal;
    } else {
      left -= transformOrigin.horizontal;
    }

    if (anchorOrigin.vertical === 'bottom') {
      top = anchorDomRef.top + anchorDomRef.height;
    } else if (anchorOrigin.vertical === 'top') {
      top = anchorDomRef.top;
    } else if (anchorOrigin.vertical === 'center') {
      top = anchorDomRef.top + anchorDomRef.height / 2;
    } else {
      top = anchorOrigin.vertical;
    }

    if (transformOrigin.vertical === 'bottom') {
      top -= portalDomRect.height;
      top -= transformOffset.vertical;
    } else if (transformOrigin.vertical === 'top') {
      top += transformOffset.vertical;
    } else if (transformOrigin.vertical === 'center') {
      top -= portalDomRect.width / 2;
      top += transformOffset.vertical;
    } else {
      top -= transformOrigin.vertical;
    }

    return {left, top};
  }, [
    anchorOrigin.horizontal,
    anchorOrigin.vertical,
    anchorDomRef,
    portalDomRect,
    transformOrigin.horizontal,
    transformOrigin.vertical,
    transformOffset.horizontal,
    transformOffset.vertical,
  ]);

  return (
    <>
      {createPortal(
        <S.Popover
          className={className}
          aria-hidden={!open}
          open={open}
          data-testid="Popover"
          id={id}
          onClick={handleStopFromClosing}
          ref={portalRef}
          role="dialog"
          style={portalStyle}
          tabIndex={open ? undefined : -1}
        >
          {children}
        </S.Popover>,
        document.getElementById('popover-root')!,
      )}
    </>
  );
};

export default Popover;
