import BaseService from './baseService';

const defaultDto = (result) => {
    return result;
};

const AGT001Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['agentName', 'mobile', 'idCard', 'createTime', 'invitationCode', 'parentName', 'sumAgent', 'sumSn', 'sumActivation', 'sumAmount', 'state'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'agentName':
                    o.title = '名称';
                    break;
                case 'mobile':
                    o.title = '手机号';
                    break;
                case 'idCard':
                    o.title = '身份证号';
                    break;
                case 'createTime':
                    o.title = '加入时间';
                    break;
                case 'invitationCode':
                    o.title = '邀请码';
                    break;
                case 'parentName':
                    o.title = '上级代理';
                    break;
                case 'sumAgent':
                    o.title = '渠道数';
                    break;
                case 'sumSn':
                    o.title = '终端数';
                    break;
                case 'sumActivation':
                    o.title = '激活数';
                    break;
                case 'sumAmount':
                    o.title = '总交易';
                    break;
                case 'state':
                    o.title = '状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '正常';
                            case 10:
                                return '已冻结';
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

class IndexService extends BaseService {

    // 查询代理商列表
    public AGT_001(param?) {
        return this.request('AGT_001', param, AGT001Dto);
    }

    // 查询政策
    public AGT_007(param?) {
        return this.request('AGT_007', param, defaultDto);
    }

    // 修改代理商状态
    public AGT_003(param?) {
        return this.request('AGT_003', param, defaultDto);
    }

    // 重置密码
    public AGT_005(param?) {
        return this.request('AGT_005', {...param, type: 2}, defaultDto);
    }

    // 设置代理商参数
    public AGT_006(param?) {
        return this.request('AGT_006', param, defaultDto);
    }

    // 设置抵扣参数
    public AGT_010(param?) {
        return this.request('AGT_010', param, defaultDto);
    }

    // 根据政策以及代理商id查询是否设置了参数
    public AGT_008(param?) {
        return this.request('AGT_008', param, defaultDto);
    }

    // 新增代理商
    public AGT_009(param?) {
        return this.request('AGT_009', param, defaultDto);
    }

}


export default new IndexService();