import {APIModel} from 'types/api';

export interface User extends APIModel {
  account_number: string;
  created_date: string;
  display_name: string;
  github_username: string;
  is_email_verified: boolean;
  modified_date: string;
  profile_image: string;
  slack_username: string;
}

export interface ActiveUser extends User {
  access_token: string;
  refresh_token: string;
}
