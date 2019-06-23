import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message} from 'antd';
import indexService from '../../services/transactionService';

export class CashBackRecord extends Component {

    public searchParam: any = {
        realName: '',
        mobile: '',
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
        const {HEAD, BODY} = await indexService.ORD_005(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {header, rows, total} = BODY;
            const newObj = [];
            rows.forEach((item, index) => {                
                const obj = {
                    orderNo: item.orderNo,
                    createTime: item.createTime,
                    bindSn: item.bindSn,
                    profitType: item.profitType,                    
                    realName: item.realName,
                    mobile: item.mobile,
                    shareAmount: (item.shareAmount)/100,
                    toPrice: (item.toPrice)/100,
                    agentName: item.agentName,            
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
                        <Form.Item label="手机号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入手机号" onChange={this.handleChange('mobile')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="名称" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入名称" onChange={this.handleChange('realName')}/>
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

