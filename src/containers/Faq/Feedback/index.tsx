import React, {FC} from 'react';

import {sendFeedback} from 'apis/faq';
import {Form, FormButton, FormInput, FormTextArea} from 'components/FormComponents';
import {displayErrorToast, displayToast} from 'utils/toast';
import yup from 'utils/yup';

import './Feedback.scss';

const initialValues = {
  content: '',
  emailAddress: '',
  name: '',
};

const validationSchema = yup.object().shape({
  content: yup.string().required('This field is required'),
  emailAddress: yup.string().email('Please enter a valid email format').required('This field is required'),
  name: yup.string().required('This field is required'),
});

type FormValues = typeof initialValues;

const Feedback: FC = () => {
  const handleSubmit = async ({content, emailAddress, name}: FormValues) => {
    try {
      await sendFeedback(name, emailAddress, content);
      displayToast('Success! Thank you for your feedback', 'success');
    } catch (err) {
      displayErrorToast('Sorry, there was an error with your submission. Please try again later.');
    }
  };

  return (
    <div className="Feedback">
      <div className="Feedback__content">
        <div className="Feedback__title">Send Us Your Feedback</div>
        <div className="Feedback__subtitle">
          Do you have a suggestion or found some bug? Let us know in the field below.
        </div>
        <Form
          className="Feedback__form"
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({isValid}) => (
            <>
              <div className="Feedback__form-left">
                <FormInput className="Feedback__form-input" placeholder="Name" name="name" />
                <FormInput className="Feedback__form-input" placeholder="Email Address" name="emailAddress" />
              </div>
              <div className="Feedback__form-right">
                <FormTextArea
                  className="Feedback__form-text-area"
                  placeholder="What do you want to talk about?"
                  name="content"
                />
                <FormButton className="Feedback__form-button" disabled={!isValid} type="submit">
                  Submit
                </FormButton>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};

export default Feedback;
