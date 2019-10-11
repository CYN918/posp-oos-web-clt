import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, Modal, message, Select, Spin, InputNumber, Tooltip, Cascader} from 'antd';
import indexService from '../../services/agencySerivce';

const Option = Select.Option;


export class AgentManagement extends Component {

    public searchParam: any = {              
        "mobile": "",
        "agentName": "",
        "currentPage": "1",
        "pageSize": "10"              
    };

    public storageParam: any = {
        policyId: '',
    }


    public state: any = {
        policy: [],
        policy1: [],
        policy2: [],
        paybank: [],
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
        agentRate: '',  
        activationPrice: '', 
        vip90Price: '', 
        vip150Price: '', 
        activityPrice: '', 
        agentFee: '', 
        txnFee: '', 
        agentId: '',
        CST_RATE_MIN: '',
        CST_RATE_MAX: '',
        CST_FEE_MIN: '',
        CST_FEE_MAX: '',
        jhCashbackAmount: '',
        hdCashbackAmount: '',
        cashbackAmount: '',
        txnRate: '', 
        txnRate1: '', 
        activationRate: '', 
        vipRate: '', 
        activityRate: '',
        totalData: [],
        cityCode: '',
        bankName: '',
        paybankNo: '',
        bankLogUrl: '',
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
        const data = this.state.curItem;
        if(JSON.stringify(data) == '{}'){
            message.info('提交不能为空');
            return false
        }
        this.setState({modalLoading: true});
        const obj = {
            paybankNo: this.state.paybankNo,
            bankLogUrl: this.state.bankLogUrl,
            bankName: this.state.bankName,
        }
        const obj1 = this.state.curItem;
        const newObj = {};
        Object.assign(newObj,obj,obj1);
        const {HEAD, BODY} = await indexService.AGT_009(newObj);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('添加成功');
            this.setState({
              visible: false,
            });
            this.setState({modalLoading: false});
            this.state.curItem = '';
            this.searchData();           
        } else {
            message.error(MSG);
            this.setState({modalLoading: false});
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
        this.searchPolicy1();
        
        this.init();
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

    // 查询银行
    public searchPolicy1 = async () => {
        const {HEAD, BODY} = await indexService.AGT_013();
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {res} = BODY;
            for(var i = 0; i < res.length; i++){
                this.setState({bankLogUrl: res[i].bankLogUrl});
            }
            this.setState({policy1: res});
        } else {
            message.error(MSG);
        }
    };

