import BaseService from './baseService';

const defaultDto = (result) => {
    return result;
};

const POS013Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['startSn', 'endSn', 'total', 'state', 'anentName', 'toAgentName', 'mobile', 'toMobile'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'startSn':
                    o.title = '终端号始';
                    break;
                case 'endSn':
                    o.title = '终端号末';
                    break;
                case 'total':
                    o.title = '机具数量';
                    break;
                case 'state':
                    o.title = '终端状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '下拨中';
                            case 2:
                                return '已下拨';
                            case 10:
                                return '已失效';
                            default:
                                return '';
                        }
                    };
                    break;
                case 'anentName':
                    o.title = '划拨人';
                    break;
                case 'toAgentName':
                    o.title = '接收人';
                    break;
                case 'mobile':
                    o.title = '划拨人手机号';
                    break;
                case 'toMobile':
                    o.title = '接收人手机号';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};



const POS001Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['prefix', 'sn15', 'random', 'secretKey', 'salt', 'factoryName', 'state'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'prefix':
                    o.title = '前缀';
                    break;
                case 'sn15':
                    o.title = '序列号';
                    break;
                case 'random':
                    o.title = '随机位';
                    break;
                case 'secretKey':
                    o.title = '密钥';
                    break;
                case 'salt':
                    o.title = '盐钥';
                    break;
                case 'factoryName':
                    o.title = '厂商名称';
                    break;
                case 'state':
                    o.title = '状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '已设置';
                            case 10:
                                return '未设置';
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

const POS009Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['factoryId', 'factoryNo', 'factoryName', 'posModel', 'posName'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'factoryId':
                    o.title = '厂商id';
                    break;
                case 'factoryNo':
                    o.title = '厂商编号';
                    break;
                case 'factoryName':
                    o.title = '厂商名称';
                    break;
                case 'posModel':
                    o.title = '支持终端型号';
                    break;
                case 'posName':
                    o.title = '终端名称';
                    break;
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const ACTOO1Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;           
        });

        const showHeader = ['policyActivationId', 'depositAmount', 'cashbackAmount', 'state', 'record'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'policyActivationId':
                    o.title = '激活政策ID';
                    break;
                case 'depositAmount':
                    o.title = '押金金额(元)';
                    break;
                case 'cashbackAmount':
                    o.title = '返现金额(元)';
                    break;
                case 'state':
                    o.title = '状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '上架';
                            case 10:
                                return '下架';
                            default:
                                return '';
                        }
                    };
                    break;
                case 'record':
                    o.title = '描述';
                    break;
                
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const ITY001Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['policyActivityId', 'validDay', 'achieveAmount', 'state', 'cashbackAmount', 'record'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'policyActivityId':
                    o.title = '活动返现政策ID';
                    break;
                case 'validDay':
                    o.title = '有效时间';
                    break;
                case 'achieveAmount':
                    o.title = '达标金额(元)';
                    break;
                case 'state':
                    o.title = '状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '上架';
                            case 10:
                                return '下架';
                            default:
                                return '';
                        }
                    };
                    break;
                case 'cashbackAmount':
                    o.title = '返现金额(元)';
                    break;
                case 'record':
                    o.title = '描述';
                    break;
                
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const COU001Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['policyCouponId', 'achieveAmount', 'validDay', 'state', 'record'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'policyCouponId':
                    o.title = '抵扣券ID';
                    break;
                case 'achieveAmount':
                    o.title = '面额(元)';
                    break;
                case 'validDay':
                    o.title = '有效天数(天)';
                    
                    break;
                case 'state':
                    o.title = '状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '上架';
                            case 10:
                                return '下架';
                            default:
                                return '';
                        }
                    };
                    break;
                case 'record':
                    o.title = '描述';
                    break;
                
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const VIP001Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['buyAmount', 'validDay', 'rate', 'state', 'cashbackAmount', 'record'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'buyAmount':
                    o.title = '购买金额(元)';
                    break;
                case 'validDay':
                    o.title = '有效时间(天)';
                    break;
                case 'rate':
                    o.title = '费率(%)';
                    break;
                case 'state':
                    o.title = '状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '上架';
                            case 10:
                                return '下架';
                            default:
                                return '';
                        }
                    };
                    break;
                case 'cashbackAmount':
                    o.title = '返现金额(元)';
                    break;
                case 'record':
                    o.title = '描述';
                    break;
                
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const POS005Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        let rows = BODY.jsonValues;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['startSn', 'endSn', 'total'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'startSn':
                    o.title = '终端号始';
                    break;
                case 'endSn':
                    o.title = '终端号末';
                    break;
                case 'total':
                    o.title = '总数';
                    break;
                
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
}

