import React, {FC} from 'react';
import {useHistory} from 'react-router';
import {Icon, IconType} from '@thenewboston/ui';

import {Button, Container} from 'components';
import ApiIcon from '../icons/ApiIcon';
import SdkIcon from '../icons/SdkIcon';
import './Tools.scss';

const Tools: FC = () => {
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
              This is the core of our technical documentation. If you develop in languages other than JavaScript and
              Python, or if you prefer to work in Vanilla JavaScript or plain Python without using our SDKs and
              Libraries, this is your starting point.
            </div>
            <Button
              className="Tools__tool-button"
              variant="outlined"
              onClick={() => history.push('/developer/api/bank-api')}
            >
              Learn More
              <Icon icon={IconType.chevronRight} size={16} />
            </Button>
          </div>
          <div className="Tools__tool">
            <div className="Tools__tool-icon">
              <SdkIcon size={36} />
            </div>
            <div className="Tools__tool-title">SDKs & Libraries</div>
            <div className="Tools__tool-description">
              Are you a JavaScript or Python developer? Are you ready to develop your awesome software for thenewboston
              network? Our SDKs and Libraries will help you get started.
            </div>
            <Button
              className="Tools__tool-button"
              variant="outlined"
              onClick={() => history.push('/developer/sdks-and-libraries')}
            >
              Learn More
              <Icon icon={IconType.chevronRight} size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;
