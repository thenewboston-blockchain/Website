import React, {FC, useState} from 'react';

import Icon, {IconType} from 'components/Icon';
import './OpeningsOpening.scss';

interface ComponentProps {
  description: string;
  position: string;
  responsibilities: string[];
}

const OpeningsOpening: FC<ComponentProps> = ({description, position, responsibilities}) => {
  const [expanded, setExpanded] = useState(false);

  const renderExpandCollapseToggle = () => (
    <div
      className="OpeningsOpening__expand-collapse-container"
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
    >
      <Icon
        className="OpeningsOpening__expand-collapse-icon"
        icon={expanded ? IconType.minus : IconType.plus}
        size={16}
      />
      <div className="OpeningsOpening__expand-collapse-text">{expanded ? 'Collapse' : 'Expand'}</div>
    </div>
  );

  const renderExpandedContent = () => (
    <div className="OpeningsOpening__expanded-content">{renderResponsibilities()}</div>
  );

  const renderResponsibilities = () => responsibilities.map((item) => <div>{item}</div>);

  return (
    <div className="OpeningsOpening">
      <div className="OpeningsOpening__position">{position}</div>
      <div className="OpeningsOpening__description">{description}</div>
      {expanded && renderExpandedContent()}
      {renderExpandCollapseToggle()}
    </div>
  );
};

export default OpeningsOpening;
