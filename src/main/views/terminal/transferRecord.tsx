import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message, Modal, Spin} from 'antd';
import indexService from '../../services/terminalService';

export class TransferRecord extends Component {

    public searchParam: any = {
        mobile: '',
        toMobile: '',
        currentPage: 1,
        pageSize: 10,
    };

    public state: any = {
        header: [],
        items: [],
        policy: [],
        tableLoading: false,
        pagination: {
            total: 0,
            current: 0,
            pageSize: this.searchParam.size,
        },
        curItem: [],
    };

    public componentDidMount() {
        this.searchData();
    }

    public getItem = (id) => {
        let o: any = {};
        this.state.items.forEach((item) => {
            if (item.loanId === id) {
                o = item;
            }
        });
        return o;
    }

    public handleCancelA = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
        this.searchData();
    };

    public searchData = async () => {
        this.setState({tableLoading: true});
        const {HEAD, BODY} = await indexService.POS_013(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            console.log(BODY)
            const {header, rows, total} = BODY;
            const pagination = {...this.state.pagination};
            pagination.total = total;
            header.push({
                title: '操作', dataIndex: 'loanId', key: 'loanId', fixed: 'right', width: 200,
                render: (id) => {
                    const item = this.getItem(id);
                    return (
                        <div className="btn-group">
                            <Button style={{marginLeft: 10}} size="small" onClick={this.setParam(item)}>查看保理</Button>
                        </div>
                    );
                },
            });
            this.setState({header, items: rows, tableLoading: false, pagination});
        } else {
            message.error(MSG);
        }
    }

    public setParam = (item) => () => {        
        const {loanId} = item;
        this.loadPolicy(loanId);
        this.setState({componentModalVisible: true, curItem: {loanId}});
        this.setState({
          visible: true,
        });
    }

    //保理查询
    public loadPolicy = async (loanId) => {
        this.setState({policyLoading: true});         
        const {HEAD, BODY} = await indexService.POS_014({"loanId":loanId});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {

            let rows = BODY.res;
            document.getElementById('orderNo').value = rows.orderNo;
            document.getElementById('price').value = (rows.price)/100;
            document.getElementById('num').value = rows.num;
            document.getElementById('term').value = rows.term;
            document.getElementById('amount').value = (rows.amount)/100;
            document.getElementById('termAmount').value = (rows.termAmount)/100;
            document.getElementById('agentName').value = rows.agentName;
            document.getElementById('toAgentName').value = rows.toAgentName;
            document.getElementById('policyName').value = rows.policyName;

            
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
                            <Input placeholder="请输入名称" onChange={this.handleChange('toMobile')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', right: 0}}
                                onClick={this.searchData}>查询</Button>
                    </Col>
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 2000}} size="middle"/>
                {this.renderaddModal()}
            </Fragment>
        );
    }

    //查看保理
    public renderaddModal() {
        const {visible, modalLoading, policyLoading, curItem = {}, policy} = this.state;
        return (
            <Modal
              visible={visible}
              onCancel={this.handleCancelA}
              width={1000}
              footer={null}
            >
            
                <Form.Item label="订单号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input id="orderNo" readonly="readonly" style={{width: 300}}/>                        
                </Form.Item>

                <Form.Item label="单价" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input id="price" readonly="readonly" style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="总数量" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input id="num" readonly="readonly"
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="总期数" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input id="term" readonly="readonly" style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="保理总额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input id="amount" readonly="readonly"
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="每期金额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input id="termAmount" readonly="readonly"
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="发送人" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input id="agentName" readonly="readonly"
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="接收人" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input id="toAgentName" readonly="readonly"
                           style={{width: 300}}/>
                </Form.Item>
                <Form.Item label="政策名称" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input id="policyName" readonly="readonly"
                           style={{width: 300}}/>
                </Form.Item>

        
            
        </Modal>
        )
    }
}

