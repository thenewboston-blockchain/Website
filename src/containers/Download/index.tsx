import React, {useEffect, useMemo, useState, ReactNode} from 'react';
import max from 'lodash/max';

import {Button, Tabbing, Icon, IconType} from 'components';
import {Release} from 'types/github';
import {fetchGithubReleases} from 'utils/github';

import './Download.scss';

interface InstructionsType {
  Linix: string[];
  Mac: string[];
  Window: string[];
}

interface TabsType {
  fileExt: string;
  tabComponent: ReactNode;
  tabLabel: string;
}

const tabs: TabsType[] = [
  {
    fileExt: 'linux.AppImage',
    tabComponent: 'any',
    tabLabel: 'Linix',
  },
  {
    fileExt: 'mac.dmg',
    tabComponent: 'any',
    tabLabel: 'Mac',
  },
  {
    fileExt: 'win.exe',
    tabComponent: 'any',
    tabLabel: 'Window',
  },
];

const instructions: InstructionsType = {
  Linix: [
    "<div class='insCon'><p>Download thenewboston</p></div>",
    "<div class='insCon'><p>To run thenewboston, make it executable</p><p class='code'>$ sudo chmod a+x TNB-Account-Manager-1.0.0-alpha.20-linux*.AppImage</p></div>",
    "<div class='insCon'><p>Run!</p><p class='code'>$ ./TNB-Account-Manager-1.0.0-alpha.20-linux*.AppImage</p></div>",
  ],
  Mac: [
    "<div class='insCon'><p>Download thenewboston</p></div>",
    "<div class='insCon'><p>Click on the downloaded file</p></div>",
    "<div class='insCon'><p>Drag and drop the app to the Applications folder</p></div>",
    "<div class='insCon'><p>Open the app</p>",
  ],
  Window: [
    "<div class='insCon'><p>Download thenewboston</p></div>",
    "<div class='insCon'><p>Click on the downloaded file</p></div>",
    "<div class='insCon'><p>You will get a modal that says ‘Windows protected your PC’. Click <b>More info</b></p></div>",
    "<div class='insCon'><p>Then click <b>Run anyway</b></p></div>",
  ],
};

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
      <div className="Download">
        <a href={link} className="Download__os-link">
          <Button className="Download__os-download-button">
            Download for {name}
            <Icon icon={IconType.arrowCollapseDown} size={24} />
          </Button>
        </a>
        <div className="Download__instructionCon">
          <h4>Installation Instructions</h4>
          {renderInstructions(instructions[name as keyof InstructionsType])}
        </div>
      </div>
    );
  };

  const renderInstructions = (ins: string[]) => {
    return (
      <ul className="Download__instructions">
        {ins.map((item, index) => (
          /* eslint-disable react/no-danger */
          <li dangerouslySetInnerHTML={{__html: item}} key={index} />
        ))}
        ;
      </ul>
    );
  };

  const generateTabContent = () => {
    tabs.forEach((item, index) => {
      tabs[index].tabComponent = renderOS(
        item.tabLabel,
        `https://github.com/thenewboston-developers/Account-Manager/releases/download/v1.0.0-alpha.${latestReleaseNumber}/TNB-Account-Manager-1.0.0-alpha.${latestReleaseNumber}-${item.fileExt}`,
      );
    });
    return tabs;
  };

  if (error) return <h1>Error</h1>;
  if (loading) return null;
  return <Tabbing tabsData={generateTabContent()} />;
};

export default Download;
