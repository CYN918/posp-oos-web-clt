import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message, Select, Modal, Spin} from 'antd';
import agencySerivce from '../../services/terminalService';

const Option = Select.Option;

export class CouPon extends Component {

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
        achieveAmount: '',
        validDay: '',
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
        this.setState({tableLoading: true});
        const {HEAD, BODY} = await agencySerivce.COU_001(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {header, rows, total} = BODY;
            const newObj = [];
            rows.forEach((item, index) => {                
                const obj = {
                    policyCouponId: item.policyCouponId,
                    achieveAmount: (item.achieveAmount)/100,
                    validDay: item.validDay,
                    state: item.state,
                    record: item.record,
                }
                console.log(obj)
                newObj.push(obj)
            })
            const pagination = {...this.state.pagination};
            pagination.total = total;
            this.setState({header, items: newObj, tableLoading: false, pagination});
        } else {
            message.error(MSG);
        }
    }


    public handleOk = async () => {
        var reg = /^\d+$|^\d+[.]?\d+$/;
        if(this.state.achieveAmount == ''){
            message.info('请输入金额');
            return false
        }
        if(!reg.test(this.state.achieveAmount)){
            message.info('只能输入数字');
            return false
        }
        if(this.state.validDay == ''){
            message.info('请输入天数');
            return false
        }
        if(this.state.validDay == '0'){
            message.info('天数不能为0');
            return false
        }
        if(!reg.test(this.state.validDay)){
            message.info('只能输入数字');
            return false
        }
        var obj = {
            achieveAmount: (this.state.achieveAmount)*100,
        }
        var obj1 = this.state.currentItem;
        var newObj = {};
        Object.assign(newObj,obj,obj1);
        this.setState({modalLoading: true});
        const {HEAD, BODY} = await agencySerivce.COU_002(newObj);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('添加成功');
            this.setState({
              visible: false,
            });
            this.searchData(); 
            this.state.currentItem = '';  
            this.state.achieveAmount = '';
            this.setState({modalLoading: false});       
        } else {
            message.error(MSG);
            this.setState({modalLoading: false});
        }
    };

    

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
            case 'state':
                console.log(`change value ${key}:${e}`);
                currentItem[key] = e;
                this.setState({currentItem});
                console.log(currentItem[key])
                break;
            case 'achieveAmount':
                console.log(`change value ${key}:${e.target.value}`);
                this.setState({achieveAmount: e.target.value});
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
        const {header, modalLoading, items, tableLoading, pagination, policy, policyLoading, btnLoading, btnDisabled, currentItem = {}} = this.state;
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
    };

    public renderaddModal() {
        const {visible, header, modalLoading, items, tableLoading, pagination, policy, policyLoading, btnLoading, currentItem = {}, achieveAmount} = this.state;
        const {policyCouponId = '', record = '', validDay = '', state = ''} = currentItem;
        return (
        <Modal
              title="新增优惠券"
              visible={visible}
              onOk={this.handleOk}
              destroyOnClose={true}
              onCancel={this.handleCancel}
              width={1000}
              footer={[
                <Button key="back" onClick={this.handleCancel}>取消</Button>,
                <Button key="submit" type="primary" loading={modalLoading}
                        onClick={this.handleOk}>确定添加</Button>,
              ]}
            >
              
                
                <Form.Item label="面额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={achieveAmount} onChange={this.handleChangeParam('achieveAmount')}
                           style={{width: 300}}/>元
                </Form.Item>
                <Form.Item label="有效天数" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={validDay} onChange={this.handleChangeParam('validDay')}
                           style={{width: 300}}/>天
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
            
        );
    }
}