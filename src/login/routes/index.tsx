import {IModuleProps, IRouteProps} from '../prototype';
import {Page} from '../views/page';

const pages: IModuleProps[] = [
    // { path: '/module', exact: false, module: asyncComponent(() => import(/* webpackChunkName: "venus/chunks/page" */'../views/page')) },
    {path: '/page', exact: false, module: Page},
];

export const routes = () => {
    const pageRoutes: IRouteProps[] = [];

    pages.forEach((item: any) => {
        const {path, exact, module: Module} = item;
        pageRoutes.push(
            {
                path, exact,
                component: (props) => {
                    return (
                        <Module {...props} />
                    );
                },
            },
        );
    });
    return pageRoutes;
};
