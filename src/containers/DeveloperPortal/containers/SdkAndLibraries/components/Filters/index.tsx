import React, {FC} from 'react';
import clsx from 'clsx';

import {Checkbox} from 'components/FormElements';
import {Language} from 'types/libraries';

import './Filters.scss';

type Props = {
  selectedLanguages: string[];
  toggleLanguage: (language: Language) => void;
};

const Filters: FC<Props> = ({selectedLanguages, toggleLanguage}) => {
  const allLanguages = Object.values(Language);

  return (
    <div className="Filters">
      <h3 className="Filters__title">Language</h3>

      {allLanguages.map((language) => (
        <div
          className={clsx('Filters__filter', selectedLanguages.includes(language) && 'Filters__filter--selected')}
          key={language}
          role="button"
          tabIndex={0}
          onClick={() => toggleLanguage(language)}
        >
          <Checkbox
            checked={selectedLanguages.includes(language)}
            className="Filters__filter-icon"
            value={language}
            size={18}
          />
          {language}
        </div>
      ))}
    </div>
  );
};

export default Filters;
