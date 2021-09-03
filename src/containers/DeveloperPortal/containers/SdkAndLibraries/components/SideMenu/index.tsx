import React, {FC} from 'react';
import Filters from '../Filters';

import './SideMenu.scss';

type Props = {
  selectedLanguages: string[];
  toggleLanguage: (language: string) => void;
};

const SideMenu: FC<Props> = ({selectedLanguages, toggleLanguage}) => {
  return (
    <div className="SideMenu">
      <Filters selectedLanguages={selectedLanguages} toggleLanguage={toggleLanguage} />
    </div>
  );
};

export default SideMenu;