    // 查询联行号
    public searchPolicy2 = async () => {
        const obj = {
           cityCode: this.state.cityCode,
           bankName: this.state.bankName,
        }
        const {HEAD, BODY} = await indexService.AGT_012(obj);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {subBranchList} = BODY;
            this.setState({policy2: subBranchList});
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
                title: '操作', dataIndex: 'agentId', key: 'agentId', fixed: 'right', width: 380,
                render: (id) => {
                    
                    const item = this.getItem(id);
                    
                    return (
                        <div className="btn-group">
                            <Button size="small" onClick={this.freezes(item)}>{item.state === 10 ? '解冻' : '冻结'}</Button>                            
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

    

    public freezes = (item) => async () => {
        this.setState({tableLoading: true});
        const {state, mobile} = item;
        const {HEAD} = await indexService.AGT_003({mobile, state: state === 10 ? 1 : 10});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('成功');
            this.searchData();
        } else {
            message.error(MSG);
        }
    }
    

    //设置分润参数
    public setParam = (item) => () => {
        if(item.agentLevel === 1){
            const {agentId} = item;
            this.setState({componentModalVisible: true, componentItem: {agentId}});
        }else{
             message.info('您只能给一级代理商设置分润参数!');
        }
        
    }
     
    // 根据政策以及代理商id查询是否设置了参数
    public loadPolicy = async (policyId) => {
        this.setState({policyLoading: true});
        const {agentId = ''} = this.state.componentItem;
        const {HEAD, BODY} = await indexService.AGT_008({agentId, policyId});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            var rows = BODY.AgentPolicyPo;
            var rate = BODY.customerFee;
            var activity = BODY.PolicyConfigPo;
            var VIPback = BODY.VipCashBack;

            this.setState({CST_RATE_MIN: (rate.CST_RATE_MIN*100).toFixed(2)});
            this.setState({CST_RATE_MAX: (rate.CST_RATE_MAX*100).toFixed(2)});
            this.setState({CST_FEE_MIN: (rate.CST_FEE_MIN/100).toFixed(2)});
            this.setState({CST_FEE_MAX: (rate.CST_FEE_MAX/100).toFixed(2)});
            this.setState({jhCashbackAmount: (activity.jhCashbackAmount)/100});
            this.setState({hdCashbackAmount: (activity.hdCashbackAmount)/100});
            for(var i = 0; i < VIPback.length; i++){
                if(VIPback[i].buyAmount === 9000){
                    this.setState({cashbackAmount: (VIPback[i].cashbackAmount)/100});
                }
                if(VIPback[i].buyAmount === 15000){
                    this.setState({cashbackAmount1: (VIPback[i].cashbackAmount)/100});
                }
            }

            if (rows) {
                this.setState({agentRate: (rows.agentRate*100).toFixed(3)});
                this.setState({txnRate: (rows.txnRate*100).toFixed(3)});
                this.setState({activationPrice: rows.activationPrice/100});
                this.setState({vip90Price: rows.vip90Price/100});
                this.setState({vip150Price: rows.vip150Price/100});
                this.setState({activityPrice: rows.activityPrice/100});
                this.setState({agentFee: rows.agentFee/100});
                this.setState({txnFee: rows.txnFee/100});
                this.setState({ policyLoading: false, btnDisabled: true});
            } else {

                this.setState({agentRate: ''});
                this.setState({txnRate: ''});
                this.setState({activationPrice: ''});
                this.setState({vip90Price: ''});
                this.setState({vip150Price: ''});
                this.setState({activityPrice: ''});
                //this.setState({agentFee: ''});
                //this.setState({txnFee: ''});
                


                const componentItem = {agentId, policyId};
                this.setState({componentItem, policyLoading: false, btnDisabled: false});
                this.setState({agentId, agentId});

            }
        } else {
            message.error(MSG);
        }
    };
    
    //根据代理商id查询是否设置了参数
    public loadPolicy1 = async (item) => {
        this.setState({policyLoading: false});
        var obj = {
            agentId: item.agentId,
        }
        const {HEAD, BODY} = await indexService.AGT_014(obj);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const rows = BODY.res;
            if(rows){
                this.setState({txnRate1: rows.txnRate*100});
                this.setState({activationRate: rows.activationRate*100});
                this.setState({vipRate: rows.vipRate*100});
                this.setState({activityRate: rows.activityRate*100});
                this.setState({btnDisabled: true});
            }else{
                this.setState({txnRate1: ''});
                this.setState({activationRate: ''});
                this.setState({vipRate: ''});
                this.setState({activityRate: ''});
                this.setState({btnDisabled: false});
            }
        } else {
            message.error(MSG);
        }
    };
   

