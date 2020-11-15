import React, {FC, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';

import {Button, CodeSnippet, Icon, IconType, Loader, PageTitle, Tab, Tabs} from 'components';
import {Release} from 'types/github';
import {fetchGithubReleases} from 'utils/github';
import {displayToast} from 'utils/toast';

import './Download.scss';

enum Os {
  'Windows' = 'Windows',
  'Mac' = 'Mac',
  'Linux' = 'Linux',
}

const Download: FC = () => {
  const userOsMatcher = /Windows|Linux|Mac/gi.exec(navigator.userAgent);
  let userOsTabIndex = 0;

  if (userOsMatcher && userOsMatcher[0] === 'Mac') {
    userOsTabIndex = 1;
  }

  if (userOsMatcher && userOsMatcher[0] === 'Linux') {
    userOsTabIndex = 2;
  }

  const [loading, setLoading] = useState<boolean>(true);
  const [releases, setReleases] = useState<Release[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetchGithubReleases();
        setReleases(response);
      } catch (error) {
        displayToast('Network Error');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const latestReleaseNumber = useMemo<number | null>(() => {
    if (!releases.length) return null;

    const releaseNumbers = releases.map(({alphaVersion}) => alphaVersion);
    return Math.max(...releaseNumbers);
  }, [releases]);

  const getOsExtension = useCallback((os: Os): string => {
    if (os === Os.Windows) return 'win.exe';
    if (os === Os.Mac) return 'mac.dmg';
    if (os === Os.Linux) return 'linux.AppImage';
    return '';
  }, []);

  const getDownloadLink = useCallback(
    (os: Os): string =>
      latestReleaseNumber
        ? `https://github.com/thenewboston-developers/Account-Manager/releases/download/v1.0.0-alpha.${latestReleaseNumber}/TNB-Account-Manager-1.0.0-alpha.${latestReleaseNumber}-${getOsExtension(
            os,
          )}`
        : '',
    [getOsExtension, latestReleaseNumber],
  );

  const renderInstructions = useCallback((os: Os): ReactNode => {
    if (os === Os.Windows) {
      return (
        <>
          <div className="instruction-container__li">
            <span className="instruction-container__instruction">Download thenewboston</span>
          </div>
          <div className="instruction-container__li">
            <span className="instruction-container__instruction">Click on the downloaded file</span>
          </div>
          <div className="instruction-container__li">
            <span className="instruction-container__instruction">
              You will get a modal that says 'Windows protected your PC'. Click <strong>More info</strong>
            </span>
          </div>
          <div className="instruction-container__li">
            <span className="instruction-container__instruction">
              Then click <strong>Run anyway</strong>
            </span>
          </div>
        </>
      );
    }
    if (os === Os.Mac) {
      return (
        <>
          <div className="instruction-container__li">
            <span className="instruction-container__instruction">Download thenewboston</span>
          </div>
          <div className="instruction-container__li">
            <span className="instruction-container__instruction">Click on the downloaded file</span>
          </div>
          <div className="instruction-container__li">
            <span className="instruction-container__instruction">Drag and drop the app to the Applications folder</span>
          </div>
          <div className="instruction-container__li">
            <span className="instruction-container__instruction">Open the app</span>
          </div>
        </>
      );
    }
    if (os === Os.Linux) {
      return (
        <>
          <div className="instruction-container__li">
            <span className="instruction-container__instruction">Download thenewboston</span>
          </div>
          <div className="instruction-container__li">
            <span className="instruction-container__instruction">To run thenewboston, make it executable</span>
          </div>
          <CodeSnippet code="$ sudo chmod a+x TNB-Account-Manager-*.AppImage" />
          <div className="instruction-container__li">
            <span className="instruction-container__instruction">Run!</span>
          </div>
          <CodeSnippet code="$ ./TNB-Account-Manager-*.AppImage" />
        </>
      );
    }
    return null;
  }, []);

  const renderTabPanel = useCallback(
    (os: Os) => (
      <div className="Download__tab-panel">
        <a className="Download__download-link" href={getDownloadLink(os)} tabIndex={-1}>
          <Button className="Download__download-button" disabled={!latestReleaseNumber}>
            Download for {os} <Icon className="Download__download-icon" icon={IconType.arrowCollapseDown} size={18} />
          </Button>
        </a>
        <div className="instruction-container">
          <h2 className="instruction-container__title">Installation Instructions</h2>
          {renderInstructions(os)}
        </div>
      </div>
    ),
    [getDownloadLink, latestReleaseNumber, renderInstructions],
  );

  const tabs = useMemo<Tab[]>(
    () => [
      {
        component: renderTabPanel(Os.Windows),
        label: Os.Windows,
      },
      {
        component: renderTabPanel(Os.Mac),
        label: Os.Mac,
      },
      {
        component: renderTabPanel(Os.Linux),
        label: Os.Linux,
      },
    ],
    [renderTabPanel],
  );

  return (
    <>
      <PageTitle title="Download" />
      <div className="Download">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Tabs defaultTab={userOsTabIndex} tabs={tabs} latestReleaseNumber={latestReleaseNumber} />
          </>
        )}
      </div>
    </>
  );
};

export default Download;
