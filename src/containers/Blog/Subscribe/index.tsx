import React, {FC} from 'react';
import yup from 'utils/yup';

import {SocialMedia} from 'types/social-media';
import {SocialMediaIcon} from 'components';
import './Subscribe.scss';
import {Form, FormButton, FormInput} from 'components/FormComponentsBlog';

const Subscribe: FC = () => {
  const initialValues = {email: ''};
  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
  });

  const renderSocialMediaLinks = () =>
    [SocialMedia.linkedin, SocialMedia.facebook, SocialMedia.twitter, SocialMedia.instagram].map((website) => (
      <SocialMediaIcon className="Subscribe__SocialMediaLink" iconSize={28} key={website} website={website} />
    ));
  return (
    <div className="Subscribe">
      <div className="Subscribe__content-container">
        <div className="Subscribe__wrapper">
          <div className="Subscribe__inner-wrapper">
            <div className="Subscribe__socials">
              <h3>Stay connected</h3>
              <div className="Subscribe__social-icons">{renderSocialMediaLinks()}</div>
            </div>
            <Form
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={() => {}}
              className="Subscribe__form-wrapper"
            >
              <h3>Get the latest updates</h3>
              <div className="Subscribe__form">
                <FormInput name="email" className="Subscribe__form-input" placeholder="Enter your email" />
                <FormButton type="submit" className="Subscribe__form-button">
                  Subscribe
                </FormButton>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
