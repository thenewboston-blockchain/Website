import React, {FC, Fragment, useState, useEffect} from 'react';
import yup from 'utils/yup';
import {useBooleanState} from 'hooks';
import {Button} from 'components/FormElements';
import {FormInput} from 'components/FormComponents';
import {Icon, IconType} from 'components';
import Modal from 'components/Modal';
import NewsletterForm from '../NewsletterForm';
import './Newsletter.scss';

const NewsletterModal: FC = () => {
  const [modal, setModal] = useBooleanState(true);

  useEffect(() => {
    const newsletterModal = localStorage.getItem('newsletter-modal');
    if (!newsletterModal) {
      setModal();
      localStorage.setItem('newsletter-modal', 'true');
    }
  }, [setModal]);

  const handleSubmit = (email: any): void => {
    // eslint-disable-next-line no-console
    console.log(email);
  };

  if (modal) {
    return (
      // <div className="newsletter-modal">
      //   <div className="newsletter-modal__content">
      //     <Icon icon={IconType.close} onClick={() => setModal(false)} />
      //     <h1 className="newsletter-modal__title">Join the Community!</h1>
      //     <p>Get the latest updates on new videos, openings, features, and special offers directly in your inbox!</p>
      //     <NewsletterForm />
      //   </div>
      // </div>
      <Modal
        className="Newsletter"
        initialValues={{email: ''}}
        displaySubmitButton={false}
        displayCancelButton={false}
        onSubmit={handleSubmit}
        close={setModal}
        validationSchema={yup.object().shape({email: yup.string().email('Invalid email')})}
      >
        <h1 className="Newsletter__title">Join the Community!</h1>
        <p>Get the latest updates on new videos, openings, features, and special offers directly in your inbox!</p>
        <div className="Newsletter__form">
          <FormInput className="Newsletter__input" name="email" placeholder="Email" />
          <Button className="Newsletter__button" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </Modal>
    );
  }

  return <></>;
};

export default NewsletterModal;
