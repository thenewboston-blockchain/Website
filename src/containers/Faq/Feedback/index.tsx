import React, {useState} from 'react';

import {sendFeedback} from 'apis/faq';
import {Form, FormButton, FormInput, FormTextArea} from 'components/FormComponents';
import Toast from 'components/Toast';
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

const Feedback = () => {
  const [sendFeedbackSuccess, setSendFeedbackSuccess] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const handleSubmit = async ({content, emailAddress, name}: FormValues) => {
    try {
      setHasSent(false);
      await sendFeedback(name, emailAddress, content);
      setSendFeedbackSuccess(true);
    } catch (err) {
      setSendFeedbackSuccess(false);
    } finally {
      setHasSent(true);
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
        {hasSent && sendFeedbackSuccess && <Toast type="success">Success! Thank you for your feedback</Toast>}
        {hasSent && !sendFeedbackSuccess && (
          <Toast type="warning">Sorry, there was an error with your submission. Please try again later.</Toast>
        )}
      </div>
    </div>
  );
};

export default Feedback;
