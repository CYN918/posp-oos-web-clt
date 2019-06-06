import {observable, action, autorun, computed} from 'mobx';
import {getHash, setHash} from '../../_utils/uri';

export const menuList = [
    {
        key: 'terminal',
        name: '终端管理',
        icon: 'alert',
        children: [
            {key: 'terminalStorage', name: '终端入库'},
            {key: 'terminalTransfer', name: '终端划拨'},
            {key: 'transferRecord', name: '划拨记录'},
            {key: 'transferVendor', name: '厂商管理'},
        ],
    },
    {
        key: 'policy',
        name: '政策管理',
        icon: 'alert',
        children: [
            {key: 'policyManagement', name: '政策管理－添加'},
            {key: 'activateCashback', name: '激活返现'},
            {key: 'activityCashBack', name: '活动返现'},
            {key: 'vipcashBack', name: 'VIP返现'},
            {key: 'couPon', name: '优惠券'},
        ],
    },
    {
        key: 'agency',
        name: '代理商管理',
        icon: 'alert',
        children: [
            {key: 'agentManagement', name: '代理商管理'},
        ],
    },
    {
        key: 'transaction',
        name: '交易管理',
        icon: 'alert',
        children: [
            {key: 'creditCardTransaction', name: '刷卡交易'},
            {key: 'VIPTransactionRecord', name: 'VIP交易记录'},
            {key: 'repaymentOrder', name: '还款交易订单'},
            {key: 'separateRecord', name: '分润记录'},
            {key: 'cashBackRecord', name: '返现记录'},
            {key: 'withdrawalsRecord', name: '提现记录'},
        ],
    },
    {
        key: 'merchant',
        name: '商户管理',
        icon: 'alert',
        children: [
            {key: 'merchantManagement', name: '商户管理'},
            {key: 'bankCardManagement', name: '银行卡管理'},
        ],
    },
    {
        key: 'factoring',
        name: '保理管理',
        icon: 'alert',
        children: [
            {key: 'factoringManagement', name: '保理管理'},
            {key: 'repaymentRecord', name: '还款记录'},
            {key: 'deductibleRecord', name: '抵扣记录'},
            {key: 'rechargeRecord', name: '充值记录'},
        ],
    },
    {
        key: 'statistical',
        name: '统计管理',
        icon: 'alert',
        children: [
            {key: 'agentManagement', name: '代理商管理'},
            {key: 'terminalManagement', name: '终端管理'},
            {key: 'incomeStatistics', name: '收益统计'},
        ]
    },
];

class MenuInfo {

    @observable
    public activeMenu = getHash();

    @observable
    public menuNameArray: string[] = [];

    @computed get getActiveMenuNameArray() {
        const nameArray: string[] = [];
        const menuArray = menuInfo.activeMenu.split('/');
        menuList.forEach(({key, name, children}) => {
            if (key === menuArray[0]) {
                nameArray.push(name);
                children.forEach((element) => {
                    if (element.key === menuArray[1]) {
                        nameArray.push(element.name);
                    }
                });
            }
        });
        return nameArray;
    }

    @computed get getActiveMenu() {
        return this.activeMenu;
    }

    @action
    public setActiveMenu(activeMenu) {
        this.activeMenu = activeMenu;
    }

    @action
    public setMenuNameArray(nameArray) {
        this.menuNameArray = nameArray;
    }
}

const menuInfo = new MenuInfo();

const routerHandle = () => {
    setHash(menuInfo.activeMenu);
    const nameArray: string[] = [];
    const menuArray = menuInfo.activeMenu.split('/');
    menuList.forEach(({key, name, children}) => {
        if (key === menuArray[0]) {
            nameArray.push(name);
            children.forEach((element) => {
                if (element.key === menuArray[1]) {
                    nameArray.push(element.name);
                }
            });
        }
    });
    menuInfo.setMenuNameArray(nameArray);
};

autorun(routerHandle);

export default menuInfo;