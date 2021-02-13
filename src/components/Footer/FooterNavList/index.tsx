import React, {FC} from 'react';

import {A} from 'components';
import {Link} from 'react-router-dom';

import './FooterNavList.scss';

interface NavLink {
  isExternal?: boolean;
  title: string;
  url: string;
}

interface ComponentProps {
  header: string;
  links: NavLink[];
}

const FooterNavList: FC<ComponentProps> = ({header, links}) => {
  return (
    <ul className="FooterNavList">
      <li className="FooterNavList__header">{header}</li>
      {links.map((link) => (
        <li className="FooterNavList__item" key={link.title}>
          {link.isExternal ? (
            <A className="FooterNavList__item-link" href={link.url}>
              {link.title}
            </A>
          ) : (
            <Link className="FooterNavList__item-link" to={link.url}>
              {link.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterNavList;
