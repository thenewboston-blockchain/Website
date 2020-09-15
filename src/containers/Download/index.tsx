import React from 'react';

import {Button} from 'components';

import './Download.scss';

const Download = () => {
  const renderOS = (name: string, link: string) => {
    return (
      <div className="Download__os">
        <div className="Download__os-name">{name}</div>
        <a href={link}>
          <Button className="Download__os-download-button">Download</Button>
        </a>
      </div>
    );
  };

  return (
    <div className="Download">
      {renderOS(
        'Windows',
        'https://github.com/thenewboston-developers/Account-Manager/releases/download/v1.0.0-alpha.11/TNB-Account-Manager-1.0.0-alpha.11-win.exe',
      )}
      {renderOS(
        'Mac',
        'https://github.com/thenewboston-developers/Account-Manager/releases/download/v1.0.0-alpha.11/TNB-Account-Manager-1.0.0-alpha.11-mac.dmg',
      )}
      {renderOS(
        'Linux',
        'https://github.com/thenewboston-developers/Account-Manager/releases/download/v1.0.0-alpha.11/TNB-Account-Manager-1.0.0-alpha.11-linux.AppImage',
      )}
    </div>
  );
};

export default Download;
