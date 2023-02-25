// import {RouteObject} from 'react-router-dom';

export interface Route {
  path: string;
  isPrivate?: boolean;
  element: JSX.Element;
  isLayout?: boolean;
}

export enum ROUTES {
  LOGIN = 'login',
  HOME = '/',
  HOME_PLATFORM = '/home-platform',
  
}
