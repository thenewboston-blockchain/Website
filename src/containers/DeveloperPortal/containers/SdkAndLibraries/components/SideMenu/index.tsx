import React, {FC} from 'react';

import {Checkbox} from 'components/FormElements';
import clsx from 'clsx';
import {Language} from 'types/libraries';

import './SideMenu.scss';

type Props = {
  selectedLanguages: string[];
  toggleLanguage: (language: string) => void;
};

const SideMenu: FC<Props> = ({selectedLanguages, toggleLanguage}) => {
  const allLanguages = Object.values(Language);

  return (
    <div className="SideMenu">
      <h3 className="SideMenu__title">Language</h3>
      <div className="SideMenu__filters">
        {allLanguages.map((language) => (
          <div
            className={clsx('SideMenu__filter', selectedLanguages.includes(language) && 'SideMenu__filter--selected')}
            key={language}
            role="button"
            tabIndex={0}
            onClick={() => toggleLanguage(language)}
          >
            <Checkbox
              checked={selectedLanguages.includes(language)}
              className="SideMenu__filter-icon"
              value={language}
              size={18}
            />
            {language}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
