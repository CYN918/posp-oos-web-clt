import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message, Select, Modal, Spin, Tooltip} from 'antd';
import agencySerivce from '../../services/terminalService';

const Option = Select.Option;

export class VipcashBack extends Component {

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
        buyAmount: '', 
        rate: '', 
        cashbackAmount: '',
        validDay: '',
    };

    public showModal = () => {
        this.setState({
          visible: true,
        });
    };

    public handleOk = async () => {
        var reg = /^\d+$|^\d+[.]?\d+$/;
        if(this.state.buyAmount == ''){
            message.info('请输入购买金额');
            return false
        }
        if(this.state.buyAmount == '0'){
            message.info('购买金额不能为0');
            return false
        }
        
        if(this.state.validDay == ''){
            message.info('输入有效天数');
            return false
        }
        if(this.state.validDay == '0'){
            message.info('有效天数不能为0');
            return false
        }
        

        
        if(this.state.rate == ''){
            message.info('请输入费率');
            return false
        }
        if(this.state.rate > '1'){
            message.info('费率小于1');
            return false
        }
        
        if(this.state.cashbackAmount == ''){
            message.info('请输入返现金额');
            return false
        }
        if(this.state.cashbackAmount == '0'){
            message.info('返现金额不能为0');
            return false
        }
        if(!reg.test(this.state.cashbackAmount)){
            message.info('只能输入数字');
            return false
        }
        var obj = {
            buyAmount: (this.state.buyAmount)*100,
            cashbackAmount: (this.state.cashbackAmount)*100,
            rate: ((this.state.rate)/100).toFixed(5),
        }
        var obj1 = this.state.currentItem;
        var newObj = {};
        Object.assign(newObj,obj,obj1);
        this.setState({modalLoading: true});
        const {HEAD, BODY} = await agencySerivce.VIP_002(newObj);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('添加成功');
            this.setState({
              visible: false,
            });
            this.searchData(); 
            this.state.currentItem = ''; 
            this.state.buyAmount = '';  
            this.state.cashbackAmount = '';   
            this.state.rate = '';
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
        this.setState({tableLoading: true});
        const {HEAD, BODY} = await agencySerivce.VIP_001(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {header, rows, total} = BODY;
            const newObj = [];
            rows.forEach((item, index) => {                
                const obj = {
                    buyAmount: (item.buyAmount)/100,
                    validDay: item.validDay,
                    rate: (item.rate)*100,
                    state: item.state,
                    cashbackAmount: (item.cashbackAmount)/100,
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
                break;
            case 'state':
                console.log(`change value ${key}:${e}`);
                currentItem[key] = e;
                this.setState({currentItem});
                console.log(currentItem[key])
                break;
            case 'buyAmount':
                console.log(`change value ${key}:${e.target.value}`);
                this.setState({buyAmount: e.target.value});
                
                break;
            case 'rate':
                console.log(`change value ${key}:${e.target.value}`);
               
                this.setState({rate: e.target.value});
                
                break;
            case 'cashbackAmount':
                console.log(`change value ${key}:${e.target.value}`);
                this.setState({cashbackAmount: e.target.value});
                break;
            default:
                console.log(`change value ${key}:${e.target.value}`);
                currentItem[key] = e.target.value;
                this.setState({currentItem});
                this.setState({validDay: e.target.value});
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
        const {visible, header, modalLoading, items, tableLoading, pagination, policy, policyLoading, btnLoading, btnDisabled, currentItem = {},buyAmount, rate, cashbackAmount} = this.state;
        const {validDay = '', state = '', record = ''} = currentItem;
        return (
        <Modal
          title="新增vip"
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
          
            <Form.Item label="购买金额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                <Input value={buyAmount} onChange={this.handleChangeParam('buyAmount')}
                       style={{width: 300}}/>元
            </Form.Item>
            <Form.Item label="有效天数" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                <Input value={validDay} onChange={this.handleChangeParam('validDay')}
                       style={{width: 300}}/>天
            </Form.Item>
            <Form.Item label="费率" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                <Input value={rate} onChange={this.handleChangeParam('rate')}
                       style={{width: 300}}/>%
                <Tooltip title="prompt text">
                    <span>范围是0~1(3位小数)</span>
                </Tooltip>
            </Form.Item>
            <Form.Item label="选择状态" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                <Select style={{width: 300}} onChange={this.handleChangeParam('state')}>    
                    <Option value="1">上架</Option>
                    <Option value="10">下架</Option>
                </Select>
            </Form.Item>
            <Form.Item label="返现金额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                <Input value={cashbackAmount} onChange={this.handleChangeParam('cashbackAmount')}
                       style={{width: 300}}/>元
            </Form.Item>

            <Form.Item label="描述" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                <Input value={record} onChange={this.handleChangeParam('record')} style={{width: 300}}/>
            </Form.Item>

            

        
        </Modal>
            
        );
    }
}