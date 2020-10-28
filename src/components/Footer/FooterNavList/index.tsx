import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import './FooterNavList.scss';

interface NavLink {
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
          <Link className="FooterNavList__item-link" to={link.url}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterNavList;
