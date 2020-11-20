import React, {FC} from 'react';
import './index.scss';

interface FormProps {
  buttonType?: 'primary' | 'secondary';
}

const NewsletterForm: FC<FormProps> = ({buttonType = 'primary'}) => {
  return (
    <form
      className="newsletter-form"
      onSubmit={(e) => {
        // TODO - Logic for saving the email for the upcoming newsletter
        e.preventDefault();
        console.log('Submitted');
      }}
    >
      <input type="text" className="Input" placeholder="Email address" />
      <button className={`Button Button--contained Button--${buttonType}`} type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewsletterForm;
