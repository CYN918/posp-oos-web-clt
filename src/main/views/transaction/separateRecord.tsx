import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message} from 'antd';
import indexService from '../../services/transactionService';

export class SeparateRecord extends Component {

    public searchParam: any = {
        mobile: '',
        realName: '',
        toRealName: '',
        toMobile: '',
        currentPage: 1,
        pageSize: 10,
    };

    public state: any = {
        header: [],
        items: [],
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
        const {HEAD, BODY} = await indexService.ORD_004(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {header, rows, total} = BODY;
            const newObj = [];
            rows.forEach((item, index) => {                
                const obj = {
                    orderNo: item.orderNo,
                    createTime: item.createTime,
                    sn: item.sn,
                    txnType: item.txnType,                    
                    realName: item.realName,
                    mobile: item.mobile,
                    agentName: item.agentName,
                    agentMobile: item.agentMobile,
                    txnAmount: (item.txnAmount)/100,                    
                    shareAmount: (item.shareAmount)/100,
                    profitState: item.profitState,
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

    public render() {
        const {header, items, tableLoading, pagination} = this.state;
        return (
            <Fragment>
                <Row>
                    <Col span={8}>
                        <Form.Item label="交易用户手机号" labelCol={{span: 8}} wrapperCol={{span: 14}}>
                            <Input placeholder="请输入手机号" onChange={this.handleChange('mobile')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="交易用户姓名" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入姓名" onChange={this.handleChange('realName')}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Form.Item label="分润用户手机号" labelCol={{span: 8}} wrapperCol={{span: 14}}>
                            <Input placeholder="请输入手机号" onChange={this.handleChange('toMobile')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="分润用户姓名" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入姓名" onChange={this.handleChange('toRealName')}/>
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


