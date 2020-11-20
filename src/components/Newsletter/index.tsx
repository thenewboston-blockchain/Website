import React, {FC, Fragment, useState, useEffect} from 'react';
import {Icon, IconType} from 'components';
import NewsletterForm from '../NewsletterForm';
import './Newsletter.scss';

const NewsletterModal: FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    const newsletterModal = localStorage.getItem('newsletter-modal');
    if (!newsletterModal) {
      setModal(true);
      localStorage.setItem('newsletter-modal', 'true');
    }
  }, []);

  if (modal) {
    return (
      <div className="newsletter-modal">
        <div className="newsletter-modal__content">
          <Icon icon={IconType.closeIcon} onClick={() => setModal(false)} />
          <h1 className="newsletter-modal__title">Join The Community!</h1>
          <p>Get the latest updates on new videos, openings, features, and special offers directly in your inbox!</p>
          <NewsletterForm />
        </div>
      </div>
    );
  }

  return <></>;
};

export default NewsletterModal;
