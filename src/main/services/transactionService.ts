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
        const showHeader = ['orderNo', 'createTime', 'realName', 'payeeMobile', 'txnAmount', 'buyAmount', 'agentName', 'txnState'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderNo':
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
                    o.title = 'VIP金额(元)';
                    break;
                case 'buyAmount':
                    o.title = 'VIP类型';
                    o.render = (ele) => {
                        switch (ele) {
                            case 9000:
                                return '90天';
                            case 15000:
                                return '180天';
                            default:
                                return '';
                        }
                    };
                    break;
                case 'agentName':
                    o.title = '所属代理商';
                    break;
                case 'txnState':
                    o.title = '交易状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '下单成功';
                            case 2:
                                return '交易中';
                            case 3:
                                return '交易成功';
                            case 4:
                                return '冲正成功';
                            case 10:
                                return '交易失败';
                            case 11:
                                return '冲正失败';
                            default:
                                return '';
                        }
                    };
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
        const showHeader = ['orderNo', 'createTime', 'realName', 'payeeMobile', 'bindSn', 'txnAmount', 'txnType', 'agentName', 'txnState'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderNo':
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
                    o.title = '交易金额(元)';
                    break;
                case 'txnType':
                    o.title = '交易类型';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '刷卡';
                            case 2:
                                return 'NFC';
                            case 3:
                                return 'QRCODE';
                            default:
                                return '';
                        }
                    };
                    break;
                case 'agentName':
                    o.title = '所属代理商';
                    break;
                case 'txnState':
                    o.title = '交易状态	';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '下单成功';
                            case 2:
                                return '交易中';
                            case 3:
                                return '交易成功';
                            case 4:
                                return '冲正成功';
                            case 10:
                                return '交易失败';
                            case 11:
                                return '冲正失败';
                            default:
                                return '';
                        }
                    };
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
        const showHeader = ['orderNo', 'createTime', 'realName', 'payeeMobile', 'txnAmount', 'agentName', 'txnState'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderNo':
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
                    o.title = '还款金额(元)';
                    break;
                case 'agentName':
                    o.title = '所属代理商';
                    break;
                case 'txnState':
                    o.title = '交易状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '下单成功';
                            case 2:
                                return '交易中';
                            case 3:
                                return '交易成功';
                            case 4:
                                return '冲正成功';
                            case 10:
                                return '交易失败';
                            case 11:
                                return '冲正失败';
                            default:
                                return '';
                        }
                    };
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
        const showHeader = ['orderNo', 'createTime', 'bindSn', 'profitType', 'realName', 'mobile', 'shareAmount', 'toPrice', 'agentName'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderNo':
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
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '激活返现';
                            case 2:
                                return 'VIP返现';
                            case 3:
                                return '活动返现';
                            default:
                                return '';
                        }
                    };
                    break;
                case 'realName':
                    o.title = '用户姓名';
                    break;
                case 'mobile':
                    o.title = '手机号';
                    break;
                case 'shareAmount':
                    o.title = '返现金额(元)';
                    break;
                case 'toPrice':
                    o.title = '抵扣金额(元)';
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
        const showHeader = ['withdrawId', 'orderNo', 'createTime', 'agentName', 'mobile', 'amount', 'fee', 'actualAmount', 'payBankNo', 'payTime', 'state'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'withdrawId':
                    o.title = '出款id';
                    break;
                case 'orderNo':
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
                    o.title = '提现金额(元)';
                    break;
                case 'fee':
                    o.title = '手续费(元)';
                    break;
                case 'actualAmount':
                    o.title = '实际到账金额(元)';
                    break;
                case 'payBankNo':
                    o.title = '到账银行卡';
                    break;
                case 'payTime':
                    o.title = '付款时间';
                    break;
                case 'state':
                    o.title = '状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '处理中';
                            case 2:
                                return '清算中';
                            case 3:
                                return '成功';
                            case 10:
                                return '失败';
                            default:
                                return '';
                        }
                    };
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
        const showHeader = ['orderNo', 'createTime', 'sn', 'txnType', 'realName', 'mobile', 'agentName', 'agentMobile', 'txnAmount', 'shareAmount', 'profitState'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'orderNo':
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
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '刷卡';
                            case 2:
                                return 'NFC';
                            case 3:
                                return 'QRCODE';
                            default:
                                return '';
                        }
                    };
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
                    o.title = '交易金额(元)';
                    break;
                case 'shareAmount':
                    o.title = '分润金额(元)';
                    break;
                case 'profitState':
                    o.title = '分润状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '未分润';
                            case 10:
                                return '已分润';
                            default:
                                return '';
                        }
                    };
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const SYS006Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['versionId', 'versionNum', 'url', 'isForced', 'record', 'createTime', 'intVersionNum', 'versionType'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'versionId':
                    o.title = 'ID';
                    break;
                case 'versionNum':
                    o.title = '版本号';
                    break;
                case 'url':
                    o.title = '更新地址';
                    break;
                case 'isForced':
                    o.title = '是否强制更新';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '强制更新';
                            case 10:
                                return '不强制更新';
                            default:
                                return '';
                        }
                    };
                    break;
                case 'record':
                    o.title = '描述';
                    break;
                case 'createTime':
                    o.title = '添加时间';
                    break;
                case 'intVersionNum':
                    o.title = '内部版本号';
                    break;
                case 'versionType':
                    o.title = '类型';
                    o.render = (ele) => {
                        if(ele == '1'){
                            return 'ios';
                        }else if(ele == '2'){
                            return '安卓';
                        }
                    };
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

    //查询APP版本
    public SYS_006(param?) {
        return this.request('SYS_006', param, SYS006Dto);
    }

    //增加APP版本
    public SYS_005(param?) {
        return this.request('SYS_005', param, defaultDto);
    }

}


export default new IndexService();