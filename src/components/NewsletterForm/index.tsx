import React, {FC} from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import './NewsletterForm.scss';

interface FormProps {
  buttonType?: 'primary' | 'secondary';
}

const NewsletterForm: FC<FormProps> = ({buttonType = 'primary'}) => {
  const formik = useFormik({
    initialValues: {email: ''},
    onSubmit: ({email}) => axios.post('NEWSLETTER__ENDPOINT', {email}),
    validationSchema: Yup.object().shape({email: Yup.string().email('Invalid email')}),
  });

  return (
    <div className="newsletter-form">
      <form onSubmit={formik.handleSubmit}>
        <input
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="text"
          className="Input"
          placeholder="Email address"
        />
        <button className={`Button Button--contained Button--${buttonType}`} type="submit">
          Submit
        </button>
      </form>
      <p className="newsletter-form__error">{formik.errors.email && formik.touched.email && formik.errors.email}</p>
    </div>
  );
};

export default NewsletterForm;
