import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message} from 'antd';
import indexService from '../../services/transactionService';

export class WithdrawalsRecord extends Component {

    public searchParam: any = {
        mobile: '',
        agentName: '',
        currentPage: 1,
        pageSize: 10,
    };

    public state: any = {
        header: [],
        items: [],
        btnDisabled: false,
        tableLoading: false,
        pagination: {
            total: 0,
            current: 0,
            pageSize: this.searchParam.size,
        },
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
        const {HEAD, BODY} = await indexService.ORD_006(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {header, rows, total} = BODY;
            const newObj = [];
            rows.forEach((item, index) => {                
                const obj = {
                    withdrawId: item.withdrawId,
                    orderNo: item.orderNo,
                    createTime: item.createTime,
                    agentName: item.agentName,
                    mobile: item.mobile,                    
                    amount: (item.amount)/100,
                    fee: (item.fee)/100,
                    actualAmount: (item.actualAmount)/100,
                    payBankNo: item.payBankNo,
                    payTime: item.payTime,                    
                    state: item.state,
                }
                newObj.push(obj)
            })
            const pagination = {...this.state.pagination};
            pagination.total = total;
            header.push({
                title: '操作', dataIndex: 'withdrawId', key: 'withdrawId', fixed: 'right', width: 100,
                render: (id) => {                    
                    const item = this.getItem(id);                   
                    return (
                        <div className="btn-group">
                            <Button style={{marginLeft: 10}} size="small" onClick={this.setParam(item)}>出款</Button>
                        </div>
                    );
                },
            });
            this.setState({header, items: newObj, tableLoading: false, pagination});
        } else {
            message.error(MSG);
        }
    }

    public getItem = (id) => {
        let o: any = {};
        this.state.items.forEach((item) => {
            if (item.withdrawId === id) {
                o = item;
            }
        });
        return o;
    }

    public setParam = (item) => () => {        
        const {withdrawId} = item;
        this.loadPolicy(withdrawId);
    }

    //出款
    public loadPolicy = async (withdrawId) => {
        this.setState({policyLoading: true});         
        const {HEAD, BODY} = await indexService.ORD_007({"withdrawId":withdrawId});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success(MSG);
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

    public render() {
        const {header, items, tableLoading, pagination} = this.state;
        return (
            <Fragment>
                <Row>
                    <Col span={8}>
                        <Form.Item label="手机号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入手机号" onChange={this.handleChange('mobile')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="名称" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入名称" onChange={this.handleChange('agentName')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', right: 0}}
                                onClick={this.searchData}>查询</Button>
                    </Col>
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 2000}} size="middle"/>
            </Fragment>
        );
    }
}