    //设置分润参数提交
    public componentSure = async () => {
        if(this.state.agentRate == ''){
            message.info('输入代理商费率');
            return false
        } 
        if(this.state.txnRate == ''){
            message.info('输入用户费率');
            return false
        } 
        if(this.state.agentRate > this.state.txnRate){
            message.info('代理商费率必须小于用户费率');
            return false
        }
        if(this.state.activationPrice == ''){
            message.info('输入激活返现');
            return false
        }
        if(this.state.activityPrice == ''){
            message.info('输入活动返现');
            return false
        }
        if(this.state.vip90Price == ''){
            message.info('输入vip返现');
            return false
        }
        if(this.state.vip150Price == ''){
            message.info('输入vip返现');
            return false
        }   
        var obj = {
            txnRate : (this.state.txnRate/100).toFixed(5),
            txnFee : (this.state.txnFee)*100,
            agentRate: (this.state.agentRate/100).toFixed(5),
            agentFee: (this.state.agentFee)*100,
            activationPrice: (this.state.activationPrice)*100,
            activityPrice: (this.state.activityPrice)*100,
            vip90Price: (this.state.vip90Price)*100,
            vip150Price: (this.state.vip150Price)*100,
            agentId: this.state.agentId,
        }
        var obj1 =  this.storageParam;
        var newObj = {};
        Object.assign(newObj,obj,obj1);
        this.setState({modalLoading: true}); 
        const {HEAD, BODY} = await indexService.AGT_006(newObj);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('提交成功');
            this.setState({
              componentModalVisible: false,
            });
            this.setState({agentFee: ''});
            this.setState({modalLoading: false});
            this.searchData();           
        } else {
            message.error('数据格式有误，请检查');
            this.setState({modalLoading: false}); 
        }
    }
    
    //设置抵扣参数
    public getParam = (item) => () => {
        this.loadPolicy1(item);
        if(item.agentLevel === 1){
            this.setState({tableLoading: true});        
            const {agentId} = item;
            this.setState({discountModalVisible: true, discountItem: {agentId}});
            this.setState({agentId: agentId});
        }else{
             message.info('您只能给一级代理商设置分润参数!');
        }
        
    }

    //抵扣参数提交
    public discountSure = async () => {
        var reg = /^\d+$|^\d+[.]?\d+$/;
        if(this.state.txnRate1 == ''){
            message.info('请输入分润');
            return false
        }
        if(!reg.test(this.state.txnRate1)){
            message.info('只能输入数字');
            return false
        }
        if(this.state.txnRate1 > 100){
            message.info('分润费率最大值100');
            return false
        }
        if(this.state.activationRate == ''){
            message.info('请输入激活返现');
            return false
        }
        if(!reg.test(this.state.activationRate)){
            message.info('只能输入数字');
            return false
        }
        if(this.state.activationRate > 100){
            message.info('激活返现费率最大值100');
            return false
        }
        if(this.state.vipRate == ''){
            message.info('请输入VIP返现');
            return false
        }
        if(!reg.test(this.state.vipRate)){
            message.info('只能输入数字');
            return false
        }
        if(this.state.vipRate > 100){
            message.info('VIP返现费率最大值100');
            return false
        }
        if(this.state.activityRate == ''){
            message.info('请输入活动返现');
            return false
        }
        if(!reg.test(this.state.activityRate)){
            message.info('只能输入数字');
            return false
        }
        if(this.state.activityRate > 100){
            message.info('活动返现费率最大值100');
            return false
        }
        var obj = {
            txnRate: (this.state.txnRate1)/100, 
            activationRate: (this.state.activationRate)/100, 
            vipRate: (this.state.vipRate)/100, 
            activityRate: (this.state.activityRate)/100,
            agentId: this.state.agentId,
        } 
        const {HEAD, BODY} = await indexService.AGT_010(obj);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('设置成功');
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
                this.storageParam[key] = e;
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

    public change(e) {
        console.log(e.target.value);
        //设置数据的值，用this.setState({})
        const teshu = e.target.value;
        this.setState({agentFee: e.target.value});
        if(teshu == 0){                   
            this.setState({txnFee: 0});
        }else{
            this.setState({txnFee: 3});
        }
    }
    
    
    //解析城市json文件
    public init(){
        fetch('http://10.10.5.237:9000/public/city.json', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
         
        })
        .then(response => response.json())//解析为Promise
        .then(data => {  
            const addressData = data.data;
            const addr=[];            
            for(let item in addressData){
                const key = addressData[item].name;
                const key1 = addressData[item].code;
                const keys = addressData[item].value;
                const cityList = [];
                for(let item1 in keys){                    
                    const obj = {
                        'value':keys[item1].code,
                        'label':keys[item1].name,
                    }
                    cityList.push(obj)
                }
                const obj = {
                    'value':key1,
                    'label':key,
                    'children':cityList
                }
                addr.push(obj);
                this.setState({totalData: addr});
            }
                                   
        })
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
        const {visible, modalLoading, policy, policy1, policy2, policyLoading, curItem = {}, btnDisabled, paybank, totalData, cityCode,
        bankName,
        bankLogUrl} = this.state;
        const {agentName = '', registrationNumber = '', legalPersonName = '', legalPersonCard = '', toPublicName = '', account = '', mobile = '', password = '', parentAgentId = '', parentFiliale = '', paybankId = ''} = curItem;
        function onChange(value) {
            const cityCode = value[0];
            const cityCode1 = value[1];
            this.setState({cityCode: cityCode1});          
        }
        function inputChange(value){           
            const bankName = value;
            console.log(bankName)
            this.setState({bankName: bankName});
        }
        function inputChanges(value){           
            const paybankNo = value;
            this.setState({paybankNo: paybankNo});
        }
        return (
            <Modal
              title="新增代理商(都为必填项)"
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
                    <Input maxLength={18} value={legalPersonCard} onChange={this.handleChangeParam('legalPersonCard')} style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="(对公账户信息)户名" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={toPublicName} onChange={this.handleChangeParam('toPublicName')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="选择开户行" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Select style={{ width: 300 }} onChange={inputChange.bind(this)}>
                        {policy1.map(({ bankLogId, bankName }, index) => (<Option key={index} value={bankName}>{bankName}</Option>))}

                        </Select>
                </Form.Item>

                <Form.Item label="选择城市" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Cascader options={totalData} onChange={onChange.bind(this)} changeOnSelect style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="支行联行号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Select style={{ width: 300 }} onChange={inputChanges.bind(this)} onFocus={this.searchPolicy2}>
                        {policy2.map(({ paybankNo, accbankNo }, index) => (<Option key={index} value={paybankNo}>{accbankNo}</Option>))}
                        </Select>
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
        const {componentModalVisible, modalLoading, policy, policyLoading, componentItem = {}, btnDisabled,agentRate, txnRate, activationPrice, vip90Price, vip150Price, activityPrice, agentFee, txnFee,CST_RATE_MIN,
        CST_RATE_MAX,
        CST_FEE_MIN,
        CST_FEE_MAX,
        jhCashbackAmount,
        hdCashbackAmount,
        cashbackAmount,
        cashbackAmount1,
        agentId} = this.state;
        const {} = componentItem;
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
                <Spin  tip="加载中..." spinning={policyLoading}>
                    <Form.Item label="政策" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Select style={{ width: 280 }} onChange={this.componentParam('policyId')}>
                        {policy.map(({ policyId, name }, index) => (<Option key={index} value={policyId} >{name}</Option>))}

                        </Select>
                    </Form.Item>

                    <Form.Item label="代理商费率（刷卡支付）" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input id="agentRate" type="number" onChange={e => this.setState({agentRate : e.target.value})} placeholder="" value={agentRate}  style={{width: 280}}/>
                        <Tooltip title="prompt text">
                            <span>费率范围是{CST_RATE_MIN}%~{CST_RATE_MAX}%</span>
                        </Tooltip>
                        <Input onChange={this.change.bind(this)} value={this.state.agentFee} placeholder=""   style={{width: 280}}/>
                        <Tooltip title="prompt text">
                            <span>范围是{CST_FEE_MIN}~{CST_FEE_MAX}元</span>
                        </Tooltip>
                    </Form.Item>

                    <Form.Item label="用户费率（刷卡支付）" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" onChange={e => this.setState({txnRate : e.target.value})} placeholder="" value={txnRate}  style={{width: 280}}/>
                        <Tooltip title="prompt text">
                            <span>费率范围是{CST_RATE_MIN}%~{CST_RATE_MAX}%</span>
                        </Tooltip>
                        <Input type="number" id="teshu" disabled={true} onChange={e => this.setState({txnFee : e.target.value})} placeholder="" value={txnFee}  style={{width: 280}}/>
                        
                    </Form.Item>

                    <Form.Item label="激活返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" onChange={e => this.setState({activationPrice : e.target.value})} value={activationPrice} 
                               style={{width: 280}}/>
                        <Tooltip title="prompt text">
                            <span>范围是0~{jhCashbackAmount}元</span>
                        </Tooltip>
                    </Form.Item>

                    <Form.Item label="VIP返现(90天)" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" onChange={e => this.setState({vip90Price : e.target.value})} value={vip90Price}  style={{width: 280}}/>
                        <Tooltip title="prompt text">
                            <span>范围是0~{cashbackAmount}元</span>
                        </Tooltip>
                    </Form.Item>

                    <Form.Item label="VIP返现(150天)" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" onChange={e => this.setState({vip150Price : e.target.value})} value={vip150Price}  style={{width: 280}}/>
                        <Tooltip title="prompt text">
                            <span>范围是0~{cashbackAmount1}元</span>
                        </Tooltip>
                    </Form.Item>

                    <Form.Item label="活动返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" onChange={e => this.setState({activityPrice : e.target.value})} value={activityPrice} 
                               style={{width: 280}}/>
                        <Tooltip title="prompt text">
                            <span>范围是0~{hdCashbackAmount}元</span>
                        </Tooltip>
                    </Form.Item>

                </Spin>
            </Modal>
        );
    }
    
    //设置抵扣参数
    public renderdiscountModal() {
        const {discountModalVisible, modalLoading, policy, policyLoading, discountItem = {}, btnDisabled,txnRate1, activationRate, vipRate, activityRate, agentId} = this.state;
        const {} = discountItem;
        return (
            <Modal
                visible={discountModalVisible}
                title="设置抵扣参数"
                onOk={this.handleOkB}
                onCancel={this.discountModalCancel}
                width={1000}
                footer={[
                    <Button key="back" onClick={this.discountModalCancel}>取消</Button>,
                    <Button key="submit" type="primary" disabled={btnDisabled}
                            onClick={this.discountSure}>确定</Button>,
                ]}
            >
                <Spin tip="加载中..." spinning={policyLoading}>
                    

                    <Form.Item label="分润" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" placeholder="费率范围0～100" value={txnRate1} onChange={e => this.setState({txnRate1 : e.target.value})} style={{width: 300}}/>%
                    </Form.Item>

                    <Form.Item label="激活返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" placeholder="费率范围0～100" value={activationRate} onChange={e => this.setState({activationRate : e.target.value})}
                               style={{width: 300}}/>%
                    </Form.Item>

                    <Form.Item label="VIP返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" placeholder="费率范围0～100" value={vipRate} onChange={e => this.setState({vipRate : e.target.value})} style={{width: 300}}/>%
                    </Form.Item>

                    <Form.Item label="活动返现" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Input type="number" placeholder="费率范围0～100" value={activityRate} onChange={e => this.setState({activityRate : e.target.value})}
                               style={{width: 300}}/>%
                    </Form.Item>

                </Spin>
            </Modal>
        );
    }
}

