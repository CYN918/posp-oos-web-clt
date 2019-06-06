import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, Modal, message, Select, Spin} from 'antd';
import indexService from '../../services/agencySerivce';

const Option = Select.Option;


export class AgentManagement extends Component {

    public searchParam: any = {
        mobile: '',
        agentName: '',
        currentPage: 1,
        pageSize: 10,
    };

    public state: any = {
        visible: false,
        policy: [],
        header: [],
        items: [],
        modalLoading: false,
        tableLoading: false,
        policyLoading: false,
        pagination: {
            total: 0,
            current: 0,
            pageSize: this.searchParam.size,
        },
        currentItem: {},
        btnDisabled: true,
    };

    public componentDidMount() {
        this.searchData();
        this.searchPolicy();
    }

    public searchPolicy = async () => {
        const {HEAD, BODY} = await indexService.AGT_007();
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            this.setState({policy: rows});
        } else {
            message.error(MSG);
        }
    }

    public loadPolicy = async (policyId) => {
        this.setState({policyLoading: true});
        const {agentId = ''} = this.state.currentItem;
        const {HEAD, BODY} = await indexService.AGT_008({agentId, policyId});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            if (rows) {
                this.setState({currentItem: rows, policyLoading: false, btnDisabled: true});
            } else {
                const currentItem = {agentId, policyId};
                this.setState({currentItem, policyLoading: false, btnDisabled: false});
            }
        } else {
            message.error(MSG);
        }
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
        const {HEAD, BODY} = await indexService.AGT_001(this.searchParam);
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

    public freeze = (item) => async () => {
        this.setState({tableLoading: true});
        const {state, mobile} = item;
        const {HEAD} = await indexService.AGT_003({mobile, state: state === 1 ? 10 : 1});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            this.searchData();
        } else {
            message.error(MSG);
        }
    }

    public setParam = (item) => () => {
        const {agentId} = item;
        console.log(agentId);
        this.setState({visible: true, currentItem: {agentId}});
    }

    public resetPwd = (item) => async () => {
        this.setState({tableLoading: true});
        const {mobile} = item;
        const {HEAD} = await indexService.AGT_005({mobile});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            this.searchData();
        } else {
            message.error(MSG);
        }
    }

    public handleChange = (key) => (e) => {
        console.log(`change value ${key}:${e.target.value}`);
        this.searchParam[key] = e.target.value;
    }

    public handleTableChange = (pagination) => {
        this.searchParam.currentPage = pagination.current;
        this.setState({pagination}, () => {
            this.searchData();
        });
    }

    public handleOk = () => {
        this.setState({modalLoading: true});
        setTimeout(() => {
            this.setState({modalLoading: false, visible: false});
        }, 3000);
    }

    public handleCancel = () => {
        this.setState({visible: false});
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
            default:
                console.log(`change value ${key}:${e.target.value}`);
                currentItem[key] = e.target.value;
                this.setState({currentItem});
                break;
        }
    }

    public render() {
        const {header, items, tableLoading, pagination} = this.state;
        return (
            <Fragment>
                <Row>
                    <Col span={8}>
                        <Form.Item label="代理商名称" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入用户名称" onChange={this.handleChange('mobile')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="代理商手机号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入" onChange={this.handleChange('agentName')}/>
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

