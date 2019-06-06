import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message} from 'antd';
import indexService from '../../services/factoringService';

export class FactoringManagement extends Component {

    public searchParam: any = {
        agentName: '',
        mobile: '',
        toMobile: '',
        toAgentName: '',
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
        const {HEAD, BODY} = await indexService.FNC_001(this.searchParam);
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
                        <Form.Item label="划拨人手机号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入手机号" onChange={this.handleChange('mobile')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="划拨人名称" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入用户名称" onChange={this.handleChange('agentName')}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Form.Item label="受理人手机号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入手机号" onChange={this.handleChange('toMobile')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="受理人姓名" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入用户名称" onChange={this.handleChange('toAgentName')}/>
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

