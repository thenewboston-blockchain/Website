import React, {FC} from 'react';

import './Feature.scss';

interface ComponentProps {
  icon: string;
  subtitle: string;
  title: string;
}

const Feature: FC<ComponentProps> = ({icon, subtitle, title}) => {
  return (
    <div className="Feature">
      <div>
        <span className="material-icons">{icon}</span>
      </div>
      <div className="feature-title">{title}</div>
      <div className="feature-subtitle">{subtitle}</div>
    </div>
  );
};

export default Feature;
