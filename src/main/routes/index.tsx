import {IModuleProps, IRouteProps} from '../prototype';
import {asyncComponent} from '../utils/async';

const pages: IModuleProps[] = [
    {
        path: '/agency',
        exact: false,
        module: asyncComponent(() => import(/* webpackChunkName: "posp/chunks/agency" */'./agency'))
    },// 代理商管理
    {
        path: '/terminal',
        exact: false,
        module: asyncComponent(() => import(/* webpackChunkName: "posp/chunks/terminal" */'./terminal'))
    },// 终端管理
    {
        path: '/policy',
        exact: false,
        module: asyncComponent(() => import(/* webpackChunkName: "posp/chunks/policy" */'./policy'))
    },// 政策管理
    {
        path: '/transaction',
        exact: false,
        module: asyncComponent(() => import(/* webpackChunkName: "posp/chunks/transaction" */'./transaction'))
    },// 交易管理
    {
        path: '/merchant',
        exact: false,
        module: asyncComponent(() => import(/* webpackChunkName: "posp/chunks/merchant" */'./merchant'))
    },// 商户管理
    {
        path: '/factoring',
        exact: false,
        module: asyncComponent(() => import(/* webpackChunkName: "posp/chunks/factoring" */'./factoring'))
    },// 保理管理
    {
        path: '/statistical',
        exact: false,
        module: asyncComponent(() => import(/* webpackChunkName: "posp/chunks/statistical" */'./statistical'))
    },// 统计管理

];

export const routes = () => {
    const pageRoutes: IRouteProps[] = [];

    pages.forEach((item: any) => {
        const {path, exact, module: Module} = item;
        pageRoutes.push(
            {
                path, exact,
                component: (props) => {
                    return (<Module {...props} />);
                },
            },
        );
    });
    return pageRoutes;
};
