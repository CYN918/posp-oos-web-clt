import BaseService from './baseService';

const defaultDto = (result) => {
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
        const showHeader = ['startSn', 'endSn', 'total', 'name', 'state', 'anentName', 'createTime'];
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
                    o.title = '数量';
                    break;
                case 'name':
                    o.title = '政策类型';
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
                    o.title = '库存单位';
                    break;
                case 'createTime':
                    o.title = '入库时间';
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
    public AGT_007(param?) {
        return this.request('AGT_007', param, defaultDto);
    }

    // 查询厂商列表
    public POS_009(param?) {
        return this.request('POS_009', param, POS009Dto);
    }

    // 新增厂商列表
    public POS_008(param?) {
        return this.request('POS_008', param, defaultDto);
    }

    // 终端入库
    public POS_002(param?) {
        return this.request('POS_001', param, defaultDto);
    }


}


export default new IndexService();