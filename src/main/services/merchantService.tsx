import BaseService from './baseService';

const defaultDto = (result) => {
    return result;
};

const CST001Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['realName', 'mobile', 'bindsn', 'idCard', 'policyName', 'actnState', 'createTime', 'vipState', 'agentName', 'txnRate'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'realName':
                    o.title = '姓名';
                    break;
                case 'mobile':
                    o.title = '手机号';
                    break;
                case 'bindsn':
                    o.title = '绑定设备号';
                    break;
                case 'idCard':
                    o.title = '身份证号';
                    break;
                case 'policyName':
                    o.title = '终端政策';
                    break;
                case 'actnState':
                    o.title = '激活状态';
                    break;
                case 'createTime':
                    o.title = '加入时间';
                    break;
                case 'vipState':
                    o.title = '是否VIP';
                    break;
                case 'agentName':
                    o.title = '归属代理商';
                    break;
                case 'txnRate':
                    o.title = '交易费率';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const CST003Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
            item.id = item.mobile;
        });
        const showHeader = ['realName', 'mobile', 'idCard', 'account', 'bankName', 'bankbranchName', 'agentName', 'createTime', 'state'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'realName':
                    o.title = '名称';
                    break;
                case 'mobile':
                    o.title = '电话';
                    break;
                case 'idCard':
                    o.title = '身份证号';
                    break;
                case 'account':
                    o.title = '银行卡号';
                    break;
                case 'bankName':
                    o.title = '银行名称';
                    break;
                case 'bankbranchName':
                    o.title = '支行名称';
                    break;
                case 'agentName':
                    o.title = '上级代理';
                    break;
                case 'createTime':
                    o.title = '提交时间';
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


class IndexService extends BaseService {

    // 查询商户列表
    public CST_001(param?) {
        return this.request('CST_001', param, CST001Dto);
    }

    // 修改商户状态
    public CST_005(param?) {
        return this.request('CST_005', param, defaultDto);
    }

    // 重置商户密码
    public CST_006(param?) {
        return this.request('CST_006', {...param, type: 1}, defaultDto);
    }

    // 查询银行卡列表
    public CST_003(param?) {
        return this.request('CST_003', param, CST003Dto);
    }

}


export default new IndexService();