import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message, Select, Modal, Spin, Divider, Tag, Tooltip} from 'antd';
import indexService from '../../services/terminalService';

const Option = Select.Option;
const confirm = Modal.confirm;


export class TerminalTransfer extends Component {

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
        disabled: false,
        modalLoading: false,
        policy: [],
        currentItem: {},
        visible: false,
    };

    public addModal = () => {
        this.setState({
          visible: true,
        });
    };

    public handleOkA = e => {
        console.log(e);
        this.setState({modalLoading: true});
        setTimeout(() => {
            this.setState({modalLoading: false, visible: false});
        }, 3000);
        alert('添加成功')
    };

    public handleCancelA = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    public handleOkA = () => {
        this.setState({modalLoading: true});
        setTimeout(() => {
            this.setState({modalLoading: false, visible: false});
        }, 3000);
    }

    public handleOk() {
        confirm({
            title: '提示',
            content: '您确定向代理商名称划拨货款吗？',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
              alert('你点击了确认')
            },
            onCancel() {
              alert('你点击了取消')
            },
          });
    }


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
    
    //政策列表查询
    public loadPolicy = async (policyId) => {
        this.setState({policyLoading: true});
        const {agentId = ''} = this.state.currentItem;
        const {HEAD, BODY} = await indexService.AGT_008({agentId, policyId});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            if (rows) {
                this.setState({currentItem: rows, policyLoading: false, btnDisabled: true});
            } else {
                const currentItem = {agentId, policyId};
                this.setState({currentItem, policyLoading: false, btnDisabled: false});
            }
        } else {
            message.error(MSG);
        }
    }

    //代理商列表查询


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

    public handleStorage = async () => {
        this.setState({btnLoading: true});
        const {HEAD} = await indexService.AGT_007(this.storageParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            this.setState({btnLoading: false});
            this.searchData();
        } else {
            message.error(MSG);
            this.setState({btnLoading: false});
        }
    }

    public handleChangeParam = (key) => (e) => {
        const currentItem = Object.assign({}, this.state.currentItem);
        switch (key) {
            case 'policyId':
                console.log(`change value ${key}:${e}`);
                if (currentItem[key] !== e) {
                    this.loadPolicy(e);
                }
                currentItem[key] = e;
                break;
            default:
                console.log(`change value ${key}:${e.target.value}`);
                currentItem[key] = e.target.value;
                this.setState({currentItem});
                break;
        }
    }


    public render() {
        const {header, modalLoading, items, tableLoading, pagination, policy, policyLoading, btnLoading, btnDisabled, currentItem = {}} = this.state;
        const {serialStar = '', serialEnd = ''} = currentItem;
        return (
            <Fragment>
                <Row>
                    <Col span={7} style={{width: '100%'}}>
                        <Form.Item label="政策类型" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Select onChange={this.handleChange('policyId')} style={{width: '49%'}}
                                    loading={policyLoading}>
                                {policy.map(({policyId, name}, index) => (
                                    <Option key={index} value={policyId}>{name}</Option>))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={7} style={{width: '100%'}}>
                        <Form.Item label="代理商选择" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Select onChange={this.handleChange('policyId')} style={{width: '49%'}}
                                    loading={policyLoading}>
                                {policy.map(({policyId, name}, index) => (
                                    <Option key={index} value={policyId}>{name}</Option>))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={7} style={{width: '100%'}}>
                        <Form.Item label="序列号始" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入序列号始" value={serialStar} onChange={this.handleChangeParam('serialStar')} style={{width: '49%'}}/>
                        </Form.Item>
                    </Col>
                    <Col span={7} style={{width: '100%'}}>
                        <Form.Item label="序列号末" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入序列号末" value={serialEnd} onChange={this.handleChangeParam('serialEnd')} style={{width: '49%'}}/>
                        </Form.Item>
                    </Col>
                    <Col span={14}></Col>
                    <Col span={3}>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', right: 0, top: -62}}
                                onClick={this.searchData}>查询</Button>
                        
                    </Col>
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 2000}} size="middle"/>
                <Col span={3}>
                    <Button type="primary" style={{position: 'absolute', left: 0, top: 0}}
                                onClick={this.addModal}>确认划拨</Button>                        
                </Col>
                
                {this.renderaddModal()}
                
            </Fragment>
        );
    }

    public renderaddModal() {
        const {visible, modalLoading, policy, policyLoading, currentItem = {}, disabled} = this.state;
        const {license = '', registration = '', personName = '', idCard = '', accountName = '', account = '', loginAccount = '', initialPassword = '', branch = '', openBank = '', affiliation = ''} = currentItem;
        return (
            <Modal
              title="设置还款计划"
              visible={visible}
              onOk={this.handleOkA}
              onCancel={this.handleCancelA}
              width={1000}
              footer={[
                <Button key="back" onClick={this.handleCancelA}>取消订单</Button>,
                <Button key="submit" type="primary" loading={modalLoading}
                        onClick={this.handleOk}>发送订单</Button>,
              ]}
            >
              <Spin tip="加载中..." spinning={policyLoading}>
                <Form.Item label="订单号" labelCol={{span: 6}} wrapperCol={{span: 16}}>    
                    <Tooltip title="prompt text">
                        <span>JF1926025162544536</span>
                    </Tooltip>              
                </Form.Item>

                <Form.Item label="接收代理商" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Tooltip title="prompt text">
                        <span>高玉良</span>
                    </Tooltip>
                </Form.Item>

                <Form.Item label="政策类型" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Tooltip title="prompt text">
                        <span>押138，返220</span>
                    </Tooltip>
                </Form.Item>

                <Form.Item label="机具数量" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={idCard} disabled={disabled} onChange={this.handleChangeParam('idCard')} style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="机具单价" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Tooltip title="prompt text">
                        <span>¥100.00</span>
                    </Tooltip>
                </Form.Item>

                <Form.Item label="贷款总额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Tooltip title="prompt text">
                        <span>3000，000.00</span>
                    </Tooltip>
                </Form.Item>

                <Form.Item label="保理总额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={account} onChange={this.handleChangeParam('account')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="期数" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Select
                        showSearch
                        style={{ width: 300 }}
                        placeholder="选择期数"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="12">12</Option>
                        <Option value="24">24</Option>
                        <Option value="36">36</Option>
                      </Select>
                </Form.Item>
                <Form.Item label="每期金额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={initialPassword} disabled={disabled} onChange={this.handleChangeParam('initialPassword')}
                           style={{width: 300}}/>
                </Form.Item>



            </Spin>
        </Modal>
        )
    }
}
