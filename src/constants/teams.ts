import {NavOption} from 'types/option';
import {TeamName} from 'types/teams';

export const TeamPathname = {
  all: 'All',
  audit: 'Audit',
  backEnd: 'Back-End',
  blockchain: 'Blockchain',
  community: 'Community',
  design: 'Design',
  devOps: 'DevOps',
  education: 'Education',
  frontEnd: 'Front-End',
  marketing: 'Marketing',
};

export const TEAMS: NavOption[] = [
  {pathname: TeamPathname.all, title: TeamName.all},
  {pathname: TeamPathname.audit, title: TeamName.audit},
  {pathname: TeamPathname.backEnd, title: TeamName.backEnd},
  {pathname: TeamPathname.blockchain, title: TeamName.blockchain},
  {pathname: TeamPathname.community, title: TeamName.community},
  {pathname: TeamPathname.design, title: TeamName.design},
  {pathname: TeamPathname.devOps, title: TeamName.devOps},
  {pathname: TeamPathname.education, title: TeamName.education},
  {pathname: TeamPathname.frontEnd, title: TeamName.frontEnd},
  {pathname: TeamPathname.marketing, title: TeamName.marketing},
];
