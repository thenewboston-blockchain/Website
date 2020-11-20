import axios from 'axios';
import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import './NewsletterForm.scss';

interface FormProps {
  buttonType?: 'primary' | 'secondary';
}

const NewsletterForm: FC<FormProps> = ({buttonType = 'primary'}) => {
  const [email, setEmail] = useState<string>('');

  const handleEmailValue = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) axios.post('NEWSLETTER__ENDPOINT', {email}).then(() => setEmail(''));
  };
  return (
    <form className="newsletter-form" onSubmit={handleFormSubmit}>
      <input value={email} onChange={handleEmailValue} type="text" className="Input" placeholder="Email address" />
      <button className={`Button Button--contained Button--${buttonType}`} type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewsletterForm;
