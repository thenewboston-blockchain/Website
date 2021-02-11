import React, {FC, ReactNode, useEffect, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {useEventListener, useWindowDimensions} from 'hooks';
import './Popover.scss';

interface DomRect {
  height: number;
  left: number;
  top: number;
  width: number;
}

export type HorizontalPosition = 'center' | 'left' | 'right';
export type VerticalPosition = 'bottom' | 'center' | 'top';

const initialDomRect = {height: 0, left: 0, top: 0, width: 0};

interface ComponentProps {
  anchorOrigin?: {horizontal: HorizontalPosition | number; vertical: VerticalPosition | number};
  anchorEl: HTMLElement | null;
  children: ReactNode;
  className?: string;
  closePopover(): void;
  id?: string;
  open: boolean;
  transformOrigin?: {horizontal: HorizontalPosition | number; vertical: VerticalPosition | number};
  transformOffset?: {horizontal: number; vertical: number};
}

const Popover: FC<ComponentProps> = ({
  anchorEl,
  anchorOrigin = {horizontal: 'left', vertical: 'top'},
  children,
  className,
  closePopover,
  id = 'popover',
  open,
  transformOrigin = {horizontal: 'left', vertical: 'top'},
  transformOffset = {horizontal: 0, vertical: 0},
}) => {
  const {pathname} = useLocation();
  const portalRef = useRef<HTMLDivElement>(null);
  const [anchorDomRef, setAnchorDomRect] = useState<DomRect>(initialDomRect);
  const [portalDomRect, setPortalDomRect] = useState<DomRect>(initialDomRect);
  const windowDimensions = useWindowDimensions();

  useEventListener(
    'mousedown',
    (e: any): void => {
      let targetElement = e.target;

      do {
        if (targetElement.id === id || targetElement === anchorEl) {
          return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);

      closePopover();
    },
    document,
  );

  useEventListener(
    'scroll',
    (e: any): void => {
      let targetElement = e.target;

      do {
        if (targetElement.id === id) {
          return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);

      closePopover();
    },
    document,
    true,
  );

  useEffect(() => {
    closePopover();
  }, [closePopover, pathname]);

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
        <div
          aria-hidden={!open}
          className={clsx('Popover', className, {
            'Popover--open': open,
            ...bemify(className, '--open', open),
          })}
          id={id}
          onClick={handleStopFromClosing}
          ref={portalRef}
          role="dialog"
          style={portalStyle}
          tabIndex={open ? undefined : -1}
        >
          {children}
        </div>,
        document.getElementById('popover-root')!,
      )}
    </>
  );
};

export default Popover;
