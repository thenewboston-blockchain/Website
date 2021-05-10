import React, {useState} from 'react';

import {sendFeedback} from 'apis/faq';
import {Form, FormButton, FormInput, FormTextArea} from 'components/FormComponents';
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
                <FormButton className="Feedback__form-button" rounded disabled={!isValid} type="submit">
                  Submit
                </FormButton>
              </div>
            </>
          )}
        </Form>
        {hasSent && sendFeedbackSuccess && <div>Sent feedback successfully. We will get back to you ASAP.</div>}
        {hasSent && !sendFeedbackSuccess && <div>Error while sending feedback. Please try again later.</div>}
      </div>
    </div>
  );
};

export default Feedback;
