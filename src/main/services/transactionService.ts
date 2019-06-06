import BaseService from './baseService';

const defaultDto = (result) => {
    return result;
};

const ORD002Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['orderOn', 'createTime', 'realName', 'payeeMobile', 'txnAmount', 'buyAmount', 'agentName', 'txnState'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderOn':
                    o.title = '订单号';
                    break;
                case 'createTime':
                    o.title = '交易时间';
                    break;
                case 'realName':
                    o.title = '交易用户';
                    break;
                case 'payeeMobile':
                    o.title = '交易手机号';
                    break;
                case 'txnAmount':
                    o.title = 'VIP金额';
                    break;
                case 'buyAmount':
                    o.title = 'VIP类型';
                    break;
                case 'agentName':
                    o.title = '所属代理商';
                    break;
                case 'txnState':
                    o.title = '交易状态';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const ORD003Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['orderOn', 'createTime', 'realName', 'payeeMobile', 'bindSn', 'txnAmount', 'txnType', 'agentName', 'txnState'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderOn':
                    o.title = '订单号';
                    break;
                case 'createTime':
                    o.title = '交易时间';
                    break;
                case 'realName':
                    o.title = '交易用户';
                    break;
                case 'payeeMobile':
                    o.title = '交易手机号';
                    break;
                case 'bindSn':
                    o.title = '序列号';
                    break;
                case 'txnAmount':
                    o.title = '交易金额';
                    break;
                case 'txnType':
                    o.title = '交易类型';
                    break;
                case 'agentName':
                    o.title = '所属代理商';
                    break;
                case 'txnState':
                    o.title = '交易状态	';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};


const ORD001Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['orderOn', 'createTime', 'realName', 'payeeMobile', 'txnAmount', 'agentName', 'txnState'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderOn':
                    o.title = '订单号';
                    break;
                case 'createTime':
                    o.title = '交易时间';
                    break;
                case 'realName':
                    o.title = '交易用户';
                    break;
                case 'payeeMobile':
                    o.title = '交易手机号';
                    break;
                case 'txnAmount':
                    o.title = '还款金额';
                    break;
                case 'agentName':
                    o.title = '所属代理商';
                    break;
                case 'txnState':
                    o.title = '交易状态';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};


const ORD005Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['orderOn', 'createTime', 'bindSn', 'profitType', 'realName', 'mobile', 'shareAmount', 'toPrice', 'agentName'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderOn':
                    o.title = '订单号';
                    break;
                case 'createTime':
                    o.title = '返现时间';
                    break;
                case 'bindSn':
                    o.title = '序列号';
                    break;
                case 'profitType':
                    o.title = '返现类型';
                    break;
                case 'realName':
                    o.title = '用户姓名';
                    break;
                case 'mobile':
                    o.title = '手机号';
                    break;
                case 'shareAmount':
                    o.title = '返现金额';
                    break;
                case 'toPrice':
                    o.title = '抵扣金额';
                    break;
                case 'agentName':
                    o.title = '所属代理商';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};


const ORD006Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['withdrawId', 'orderOn', 'createTime', 'agentName', 'mobile', 'amount', 'fee', 'actualAmount', 'payBankNo', 'payTime', 'state'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'withdrawId':
                    o.title = '出款id';
                    break;
                case 'orderOn':
                    o.title = '订单号';
                    break;
                case 'createTime':
                    o.title = '申请时间';
                    break;
                case 'agentName':
                    o.title = '用户姓名';
                    break;
                case 'mobile':
                    o.title = '手机号';
                    break;
                case 'amount':
                    o.title = '提现金额';
                    break;
                case 'fee':
                    o.title = '手续费';
                    break;
                case 'actualAmount':
                    o.title = '实际到账金额';
                    break;
                case 'payBankNo':
                    o.title = '到账银行卡';
                    break;
                case 'payTime':
                    o.title = '付款时间';
                    break;
                case 'state':
                    o.title = '状态';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};


const ORD004Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['orderOn', 'createTime', 'sn', 'txnType', 'realName', 'mobile', 'agentName', 'agentMobile', 'txnAmount', 'shareAmount', 'profitState'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderOn':
                    o.title = '订单号';
                    break;
                case 'createTime':
                    o.title = '交易时间';
                    break;
                case 'sn':
                    o.title = '序列号';
                    break;
                case 'txnType':
                    o.title = '交易类型';
                    break;
                case 'realName':
                    o.title = '交易用户姓名';
                    break;
                case 'mobile':
                    o.title = '交易用户手机号';
                    break;
                case 'agentName':
                    o.title = '分润用户';
                    break;
                case 'agentMobile':
                    o.title = '分润用户手机号';
                    break;
                case 'txnAmount':
                    o.title = '交易金额';
                    break;
                case 'shareAmount':
                    o.title = '分润金额';
                    break;
                case 'profitState':
                    o.title = '分润状态';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};


class IndexService extends BaseService {

    // 查询刷卡交易记录
    public ORD_003(param?) {
        return this.request('ORD_003', param, ORD003Dto);
    }

    // 查询vip购买记录
    public ORD_002(param?) {
        return this.request('ORD_002', param, ORD002Dto);
    }

    // 查询还款订单
    public ORD_001(param?) {
        return this.request('ORD_001', param, ORD001Dto);
    }

    // 查询分润记录
    public ORD_004(param?) {
        return this.request('ORD_004', param, ORD004Dto);
    }

    // 查询返现记录
    public ORD_005(param?) {
        return this.request('ORD_005', param, ORD005Dto);
    }

    // 查询提现记录
    public ORD_006(param?) {
        return this.request('ORD_006', param, ORD006Dto);
    }

    // 出款
    public ORD_007(param?) {
        return this.request('ORD_007', param, defaultDto);
    }

}


export default new IndexService();