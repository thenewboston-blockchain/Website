import {ReactNode} from 'react';

export interface PageData {
  content: ReactNode;
  name: string;
}

export interface PageDataObject {
  [key: string]: PageData;
}
