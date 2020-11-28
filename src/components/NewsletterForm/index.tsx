import React, {FC} from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Button} from 'components';
import {Input} from 'components/FormElements';

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
    <div className="NewsletterForm">
      <form onSubmit={formik.handleSubmit}>
        <Input
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="text"
          className="NewsletterForm__input"
          placeholder="Email address"
        />
        <Button className="NewsletterForm__button" color={buttonType} type="submit">
          Submit
        </Button>
      </form>
      <p className="NewsletterForm__error">{formik.errors.email && formik.touched.email && formik.errors.email}</p>
    </div>
  );
};

export default NewsletterForm;
