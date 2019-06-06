import BaseService from './baseService';

const defaultDto = (result) => {
    return result;
};

const FNC001Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['code', 'createTime', 'acceptTime', 'agentName', 'mobile', 'toAgentName', 'toMobile', 'num', 'price', 'amount', 'term', 'termAmount', 'state'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'code':
                    o.title = '保理编号';
                    break;
                case 'createTime':
                    o.title = '划拨时间';
                    break;
                case 'acceptTime':
                    o.title = '订单生效时间';
                    break;
                case 'agentName':
                    o.title = '划拨人姓名';
                    break;
                case 'mobile':
                    o.title = '划拨人手机号';
                    break;
                case 'toAgentName':
                    o.title = '受理人姓名';
                    break;
                case 'toMobile':
                    o.title = '受理人手机号';
                    break;
                case 'num':
                    o.title = '机具数量';
                    break;
                case 'price':
                    o.title = '单价';
                    break;
                case 'amount':
                    o.title = '保理总额';
                    break;
                case 'term':
                    o.title = '期数';
                    break;
                case 'termAmount':
                    o.title = '每期金额';
                    break;
                case 'state':
                    o.title = '订单状态';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const FNC002Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['orderNo', 'code', 'term', 'lastDay', 'dealAmount', 'remainAmount', 'frdkAmount', 'fxdkAmount', 'vipAmount', 'hddkAmount', 'amount', 'hkTime', 'dealType', 'state'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderNo':
                    o.title = '订单号';
                    break;
                case 'code':
                    o.title = '保理编号';
                    break;
                case 'term':
                    o.title = '本期期数';
                    break;
                case 'lastDay':
                    o.title = '约定还款时间';
                    break;
                case 'dealAmount':
                    o.title = '当期已还金额';
                    break;
                case 'remainAmount':
                    o.title = '当期剩余应还';
                    break;
                case 'frdkAmount':
                    o.title = '分润抵扣金额';
                    break;
                case 'fxdkAmount':
                    o.title = '返现抵扣金额';
                    break;
                case 'vipAmount':
                    o.title = 'VIP返现抵扣金额';
                    break;
                case 'hddkAmount':
                    o.title = '活动返现抵扣金额';
                    break;
                case 'amount':
                    o.title = '抵扣后应还款金额';
                    break;
                case 'hkTime':
                    o.title = '还款时间';
                    break;
                case 'dealType':
                    o.title = '还款方式';
                    break;
                case 'state':
                    o.title = '本期还款状态';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const FNC003Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['orderNo', 'code', 'createTime', 'deductType', 'bindSn', 'agentName', 'mobile', 'txnRate', 'activatioRate', 'vipRate', 'activityRate', 'amount', 'toagentName'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderNo':
                    o.title = '订单号';
                    break;
                case 'code':
                    o.title = '保理编号';
                    break;
                case 'createTime':
                    o.title = '交易时间';
                    break;
                case 'deductType':
                    o.title = '交易类型';
                    break;
                case 'bindSn':
                    o.title = '序列号';
                    break;
                case 'agentName':
                    o.title = '交易用户';
                    break;
                case 'mobile':
                    o.title = '交易用户手机号';
                    break;
                case 'txnRate':
                    o.title = '交易分润抵扣比例';
                    break;
                case 'activatioRate':
                    o.title = '激活返现抵扣比例';
                    break;
                case 'vipRate':
                    o.title = 'VIP返现抵扣比例';
                    break;
                case 'activityRate':
                    o.title = '活动返现抵扣比例';
                    break;
                case 'amount':
                    o.title = '抵扣金额';
                    break;
                case 'toagentName':
                    o.title = '抵扣给';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const FNC004Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['orderNo', 'createTime', 'realName', 'mobile', 'txnAmount', 'txnFee', 'txnSelAmt', 'agentName', 'code', 'term', 'txnState'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderNo':
                    o.title = '订单号';
                    break;
                case 'createTime':
                    o.title = '充值时间';
                    break;
                case 'realName':
                    o.title = '充值用户';
                    break;
                case 'mobile':
                    o.title = '手机号';
                    break;
                case 'txnAmount':
                    o.title = '充值金额';
                    break;
                case 'txnFee':
                    o.title = '手续费';
                    break;
                case 'txnSelAmt':
                    o.title = '到账金额';
                    break;
                case 'agentName':
                    o.title = '所属代理商';
                    break;
                case 'code':
                    o.title = '所属保理编号';
                    break;
                case 'term':
                    o.title = '充值期数';
                    break;
                case 'txnState':
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

class IndexService extends BaseService {

    // 查询保理记录
    public FNC_001(param?) {
        return this.request('FNC_001', param, FNC001Dto);
    }

    // 修改商户状态
    public FNC_002(param?) {
        return this.request('FNC_002', param, FNC002Dto);
    }

    // 查询抵扣记录
    public FNC_003(param?) {
        return this.request('FNC_003', param, FNC003Dto);
    }

    // 查询银行卡列表
    public FNC_004(param?) {
        return this.request('FNC_004', param, FNC004Dto);
    }

}


export default new IndexService();