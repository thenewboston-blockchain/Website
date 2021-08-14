import React, {FC} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import './ProjectDetailsTopic.scss';

interface ComponentProps {
  content: React.ReactNode;
  id: string;
  title: string;
}

const ProjectDetailsTopic: FC<ComponentProps> = ({content, id, title}) => {
  const history = useHistory();
  const {pathname} = useLocation();

  return (
    <div className="ProjectDetailsTopic" id={id}>
      <div className="ProjectDetailsTopic__content">
        <h1 className="ProjectDetailsTopic__content-title" onClick={() => history.push(`${pathname}#${id}`)}>
          {title}
        </h1>
        <div className="ProjectDetailsTopic__content-main">{content}</div>
      </div>
    </div>
  );
};

export default ProjectDetailsTopic;
