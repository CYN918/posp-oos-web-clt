import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message, Select, Modal, Spin} from 'antd';
import agencySerivce from '../../services/terminalService';

const Option = Select.Option;

export class PolicyManagement extends Component {

    public searchParam: any = {
        currentPage: 1,
        pageSize: 10,
    };

    public storageParam: any = {
        policyCouponId: '',
        policyActivityId: '',
        policyActivationId: '',
    };

    public state: any = {
        header: [],
        items: [],
        tableLoading: false,
        btnLoading: false,
        modalLoading: false,
        visible: false,
        policy: [],
        policy1: [],
        policy2: [],
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

    public handleOk = async () => {
        const data = this.state.currentItem;
        if(JSON.stringify(data) == '{}'){
            message.info('提交不能为空');
            return false
        }
        this.setState({modalLoading: true});
        const {HEAD, BODY} = await agencySerivce.PLC_002({...this.state.currentItem});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('添加成功');
            this.setState({
              visible: false,
            });
            this.searchData();
            this.state.currentItem = ''; 
            this.setState({modalLoading: false});          
        } else {
            message.error(MSG);
            this.setState({modalLoading: false});
        }
    };

    public handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
        this.storageParam = '';
    };

    public componentDidMount() {
        this.searchData();
        this.loadPolicy1();
        this.loadPolicy2();
        this.loadPolicy3();
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
        const {HEAD, BODY} = await agencySerivce.PLC_001(this.searchParam);
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

    
    

    //激活返现列表查询
    public loadPolicy1 = async (activationPrice) => {
        this.setState({policyLoading: true});
        const {policyActivationId = ''} = this.state.currentItem;
        const {HEAD, BODY} = await agencySerivce.ACT_001(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            this.setState({policy: rows});
        } else {
            message.error(MSG);
        }
    }

    //优惠券列表查询
    public loadPolicy2 = async (vipPrice) => {
        this.setState({policyLoading: true});
        const {policyCouponId = ''} = this.state.currentItem;
        const {HEAD, BODY} = await agencySerivce.COU_001(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            this.setState({policy1: rows});
        } else {
            message.error(MSG);
        }
    }

    //活动返现列表查询
    public loadPolicy3 = async (activityPrice) => {
        this.setState({policyLoading: true});
        const {policyActivityId = ''} = this.state.currentItem;
        const {HEAD, BODY} = await agencySerivce.ITY_001(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            this.setState({policy2: rows});
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
            case 'policyActivationId':
                console.log(`change value ${key}:${e}`);
                currentItem[key] = e;
                this.setState({currentItem});
                break;
            case 'policyCouponId':
                console.log(`change value ${key}:${e}`);
                currentItem[key] = e;
                this.setState({currentItem});
                break;
            case 'policyActivityId':
                console.log(`change value ${key}:${e}`);
                currentItem[key] = e;
                this.setState({currentItem});
                break;
            case 'state':
                console.log(`change value ${key}:${e}`);
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
        const {header, modalLoading, items, tableLoading, pagination, policy} = this.state;
        return (
            <Fragment>
                <Row>
                    <Col span={3}>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', left: 0}}
                                onClick={this.searchData}>查询</Button>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', left: 80}}
                                onClick={this.showModal}>添加</Button>
                    </Col>
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 2000}} size="middle" style={{position: 'relative', top: 40}}/>
                {this.renderaddModal()}
            </Fragment>
        );
    }

    public renderaddModal() {
        const {visible, header, modalLoading, items, tableLoading, pagination, policy, policy1, policy2,  policyLoading, btnLoading, btnDisabled, currentItem = {}} = this.state;
        const {name = '', record = '', state = ''} = currentItem;
        return (
            <Modal
                title="添加政策"
                visible={visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                destroyOnClose={true}
                width={1000}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>取消</Button>,
                    <Button key="submit" type="primary" loading={modalLoading}
                            onClick={this.handleOk}>确定添加</Button>,
                ]}
                >
                    <Form.Item label="政策名称" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input value={name} onChange={this.handleChangeParam('name')} style={{width: 300}}/>                        
                    </Form.Item>



                    <Form.Item label="激活返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Select onChange={this.handleChangeParam('policyActivationId')}
                                style={{width: 300}}>
                            {policy.map(({policyActivationId, record}, index) => (
                                <Option key={index} value={policyActivationId}>{record}</Option>))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="优惠券" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Select onChange={this.handleChangeParam('policyCouponId')}
                                style={{width: 300}}>
                            {policy1.map(({policyCouponId, record}, index) => (
                                <Option key={index} value={policyCouponId}>{record}</Option>))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="活动返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Select onChange={this.handleChangeParam('policyActivityId')}
                                style={{width: 300}}>
                            {policy2.map(({policyActivityId, record}, index) => (
                                <Option key={index} value={policyActivityId}>{record}</Option>))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="选择状态" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Select style={{width: 300}} onChange={this.handleChangeParam('state')}>    
                            <Option value="1">上架</Option>
                            <Option value="10">下架</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="描述" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input value={record} onChange={this.handleChangeParam('record')} style={{width: 300}}/>                        
                    </Form.Item>

                
            </Modal>
        )
    }
}