import React, {useEffect, useMemo, useState, ReactNode} from 'react';
import max from 'lodash/max';

import {Button, Icon, IconType, Tabs} from 'components';
import {Release} from 'types/github';
import {fetchGithubReleases} from 'utils/github';

import './Download.scss';

interface InstructionsType {
  Linux: string[];
  Mac: string[];
  Window: string[];
}

interface TabsType {
  component: ReactNode;
  fileExt: string;
  label: string;
}

const tabs: TabsType[] = [
  {
    component: 'any',
    fileExt: 'linux.AppImage',
    label: 'Linux',
  },
  {
    component: 'any',
    fileExt: 'mac.dmg',
    label: 'Mac',
  },
  {
    component: 'any',
    fileExt: 'win.exe',
    label: 'Window',
  },
];

const instructions: InstructionsType = {
  Linux: [
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
          <ul className="Download__instructions">{renderInstructions(instructions[name as keyof InstructionsType])}</ul>
        </div>
      </div>
    );
  };

  const renderInstructions = (ins: string[]) => {
    return ins.map((item, index) => (
      /* eslint-disable react/no-danger */
      <li dangerouslySetInnerHTML={{__html: item}} key={index} />
    ));
  };

  const generateTabContent = () => {
    tabs.forEach((item, index) => {
      tabs[index].component = renderOS(
        item.label,
        `https://github.com/thenewboston-developers/Account-Manager/releases/download/v1.0.0-alpha.${latestReleaseNumber}/TNB-Account-Manager-1.0.0-alpha.${latestReleaseNumber}-${item.fileExt}`,
      );
    });
    return tabs;
  };

  if (error) return <h1>Error</h1>;
  if (loading) return null;
  return <Tabs tabs={generateTabContent()} />;
};

export default Download;
