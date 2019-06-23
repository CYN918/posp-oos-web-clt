import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message, Select, Modal, Spin} from 'antd';
import agencySerivce from '../../services/terminalService';

const Option = Select.Option;

export class ActivateCashback extends Component {

    public searchParam: any = {
        policyName: '',
        currentPage: 1,
        pageSize: 10,
    };
    

    public state: any = {
        header: [],
        items: [],
        modalLoading: false,
        visible: false,
        policy: [],
        pagination: {
            total: 0,
            current: 0,
            pageSize: this.searchParam.size,
        },
        currentItem: {},
        depositAmount: '', 
        cashbackAmount: '',
        trade: '',
        freeDay: '',
        cashbackDay: '',
    };

    public showModal = () => {
        this.setState({
          visible: true,
        });
    };

    public handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    public componentDidMount() {
        this.searchData();
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
        const {HEAD, BODY} = await agencySerivce.ACT_001(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {header, rows, total} = BODY;
            const newObj = [];
            rows.forEach((item, index) => {                
                const obj = {
                    cashbackAmount: (item.cashbackAmount)/100,
                    depositAmount: (item.depositAmount)/100,
                    policyActivationId: item.policyActivationId,
                    state: item.state,
                    record: item.record,
                }
                newObj.push(obj)
            })            
            const pagination = {...this.state.pagination};
            pagination.total = total;
            this.setState({header, items: newObj, tableLoading: false, pagination});
        } else {
            message.error(MSG);
        }
    }
    
    //添加政策
    public sureAdd = async () => {
        var reg = /^\d+$|^\d+[.]?\d+$/;
        if(this.state.depositAmount == ''){
            message.info('请输入激活金额');
            return false
        }
        if(!reg.test(this.state.depositAmount)){
            message.info('只能输入数字');
            return false
        }
        if(this.state.cashbackAmount == ''){
            message.info('请输入返现金额');
            return false
        }
        if(!reg.test(this.state.cashbackAmount)){
            message.info('只能输入数字');
            return false
        }
        if(this.state.freeDay == ''){
            message.info('输入免手续费天数');
            return false
        }
        if(this.state.cashbackDay == ''){
            message.info('输入返现期限天数');
            return false
        }
        if(this.state.trade == ''){
            message.info('请输入激活返现条件金额');
            return false
        }
        if(!reg.test(this.state.trade)){
            message.info('只能输入数字');
            return false
        }
        
        var obj = {
            depositAmount: (this.state.depositAmount)*100,
            cashbackAmount: (this.state.cashbackAmount)*100,
            trade: (this.state.trade)*100,
        }
        var obj1 = this.state.currentItem;
        var newObj = {};
        Object.assign(newObj,obj,obj1);
        this.setState({modalLoading: true});
        const {HEAD, BODY} = await agencySerivce.ACT_002(newObj);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('添加成功');
            this.setState({
              visible: false,
            });
            this.state.currentItem = '';
            this.state.depositAmount = '';
            this.state.cashbackAmount = '';
            this.state.trade = '';
            this.searchData(); 
            this.setState({modalLoading: false});          
        } else {
            message.error(MSG);
            this.setState({modalLoading: false});
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
                currentItem[key] = e;
                this.setState({currentItem});
                break;
            case 'state':
                console.log(`change value ${key}:${e}`);
                currentItem[key] = e;
                this.setState({currentItem});
                break;
            case 'depositAmount':
                console.log(`change value ${key}:${e.target.value}`);
                this.setState({depositAmount: e.target.value});
                break;
            case 'cashbackAmount':
                console.log(`change value ${key}:${e.target.value}`);
                this.setState({cashbackAmount: e.target.value});
                break;
            case 'trade':
                console.log(`change value ${key}:${e.target.value}`);
                this.setState({trade: e.target.value});
                break;
            default:
                console.log(`change value ${key}:${e.target.value}`);
                currentItem[key] = e.target.value;
                this.setState({currentItem});
                this.setState({freeDay: e.target.value});
                this.setState({cashbackDay: e.target.value});
                
                break;
        }
    }

   

    public render() {
        const {header, items, pagination, policy} = this.state;
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
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} 
                       dataSource={items} scroll={{x: 1000}} size="middle" style={{position: 'relative', top: 40}}/>
                       {this.renderaddModal()}
                
            </Fragment>
        );
    }

    public renderaddModal() {
        const {visible, header, items, pagination, policy, currentItem = {}, modalLoading, depositAmount, cashbackAmount, trade} = this.state;
        const {record = '', freeDay = '', cashbackDay = '', state = ''} = currentItem;
        return (
        <Modal
          title="新增政策"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
          width={1000}
          footer={[
            <Button key="back" onClick={this.handleCancel}>取消</Button>,
            <Button key="submit" type="primary" loading={modalLoading}
                    onClick={this.sureAdd}>确定添加</Button>,
          ]}
        >
            <Form.Item label="激活金额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                <Input value={depositAmount} onChange={this.handleChangeParam('depositAmount')}
                       style={{width: 300}}/>元
            </Form.Item>

            <Form.Item label="返现金额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                <Input value={cashbackAmount} onChange={this.handleChangeParam('cashbackAmount')}
                       style={{width: 300}}/>元
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

            <Form.Item label="免手续费天数" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                <Input value={freeDay} onChange={this.handleChangeParam('freeDay')} style={{width: 300}}/>
            </Form.Item>

            <Form.Item label="返现期限天数" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                <Input value={cashbackDay} onChange={this.handleChangeParam('cashbackDay')} style={{width: 300}}/>
            </Form.Item>

            <Form.Item label="激活返现条件金额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                <Input value={trade} onChange={this.handleChangeParam('trade')} style={{width: 300}}/>元
            </Form.Item>

    
        </Modal>
        )
    }
}