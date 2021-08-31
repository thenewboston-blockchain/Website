import React from 'react';
import {createPortal} from 'react-dom';
import {Link} from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';

import {Button} from 'components';
import {SFC} from 'types/generic';

import LeaveSiteImg from '../../assets/leave-site.svg';

import './ConfirmationModal.scss';

type Props = {
  url: string | null;
  onClose: () => void;
};

const ConfirmationModal: SFC<Props> = ({url, onClose}) => {
  const ref = useOnclickOutside(onClose);

  const navigateToUrl = (): void => {
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
      onClose();
    }
  };

  if (!url) return null;

  return createPortal(
    <div className="ConfirmationModal">
      <div className="ConfirmationModal__container" ref={ref}>
        <img className="ConfirmationModal__image" src={LeaveSiteImg} alt="Visit SDK or Library" />
        <h4 className="ConfirmationModal__heading">You are now leaving thenewboston.com</h4>
        <p className="ConfirmationModal__help-text">
          thenewboston is not responsible for the content of external sites and services.{' '}
          <Link to="/terms-of-use">Learn More</Link>
        </p>
        <div className="ConfirmationModal__actions">
          <Button className="ConfirmationModal__btn" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button className="ConfirmationModal__btn" onClick={navigateToUrl}>
            Ok
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')!,
  );
};

export default ConfirmationModal;
