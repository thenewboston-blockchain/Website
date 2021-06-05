import {NavOption} from 'types/option';
import {Repository} from 'types/github';

export const AMOUNT_COLOR = '09825d';

export const REPOSITORIES: NavOption[] = [
  {pathname: Repository.accountManager, title: 'Account-Manager'},
  {pathname: Repository.design, title: 'Design'},
  {pathname: Repository.kotlinSdk, title: 'Kotlin-SDK'},
  {pathname: Repository.marketing, title: 'Marketing'},
  {pathname: Repository.thenewbostonJs, title: 'TNB-js'},
  {pathname: Repository.website, title: 'Website'},
];

export const REPOSITORY_FILTERS = [{pathname: Repository.all, title: 'All'}, ...REPOSITORIES];
