import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message, Select, Modal, Spin} from 'antd';
import indexService from '../../services/agencySerivce';
import agencySerivce from '../../services/terminalService';

const Option = Select.Option;

export class PolicyManagement extends Component {

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
        modalLoading: false,
        visible: false,
        policy: [],
        pagination: {
            total: 0,
            current: 0,
            pageSize: this.searchParam.size,
        },
        currentItem: {},
        btnDisabled: true,
    };

    public showModal = () => {
        this.setState({
          visible: true,
        });
    };

    public handleOk = e => {
        console.log(e);
        this.setState({modalLoading: true});
        setTimeout(() => {
            this.setState({modalLoading: false, visible: false});
        }, 3000);
        alert('添加成功')
    };

    public handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
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

    public searchData = async () => {
        this.setState({tableLoading: true});
        const {HEAD, BODY} = await agencySerivce.POS_001(this.searchParam);
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
                this.setState({policyLoading: false});
            } else {
                const currentItem = {agentId, policyId};
                this.setState({currentItem, policyLoading: false});
            }
        } else {
            message.error(MSG);
        }
    }

    //激活返现列表查询
    public loadPolicy = async (activationPrice) => {
        this.setState({policyLoading: true});
        const {agentId = ''} = this.state.currentItem;
        const {HEAD, BODY} = await indexService.AGT_008({agentId, activationPrice});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            if (rows) {
                this.setState({policyLoading: false});
            } else {
                const currentItem = {agentId, activationPrice};
                this.setState({currentItem, policyLoading: false});
            }
        } else {
            message.error(MSG);
        }
    }

    //优惠券列表查询
    public loadPolicy = async (vipPrice) => {
        this.setState({policyLoading: true});
        const {agentId = ''} = this.state.currentItem;
        const {HEAD, BODY} = await indexService.AGT_008({agentId, vipPrice});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            if (rows) {
                this.setState({policyLoading: false});
            } else {
                const currentItem = {agentId, vipPrice};
                this.setState({currentItem, policyLoading: false});
            }
        } else {
            message.error(MSG);
        }
    }

    //活动返现列表查询
    public loadPolicy = async (activityPrice) => {
        this.setState({policyLoading: true});
        const {agentId = ''} = this.state.currentItem;
        const {HEAD, BODY} = await indexService.AGT_008({agentId, activityPrice});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            if (rows) {
                this.setState({policyLoading: false});
            } else {
                const currentItem = {agentId, activityPrice};
                this.setState({currentItem, policyLoading: false});
            }
        } else {
            message.error(MSG);
        }
    }



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

    public handleChangeParam = (key) => (e) => {
        const currentItem = Object.assign({}, this.state.currentItem);
        switch (key) {
            case 'policyId':
                console.log(`change value ${key}:${e}`);
                if (currentItem[key] !== e) {
                    this.loadPolicy(e);
                }
                currentItem[key] = e;
                this.setState({currentItem});
                break;
            case 'activationPrice':
                console.log(`change value ${key}:${e}`);
                if (currentItem[key] !== e) {
                    this.loadPolicy(e);
                }
                currentItem[key] = e;
                this.setState({currentItem});
                break;
            case 'vipPrice':
                console.log(`change value ${key}:${e}`);
                if (currentItem[key] !== e) {
                    this.loadPolicy(e);
                }
                currentItem[key] = e;
                this.setState({currentItem});
                break;
            case 'activityPrice':
                console.log(`change value ${key}:${e}`);
                if (currentItem[key] !== e) {
                    this.loadPolicy(e);
                }
                currentItem[key] = e;
                this.setState({currentItem});
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
        const {} = currentItem;
        return (
            <Fragment>
                <Row>
                    <Col span={7}>
                        <Form.Item label="政策类型" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Select onChange={this.handleChange('policyId')} style={{width: '100%'}}
                                    loading={policyLoading}>
                                {policy.map(({policyId, name}, index) => (
                                    <Option key={index} value={policyId}>{name}</Option>))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={14}></Col>
                    <Col span={3}>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', right: 80}}
                                onClick={this.searchData}>查询</Button>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', right: 0}}
                                onClick={this.showModal}>添加</Button>
                    </Col>
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 2000}} size="middle"/>
                <Modal
                  //title="Basic Modal"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  width={1000}
                  footer={[
                    <Button key="back" onClick={this.handleCancel}>取消</Button>,
                    <Button key="submit" type="primary" loading={modalLoading}
                            onClick={this.handleOk}>确定添加</Button>,
                  ]}
                >
                  <Spin tip="加载中..." spinning={policyLoading}>
                    <Form.Item label="政策" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Select onChange={this.handleChangeParam('policyId')}
                                style={{width: 300}}>
                            {policy.map(({policyId, name}, index) => (
                                <Option key={index} value={policyId}>{name}</Option>))}
                        </Select>
                    </Form.Item>


                    <Form.Item label="激活返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Select onChange={this.handleChangeParam('activationPrice')}
                                style={{width: 300}}>
                            {policy.map(({policyId, name}, index) => (
                                <Option key={index} value={policyId}>{name}</Option>))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="优惠券" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Select onChange={this.handleChangeParam('vipPrice')}
                                style={{width: 300}}>
                            {policy.map(({policyId, name}, index) => (
                                <Option key={index} value={policyId}>{name}</Option>))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="活动返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Select onChange={this.handleChangeParam('activityPrice')}
                                style={{width: 300}}>
                            {policy.map(({policyId, name}, index) => (
                                <Option key={index} value={policyId}>{name}</Option>))}
                        </Select>
                    </Form.Item>

                </Spin>
                </Modal>
            </Fragment>
        );
    }
}