const PLC001Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['name', 'state', 'record', 'jhRecord', 'hdRecord',  'yhRecord'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'name':
                    o.title = '政策名称';
                    break;
                case 'state':
                    o.title = '状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '正常';
                            case 10:
                                return '下架';
                            default:
                                return '';
                        }
                    };
                    break;
                case 'record':
                    o.title = '描述';
                    break;
                case 'jhRecord':
                    o.title = '激活描述';
                    break;
                case 'hdRecord':
                    o.title = '活动描述';
                    break;
                case 'yhRecord':
                    o.title = '优惠描述';
                    break;
                
            }
            return o;
        });
        result.BODY.header = header;
        result.BODY.rows = rows;
    }
    return result;
};

const POS012Dto = (result) => {
    const {HEAD, BODY} = result;
    const {CODE} = HEAD;
    if (CODE === '000') {
        const {rows} = BODY;
        rows.forEach((item, index) => {
            item.key = index;
        });
        const showHeader = ['policyId', 'id', 'toAgentId', 'code', 'num',  'amount', 'term', 'downType', 'sns'];
        const header = showHeader.map((key) => {
            const o = {title: '', dataIndex: key, key} as any;
            switch (key) {
                case 'policyId':
                    o.title = '政策id';
                    break;
                case 'id':
                    o.title = '代理商id';
                    break;
                case 'toAgentId':
                    o.title = '接受代理商id';
                    break;
                case 'code':
                    o.title = '订单号';
                    break;
                case 'num':
                    o.title = '机具总数量';
                    break;
                case 'amount':
                    o.title = '保理总额';
                    break;
                case 'term':
                    o.title = '期数';
                    break;
                case 'downType':
                    o.title = '划拨状态';
                    o.render = (ele) => {
                        switch (ele) {
                            case 1:
                                return '区间划拨';
                            case 2:
                                return '选择划拨';
                            default:
                                return '';
                        }
                    };
                    break;
                case 'sns':
                    o.title = '区间划拨所返回的终端list';
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

    // 查询终端列表
    public POS_001(param?) {
        return this.request('POS_001', param, POS001Dto);
    }

    

    //终端入库
    public POS_002(param?) {
        return this.request('POS_002', param, defaultDto);
    }

    // 查询政策
    public POS_007(param?) {
        return this.request('POS_007', param, defaultDto);
    }

    // 查询厂商列表
    public POS_009(param?) {
        return this.request('POS_009', param, POS009Dto);
    }

    // 查询厂商id
    public POS_010(param?) {
        return this.request('POS_010', param, defaultDto);
    }

    // 新增厂商列表
    public POS_008(param?) {
        return this.request('POS_008', param, defaultDto);
    }

    // 终端入库
    public POS_002(param?) {
        return this.request('POS_002', param, defaultDto);
    }
    
    // 终端入库
    public POS_013(param?) {
        return this.request('POS_013', param, POS013Dto);
    }
    // 查询激活政策
    public ACT_001(param?) {
        return this.request('ACT_001', param, ACTOO1Dto);
    }

    // 查询返现活动
    public ITY_001(param?) {
        return this.request('ITY_001', param, ITY001Dto);
    }

    // 添加政策
    public ACT_002(param?) {
        return this.request('ACT_002', param, defaultDto);
    }

    // 添加返现活动
    public ITY_002(param?) {
        return this.request('ITY_002', param, defaultDto);
    }

    // 查询优惠券
    public COU_001(param?) {
        return this.request('COU_001', param, COU001Dto);
    }

    // 添加优惠券
    public COU_002(param?) {
        return this.request('COU_002', param, defaultDto);
    }

    // 查询VIP
    public VIP_001(param?) {
        return this.request('VIP_001', param, VIP001Dto);
    }

    // 添加VIP
    public VIP_002(param?) {
        return this.request('VIP_002', param, defaultDto);
    }

    // 查询政策
    public PLC_001(param?) {
        return this.request('PLC_001', param, PLC001Dto);
    }

    // 添加政策
    public PLC_002(param?) {
        return this.request('PLC_002', param, defaultDto);
    }

    //查询保理
    public POS_014(param?) {
        return this.request('POS_014', param, defaultDto);
    }

    //查询政策区间
    public POS_003(param?) {
        return this.request('POS_003', param, defaultDto);
    }

    // 查询政策
    public AGT_007(param?) {
        return this.request('AGT_007', param, defaultDto);
    }

    // 查询代理商
    public POS_004(param?) {
        return this.request('POS_004', param, defaultDto);
    }

    // 查询代理商
    public POS_006(param?) {
        return this.request('POS_006', param, defaultDto);
    }

    // 查询代理商
    public POS_005(param?) {
        return this.request('POS_005', param, POS005Dto);
    }
    
    // 查询代理商
    public POS_012(param?) {
        return this.request('POS_012', param, defaultDto);
    }

    // 确定入库
    public POS_011(param?) {
        return this.request('POS_011', param, defaultDto);
    }
    

}


export default new IndexService();