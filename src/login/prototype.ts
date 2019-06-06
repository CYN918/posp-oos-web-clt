import {ReactChild, ReactElement, ReactFragment} from 'react';

export type ReactNode = ReactChild | ReactFragment | ReactElement | JSX.Element | string | number | boolean | null;

export interface IRouteProps {
    path: string;
    exact: boolean;
    component: (props) => ReactNode;
}

export interface IModuleProps {
    path: string;
    exact: boolean;
    module: ReactNode;
}

export interface IAppProps {
    routes: IRouteProps[];
}