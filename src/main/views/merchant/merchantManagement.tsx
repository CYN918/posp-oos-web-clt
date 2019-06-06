import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message} from 'antd';
import indexService from '../../services/merchantService';

export class MerchantManagement extends Component {

    public searchParam: any = {
        mobile: '',
        realName: '',
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

    public resetPwd = (item) => async () => {
        this.setState({tableLoading: true});
        const {mobile} = item;
        const {HEAD} = await indexService.CST_006({mobile});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('密码重置成功');
            this.searchData();
        } else {
            message.error(MSG);
        }
    }

    public searchData = async () => {
        this.setState({tableLoading: true});
        const {HEAD, BODY} = await indexService.CST_001(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {header, rows, total} = BODY;
            const pagination = {...this.state.pagination};
            pagination.total = total;
            header.push({
                title: '操作', dataIndex: 'agentId', key: 'agentId', fixed: 'right', width: 250,
                render: (id) => {
                    const item = this.getItem(id);
                    console.log(item);
                    return (
                        <div className="btn-group">
                            <Button style={{marginLeft: 10}} size="small" onClick={this.resetPwd(item)}>重置密码</Button>
                        </div>
                    );
                },
            });
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

