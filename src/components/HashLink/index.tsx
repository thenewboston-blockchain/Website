import React, {FC, useCallback} from 'react';
import clsx from 'clsx';

import './HashLink.scss';

interface ComponentProps {
  className?: string;
  id: string;
}

const HashLink: FC<ComponentProps> = ({className, id}) => {
  const hashlinkClickHandler = useCallback(
    (e: any) => {
      e.preventDefault();
      const linkedEl = document.querySelector(`#${id}`);

      if (!linkedEl) return;

      const topNavigationHeight = (document.querySelector('.Layout__top-nav-wrapper') as HTMLDivElement).offsetHeight;

      const linkedElTopDistance = linkedEl.getBoundingClientRect().top + window.scrollY;
      const scrollLocation = linkedElTopDistance - topNavigationHeight;

      window.location.hash = id;

      window.scrollTo({
        top: scrollLocation,
      });
    },
    [id],
  );

  return (
    <a className={clsx('HashLink', className)} href={`#${id}`} onClick={hashlinkClickHandler}>
      #
    </a>
  );
};

export default HashLink;
