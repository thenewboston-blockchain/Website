import React, {useEffect, useMemo, useState} from 'react';
import max from 'lodash/max';

import {Button} from 'components';
import {Release} from 'types/github';
import {fetchGithubReleases} from 'utils/github';

import './Download.scss';

const Download = () => {
  const [error, setError] = useState<boolean>(false);
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const results = await fetchGithubReleases();
        setReleases(results);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const latestReleaseNumber = useMemo(() => {
    const releaseNumbers = releases.map(({alphaVersion}) => alphaVersion);
    return max(releaseNumbers);
  }, [releases]);

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

  if (error) return <h1>Error</h1>;
  if (loading) return null;

  return (
    <div className="Download">
      {renderOS(
        'Windows',
        `https://github.com/thenewboston-developers/Account-Manager/releases/download/v1.0.0-alpha.${latestReleaseNumber}/TNB-Account-Manager-1.0.0-alpha.${latestReleaseNumber}-win.exe`,
      )}
      {renderOS(
        'Mac',
        `https://github.com/thenewboston-developers/Account-Manager/releases/download/v1.0.0-alpha.${latestReleaseNumber}/TNB-Account-Manager-1.0.0-alpha.${latestReleaseNumber}-mac.dmg`,
      )}
      {renderOS(
        'Linux',
        `https://github.com/thenewboston-developers/Account-Manager/releases/download/v1.0.0-alpha.${latestReleaseNumber}/TNB-Account-Manager-1.0.0-alpha.${latestReleaseNumber}-linux.AppImage`,
      )}
    </div>
  );
};

export default Download;
