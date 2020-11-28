import React, {FC, Fragment, useEffect} from 'react';
import axios from 'axios';
import yup from 'utils/yup';
import {useBooleanState} from 'hooks';
import {Button} from 'components/FormElements';
import {FormInput} from 'components/FormComponents';
import Modal from 'components/Modal';
import './Newsletter.scss';

interface Newsletter {
  email: string;
}

const NewsletterModal: FC = () => {
  const [showModal, toggleModalState] = useBooleanState(false);

  useEffect(() => {
    const isNewsLetterModalSeen = localStorage.getItem('isNewsLetterModalSeen');
    if (!isNewsLetterModalSeen) {
      toggleModalState();
      localStorage.setItem('isNewsLetterModalSeen', 'true');
    }
  }, [toggleModalState]);

  const handleSubmit = ({email}: Newsletter) => axios.post('NEWSLETTER__ENDPOINT', {email});

  const validationSchema = yup
    .object()
    .shape({email: yup.string().required('Email is required.').email('Invalid email.')});

  return (
    <>
      {showModal && (
        <Modal
          className="Newsletter"
          initialValues={{email: ''}}
          displaySubmitButton={false}
          displayCancelButton={false}
          onSubmit={handleSubmit}
          close={toggleModalState}
          validationSchema={validationSchema}
        >
          <span className="Newsletter__title">Join the Community!</span>
          <span>
            Get the latest updates on new videos, openings, features, and special offers directly in your inbox!
          </span>
          <div className="Newsletter__form">
            <FormInput className="Newsletter__input" name="email" placeholder="Email" />
            <Button className="Newsletter__button" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default NewsletterModal;
