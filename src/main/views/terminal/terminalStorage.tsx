import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message, Select, Upload, Icon} from 'antd';
import indexService from '../../services/terminalService';

const Option = Select.Option;

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export class TerminalStorage extends Component {

    public searchParam: any = {
        policyName: '',
        currentPage: 1,
        pageSize: 10,
    };

    public storageParam: any = {
        policyId: '',
        startSn: '',
        endSn: '',
    };

    public state: any = {
        header: [],
        items: [],
        tableLoading: false,
        btnLoading: false,
        policy: [],
        pagination: {
            total: 0,
            current: 0,
            pageSize: this.searchParam.size,
        },
    };

    public componentDidMount() {
        this.searchData();
        this.searchPolicy();
    }

    public getItem = (id) => {
        let o: any = {};
        this.state.items.forEach((item) => {
            if (item.agentId === id) {
                o = item;
            }
        });
        return o;
    }
    
    //查询终端入库
    public searchData = async () => {
        this.setState({tableLoading: true});
        const {HEAD, BODY} = await indexService.POS_001(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {header, rows, total} = BODY;
            const pagination = {...this.state.pagination};
            pagination.total = total;
            this.setState({header, items: rows, tableLoading: false, pagination});
        } else {
            message.error(MSG);
        }
    }
     

    //查询厂商ID
    public searchPolicy = async () => {
        this.setState({policyLoading: true});
        const {HEAD, BODY} = await indexService.AGT_007();
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            this.setState({policy: rows, policyLoading: false});
        } else {
            message.error(MSG);
            this.setState({policyLoading: false});
        }
    }

    //上传文件
    //public sureUpload = async () => {
    //    message.success('上传成功');
    //}

    public handleTableChange = (pagination) => {
        this.searchParam.currentPage = pagination.current;
        this.setState({pagination}, () => {
            this.searchData();
        });
    }

    public handleChange = (key) => (e) => {
        console.log(`change value ${key}:${e.target.value}`);
        this.searchParam[key] = e.target.value;
    }
    
    //终端入库
    public handleStorage = async () => {
        this.setState({btnLoading: true});
        const {HEAD} = await indexService.POS_002(this.storageParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('入库成功');
            this.setState({btnLoading: false});
            this.searchData();
        } else {
            message.error(MSG);
            this.setState({btnLoading: false});
        }
    }

    public handleChangeStorage = (key) => (e) => {
        switch (key) {
            case 'policyId':
                this.storageParam[key] = e;
                break;
            default:
                console.log(`change value ${key}:${e.target.value}`);
                this.storageParam[key] = e.target.value;
                break;
        }
    }

    public render() {
        const {header, items, tableLoading, pagination, policy, policyLoading, btnLoading} = this.state;
        return (
            <Fragment>
                <Row>
                    <Col span={7}>
                        <Form.Item label="厂商ID" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Select onChange={this.handleChange('policyId')} style={{width: '100%'}}
                                    loading={policyLoading}>
                                {policy.map(({policyId, name}, index) => (
                                    <Option key={index} value={policyId}>{name}</Option>))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={14}></Col>
                    <Col span={3}>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', right: 0}}
                                onClick={this.searchPolicy}>查询</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={7}>
                        <Upload {...props}>
                            <Button>
                              <Icon type="upload" /> 点击上传文件
                            </Button>
                        </Upload>
                    </Col>
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 2000}} size="middle"/>
            </Fragment>
        );
    }
}

