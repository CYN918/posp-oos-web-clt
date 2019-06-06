import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, Modal, message, Select, Spin, InputNumber} from 'antd';
import indexService from '../../services/agencySerivce';

const Option = Select.Option;


export class AgentManagement extends Component {

    public searchParam: any = {              
        "mobile": "",
        "agentName": "",
        "currentPage": "1",
        "pageSize": "10"              
    };

    public state: any = {
        policy: [],
        header: [],
        items: [],
        modalLoading: false,
        tableLoading: false,
        policyLoading: false,
        visible: false,
        componentModalVisible: false,
        discountModalVisible: false,
        pagination: {
            total: 0,
            current: 0,
            pageSize: this.searchParam.size,
        },
        currentItem: {},
        curItem: {},
        componentItem: {},
        discountItem: {},
        btnDisabled: true,
    };

    public addModal = () => {
        this.setState({
          visible: true,
        });
    };

    public handleOk = e => {
        console.log(e);
        setTimeout(() => {
            this.setState({modalLoading: false, componentModalVisible: false});
        }, 3000);
    };

    

    //添加代理商
    public addSure = async () => {
        this.setState({modalLoading: true});
        const {HEAD, BODY} = await indexService.AGT_009(this.state.curItem);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('添加成功');
            this.setState({
              visible: false,
            });
            this.searchData();           
        } else {
            message.error(MSG);
        }
        
    };

    

    public componentModalCancel = e => {
        console.log(e);
        this.setState({
           componentModalVisible: false,
        });
        this.searchData();
    };

    public handleCancelA = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
        this.searchData();
    };

    

    public componentDidMount() {
        this.searchData();
        this.searchPolicy();

    };

    // 查询政策
    public searchPolicy = async () => {
        const {HEAD, BODY} = await indexService.AGT_007();
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            this.setState({policy: rows});
        } else {
            message.error(MSG);
        }
    };

    // 根据政策以及代理商id查询是否设置了参数
    public loadPolicy = async (policyId) => {
        this.setState({policyLoading: true});
        const {agentId = ''} = this.state.componentItem;
        const {HEAD, BODY} = await indexService.AGT_008({agentId, policyId});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            if (rows) {
                this.setState({componentItem: rows, policyLoading: false, btnDisabled: true});
            } else {
                const componentItem = {agentId, policyId};
                this.setState({componentItem, policyLoading: false, btnDisabled: false});
            }
        } else {
            message.error(MSG);
        }
    };

    public getItem = (id) => {
        let o: any = {};
        this.state.items.forEach((item) => {
            if (item.agentId === id) {
                o = item;
            }
        });
        return o;
    };

     //数据渲染
    public searchData = async () => {
        this.setState({tableLoading: true});
        const {HEAD, BODY} = await indexService.AGT_001(this.searchParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {header, rows, total} = BODY;
            const pagination = {...this.state.pagination};
            pagination.total = total;
            header.push({
                title: '操作', dataIndex: 'agentId', key: 'agentId', fixed: 'right', width: 450,
                render: (id) => {
                    const item = this.getItem(id);
                    console.log(item);
                    return (
                        <div className="btn-group">
                            <Button size="small" onClick={this.freeze(item)}>{item.state === 10 ? '解冻' : '冻结'}</Button>
                            <Button size="small" onClick={this.freezes(item)}>{item.state === 1 ? '解冻' : '冻结'}</Button>
                            <Button style={{marginLeft: 10}} size="small" onClick={this.setParam(item)}>设置分润参数</Button>
                            <Button style={{marginLeft: 10}} size="small" onClick={this.getParam(item)}>设置抵扣参数</Button>
                            <Button style={{marginLeft: 10}} size="small" onClick={this.resetPwd(item)}>重置密码</Button>
                        </div>
                    );
                },
            });
            this.setState({header, items: rows, tableLoading: false, pagination});
        } else {
            message.error(MSG);
        }
    };

    public freeze = (item) => async () => {
        this.setState({tableLoading: true});
        const {state, mobile} = item;
        const {HEAD} = await indexService.AGT_003({mobile, state: state === 1 ? 10 : 1});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('解冻成功');
            this.searchData();
        } else {
            message.error(MSG);
        }
    }

    public freezes = (item) => async () => {
        console.log(item)
        this.setState({tableLoading: true});
        const {state, mobile} = item;
        const {HEAD} = await indexService.AGT_003({mobile, state: state === 10 ? 10 : 1});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('冻结成功');
            this.searchData();
        } else {
            message.error(MSG);
        }
    }
    

    //设置分润参数
    public setParam = (item) => () => {
        this.setState({tableLoading: true});
        const {agentId} = item;
        this.setState({componentModalVisible: true, componentItem: {agentId}});
    }
     
    //分润参数提交验证
    

    //设置分润参数提交
    public componentSure = async () => {
        this.setState({modalLoading: true}); 
        const {HEAD, BODY} = await indexService.AGT_006({...this.state.componentItem});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('提交成功');
            this.setState({
              componentModalVisible: false,
            });
            this.searchData();           
        } else {
            message.error(MSG);
        }
    }
    
    //设置抵扣参数
    public getParam = (item) => () => {
        this.setState({tableLoading: true});        
        const {agentId} = item;
        this.setState({discountModalVisible: true, discountItem: {agentId}});
    }

    //抵扣参数提交
    public discountSure = async () => {
        this.setState({modalLoading: true});  
        const {HEAD, BODY} = await indexService.AGT_010(this.state.discountItem);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('提交成功');
            this.setState({
              discountModalVisible: false,
            });
            this.searchData();           
        } else {
            message.error(MSG);
        }
    }

    //抵扣取消提交
    public discountModalCancel = () => {
        this.setState({discountModalVisible: false});
        this.searchData();
    }
    
    //重置密码
    public resetPwd = (item) => async () => {
        this.setState({tableLoading: true});
        const {mobile} = item;
        const {HEAD, BODY} = await indexService.AGT_005({mobile});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('密码重置成功');
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

    

    public handleChangeParam = (key) => (e) => {
        const curItem = Object.assign({}, this.state.curItem);
        switch (key) {
            case 'policyId':
                console.log(`change value ${key}:${e}`);
                if (curItem[key] !== e) {
                    this.loadPolicy(e);
                }
                curItem[key] = e;
                break;
            default:
                console.log(`change value ${key}:${e.target.value}`);
                curItem[key] = e.target.value;
                this.setState({curItem});
                break;
        }
    }

    public componentParam = (key) => (e) => {       
        const componentItem = Object.assign({}, this.state.componentItem);
        switch (key) {
            case 'policyId':
                console.log(`change value ${key}:${e}`);
                if (componentItem[key] !== e) {
                    this.loadPolicy(e);
                }
                componentItem[key] = e;
                this.setState({componentItem});
                break;
            default:
                console.log(`change value ${key}:${e.target.value}`);
                componentItem[key] = e.target.value;
                this.setState({componentItem});
                break;
        }
    }
    
    public discountParam = (key) => (e) => {
        const discountItem = Object.assign({}, this.state.discountItem);
        switch (key) {
            case 'policyId':
                console.log(`change value ${key}:${e}`);
                if (discountItem[key] !== e) {
                    this.loadPolicy(e);
                }
                discountItem[key] = e;
                break;
            default:
                console.log(`change value ${key}:${e.target.value}`);
                discountItem[key] = e.target.value;
                this.setState({discountItem});
                break;
        }
    }
    

    public render() {
        const {header, items, tableLoading, pagination, modalLoading, currentItem = {}, policyLoading, policy} = this.state;
        const {license = '', registration = '', personName = '', idCard = '', accountName = '', account = '', loginAccount = '', initialPassword = '', branch = ''} = currentItem;
        return (
            <Fragment>
                <Row>
                    <Col span={8}>
                        <Form.Item label="手机号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入手机号" onChange={this.handleChange('mobile')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="代理商名称" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Input placeholder="请输入代理商名称" onChange={this.handleChange('agentName')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', right: 0}}
                                onClick={this.searchData}>查询</Button>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', right: 80}}
                                onClick={this.addModal}>添加</Button>
                    </Col>            
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 2000}} size="middle"/>     
                {this.renderModal()}
                {this.renderaddModal()}    
                {this.renderdiscountModal()}
            </Fragment>
        );
    }
    
    //新增代理商板块
    public renderaddModal() {
        const {visible, modalLoading, policy, policyLoading, curItem = {}, btnDisabled} = this.state;
        const {agentName = '', registrationNumber = '', legalPersonName = '', legalPersonCard = '', toPublicName = '', bankName = '', account = '', mobile = '', password = '', parentAgentId = '', parentFiliale = ''} = curItem;
        return (
            <Modal
              title="新增代理商"
              visible={visible}
              onOk={this.handleOkA}
              onCancel={this.handleCancelA}
              width={1000}
              footer={[
                <Button key="back" onClick={this.handleCancelA}>取消</Button>,
                <Button key="submit" type="primary" loading={modalLoading}
                        onClick={this.addSure}>确定添加</Button>,
              ]}
            >
              <Spin tip="加载中..." spinning={policyLoading}>
                <Form.Item label="营业执照名称" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={agentName} onChange={this.handleChangeParam('agentName')} style={{width: 300}}/>                        
                </Form.Item>

                <Form.Item label="注册号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={registrationNumber} onChange={this.handleChangeParam('registrationNumber')} style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="法人姓名" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={legalPersonName} onChange={this.handleChangeParam('legalPersonName')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="法人身份证" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={legalPersonCard} onChange={this.handleChangeParam('legalPersonCard')} style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="(对公账户信息)户名" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={toPublicName} onChange={this.handleChangeParam('toPublicName')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="开户行" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={bankName} onChange={this.handleChangeParam('bankName')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="账号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={account} onChange={this.handleChangeParam('account')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="登录账号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={mobile} onChange={this.handleChangeParam('mobile')}
                           style={{width: 300}}/>
                </Form.Item>
                <Form.Item label="初始密码" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={password} onChange={this.handleChangeParam('password')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="所属机构名称" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={parentAgentId} onChange={this.handleChangeParam('parentAgentId')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="所属分公司" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={parentFiliale} onChange={this.handleChangeParam('parentFiliale')}
                           style={{width: 300}}/>
                </Form.Item>

            </Spin>
        </Modal>
        )
    }
    

    //设置分润参数
    public renderModal() {
        const {componentModalVisible, modalLoading, policy, policyLoading, componentItem = {}, btnDisabled} = this.state;
        const {agentRate = '', txnRate = '', activationPrice = '', vip90Price = '', vip150Price = '', activityPrice = '', agentFee = '', txnFee = '', agentId = ''} = componentItem;
        return (
            <Modal
                visible={componentModalVisible}
                title="设置分润参数"
                onOk={this.handleOk}
                onCancel={this.componentModalCancel}
                width={1000}
                footer={[
                    <Button key="back" onClick={this.componentModalCancel}>取消</Button>,
                    <Button key="submit" type="primary" disabled={btnDisabled}  loading={modalLoading}
                            onClick={this.componentSure}>确定</Button>,
                ]}
            >
                <Spin tip="加载中..." spinning={policyLoading}>
                    <Form.Item label="政策" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Select style={{ width: 280 }} onChange={this.componentParam('policyId')}>
                        {policy.map(({ policyId, name }, index) => (<Option key={index} value={policyId} >{name}</Option>))}

                        </Select>
                    </Form.Item>

                    <Form.Item label="代理商费率（刷卡支付）" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" placeholder="费率范围0.001～0.007" value={agentRate} onChange={this.componentParam('agentRate')} style={{width: 280}}/>
                        +
                        <Input type="number" placeholder="分值范围100～300" value={agentFee} onChange={this.componentParam('agentFee')} style={{width: 280}}/>
                    </Form.Item>

                    <Form.Item label="用户费率（刷卡支付）" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" placeholder="费率范围0.001～0.007" value={txnRate} onChange={this.componentParam('txnRate')} style={{width: 280}}/>
                        +
                        <Input type="number" placeholder="分值范围100～300" value={txnFee} onChange={this.componentParam('txnFee')} style={{width: 280}}/>
                    </Form.Item>

                    <Form.Item label="激活返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" value={activationPrice} onChange={this.componentParam('activationPrice')}
                               style={{width: 280}}/>
                    </Form.Item>

                    <Form.Item label="VIP返现(90天)" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" value={vip90Price} onChange={this.componentParam('vip90Price')} style={{width: 280}}/>
                    </Form.Item>

                    <Form.Item label="VIP返现(150天)" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" value={vip150Price} onChange={this.componentParam('vip150Price')} style={{width: 280}}/>
                    </Form.Item>

                    <Form.Item label="活动返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" value={activityPrice} onChange={this.componentParam('activityPrice')}
                               style={{width: 280}}/>
                    </Form.Item>

                </Spin>
            </Modal>
        );
    }
    
    //设置抵扣参数
    public renderdiscountModal() {
        const {discountModalVisible, modalLoading, policy, policyLoading, discountItem = {}, btnDisabled} = this.state;
        const {txnRate = '', activationRate = '', vipRate = '', activityRate = '', agentId = ''} = discountItem;
        return (
            <Modal
                visible={discountModalVisible}
                title="设置抵扣参数"
                onOk={this.handleOkB}
                onCancel={this.discountModalCancel}
                width={1000}
                footer={[
                    <Button key="back" onClick={this.discountModalCancel}>取消</Button>,
                    <Button key="submit" type="primary" loading={modalLoading}
                            onClick={this.discountSure}>确定</Button>,
                ]}
            >
                <Spin tip="加载中..." spinning={policyLoading}>
                    

                    <Form.Item label="分润" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" placeholder="费率范围0.001～0.007" value={txnRate} onChange={this.discountParam('txnRate')} style={{width: 300}}/>
                    </Form.Item>

                    <Form.Item label="激活返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" placeholder="费率范围0.001～0.007" value={activationRate} onChange={this.discountParam('activationRate')}
                               style={{width: 300}}/>
                    </Form.Item>

                    <Form.Item label="VIP返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" placeholder="费率范围0.001～0.007" value={vipRate} onChange={this.discountParam('vipRate')} style={{width: 300}}/>
                    </Form.Item>

                    <Form.Item label="活动返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" placeholder="费率范围0.001～0.007" value={activityRate} onChange={this.discountParam('activityRate')}
                               style={{width: 300}}/>
                    </Form.Item>

                </Spin>
            </Modal>
        );
    }
}

