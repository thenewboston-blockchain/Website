import React from 'react';

import {Icon, IconType} from '@thenewboston/ui';
import {Button, Container} from 'components';
import {useHistory} from 'react-router';
import ApiIcon from '../icons/ApiIcon';
import './Tools.scss';

export default function Tools() {
  const history = useHistory();
  return (
    <div className="Tools">
      <Container className="Tools__container">
        <div className="Tools__title">Tools</div>
        <div className="Tools__content-container">
          <div className="Tools__tool">
            <div className="Tools__tool-icon">
              <ApiIcon size={36} />
            </div>
            <div className="Tools__tool-title">APIs</div>
            <div className="Tools__tool-description">
              Lorm Ipsun dolor sit Lorm Ipsun dolor sitLorm Ipsun dolor sit,dolor
            </div>
            <Button className="Tools__tool-button" variant="outlined" onClick={() => history.push('/projects')}>
              Learn More
              <Icon icon={IconType.chevronRight} size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
