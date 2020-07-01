import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import BankRegistration from './BankRegistration';
import Introduction from './Introduction';

import './BankAPI.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'bank-registration':
      return <BankRegistration />;
    case 'introduction':
      return <Introduction />;
    default:
      return <Introduction />;
  }
};

const BankAPI = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="BankAPI">{pageContent}</div>;
};

export default BankAPI;
