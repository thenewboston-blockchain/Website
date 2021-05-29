import React, {FC, ReactNode, useRef, useState} from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import throttle from 'lodash/throttle';

import {useEventListener, useWindowDimensions} from 'hooks';
import {Project, ProjectTopicTitle} from 'types/projects';

import {orderedProjectDetailsTopic, projectDetailsTopic} from './constants';
import ProjectDetailsHeader from './ProjectDetailsHeader';
import ProjectDetailsSideMenu from './ProjectDetailsSideMenu';
import ProjectDetailsTopic from './ProjectDetailsTopic';
import './ProjectDetails.scss';

type Props = {
  project: Project;
};

const TOP_NAV_HEIGHT = 60;
const DETAILS_CONTAINER_HEIGHT = 158;
const DETAILS_CONTAINER_HEIGHT_480 = 241;
const WIGGLE_ROOM = 32;

const ProjectDetails: FC<Props> = ({project}) => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const targetMarketRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const centeredAroundTnbRef = useRef<HTMLDivElement>(null);
  const estimatedCompletionDateRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  const problemOffset = problemRef.current?.offsetTop || -1;
  const targetMarketOffset = targetMarketRef.current?.offsetTop || -1;
  const benefitsOffset = benefitsRef.current?.offsetTop || -1;
  const centeredAroundTnbOffset = centeredAroundTnbRef.current?.offsetTop || -1;
  const estimatedCompletionDateOffset = estimatedCompletionDateRef.current?.offsetTop || -1;
  const roadmapOffset = roadmapRef.current?.offsetTop || -1;

  const [currentTopicPosition, setCurrentTopicPosition] = useState<number>(0);
  const [disableScrollEvent, setDisableScrollEvent] = useState<boolean>(false);
  const {title, logo, github_url: github, project_lead_display_name: projectLeadDisplayName} = project;

  const {width} = useWindowDimensions();
  const detailsHeaderHeight = width >= 480 ? DETAILS_CONTAINER_HEIGHT : DETAILS_CONTAINER_HEIGHT_480;
  const currentTopic = orderedProjectDetailsTopic[currentTopicPosition];

  useEventListener(
    'scroll',
    throttle(() => {
      if (disableScrollEvent) {
        return;
      }

      const scrollHeight = window.scrollY + TOP_NAV_HEIGHT + detailsHeaderHeight + WIGGLE_ROOM;

      if (scrollHeight > roadmapOffset) {
        setCurrentTopicPosition(6);
        return;
      }
      if (scrollHeight > estimatedCompletionDateOffset) {
        setCurrentTopicPosition(5);
        return;
      }
      if (scrollHeight > centeredAroundTnbOffset) {
        setCurrentTopicPosition(4);
        return;
      }
      if (scrollHeight > benefitsOffset) {
        setCurrentTopicPosition(3);
        return;
      }
      if (scrollHeight > targetMarketOffset) {
        setCurrentTopicPosition(2);
        return;
      }
      if (scrollHeight > problemOffset) {
        setCurrentTopicPosition(1);
        return;
      }
      setCurrentTopicPosition(0);
    }, 300),
    window,
    true,
  );

  const handleSideMenuClick = (position: number) => {
    const positionTopic = orderedProjectDetailsTopic[position];

    const element = document.getElementById(positionTopic.anchor)!;

    setDisableScrollEvent(true);
    // scroll to top if it is the first topic, else scroll directly to the topic
    const top =
      currentTopic.title === ProjectTopicTitle.Overview
        ? 0
        : element.offsetTop - TOP_NAV_HEIGHT - detailsHeaderHeight - WIGGLE_ROOM;

    window.scrollTo({behavior: 'smooth', top});
    setTimeout(() => {
      setDisableScrollEvent(false);
    }, 300);
  };

  const renderMainContent = (): ReactNode => {
    return (
      <div className="ProjectDetails__main-content">
        <ProjectDetailsTopic
          id={projectDetailsTopic.overview.anchor}
          content={project.overview}
          iconType={projectDetailsTopic.overview.iconType}
          overview={projectDetailsTopic.overview.overview}
          ref={overviewRef}
          title={projectDetailsTopic.overview.title}
        />
        <ProjectDetailsTopic
          id={projectDetailsTopic.problem.anchor}
          content={project.problem}
          iconType={projectDetailsTopic.problem.iconType}
          overview={projectDetailsTopic.problem.overview}
          ref={problemRef}
          title={projectDetailsTopic.problem.title}
        />
        <ProjectDetailsTopic
          id={projectDetailsTopic.target_market.anchor}
          content={project.target_market}
          iconType={projectDetailsTopic.target_market.iconType}
          overview={projectDetailsTopic.target_market.overview}
          ref={targetMarketRef}
          title={projectDetailsTopic.target_market.title}
        />
        <ProjectDetailsTopic
          id={projectDetailsTopic.benefits.anchor}
          content={project.benefits}
          iconType={projectDetailsTopic.benefits.iconType}
          overview={projectDetailsTopic.benefits.overview}
          ref={benefitsRef}
          title={projectDetailsTopic.benefits.title}
        />
        <ProjectDetailsTopic
          id={projectDetailsTopic.centered_around_tnb.anchor}
          content={project.centered_around_tnb}
          iconType={projectDetailsTopic.centered_around_tnb.iconType}
          overview={projectDetailsTopic.centered_around_tnb.overview}
          ref={centeredAroundTnbRef}
          title={projectDetailsTopic.centered_around_tnb.title}
        />
        <ProjectDetailsTopic
          id={projectDetailsTopic.estimated_completion_date.anchor}
          content={format(parseISO(project.estimated_completion_date), 'dd LLLL u - eeee ')}
          iconType={projectDetailsTopic.estimated_completion_date.iconType}
          overview={projectDetailsTopic.estimated_completion_date.overview}
          ref={estimatedCompletionDateRef}
          title={projectDetailsTopic.estimated_completion_date.title}
        />
        <ProjectDetailsTopic
          id={projectDetailsTopic.roadmap.anchor}
          content={renderMilestones()}
          iconType={projectDetailsTopic.roadmap.iconType}
          overview={projectDetailsTopic.roadmap.overview}
          ref={roadmapRef}
          title={projectDetailsTopic.roadmap.title}
        />
      </div>
    );
  };

  const renderMilestones = (): ReactNode => {
    return project.milestones.map((milestone) => {
      return (
        <div className="ProjectDetails__milestone" key={milestone.number}>
          <h3 className="ProjectDetails__milestone-number">Milestone {milestone.number}</h3>
          <div className="ProjectDetails__milestone-description">{milestone.description}</div>
        </div>
      );
    });
  };

  return (
    <div className="ProjectDetails">
      <ProjectDetailsHeader
        github={github}
        logoUrl={logo}
        title={title}
        projectLeadDisplayName={projectLeadDisplayName}
      />
      <div className="ProjectDetails__main-container">
        <ProjectDetailsSideMenu currentTopicPosition={currentTopicPosition} onClick={handleSideMenuClick} />
        {renderMainContent()}
      </div>
    </div>
  );
};

export default ProjectDetails;
