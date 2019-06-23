import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message, Select, Modal, Spin, Divider, Tag, Tooltip} from 'antd';
import indexService from '../../services/terminalService';

const Option = Select.Option;
const confirm = Modal.confirm;


export class TerminalTransfer extends Component {

    public searchParam: any = {
        policyName: '',
        currentPage: 1,
        pageSize: 10,
    };

    public storageParam: any = {
        policyId: '',
    };

    public storageParams: any = {
        toAgentId: '',
    };

    public state: any = {
        header: [],
        items: [],
        tableLoading: false,
        btnDisabled: false,
        btnLoading: false,
        disabled: false,
        policy: [],
        policy1: [],
        currentItem: {},
        visible: false,
        data: [],
        endSn: '',
        startSn: '',
        endSns: '',
        startSns: '',
        orderNumber: '',
        theAgent: '',
        policyType: '',
        machinesTool: '',
        machinesPrice: '',
        loanAmount: '',
        eachAmount: '',
        term:'', 
        total:'',
        dailishang: '',
        posList: [],
        amount: '',
    };

    public addModal = () => {
        //订单号生成
        var header = '00';
        var agentNumber = this.state.dailishang;
        var timer = this.generateTimeReqestNumber();
        var rand = "";
        for(var i=0;i<4;i++){
            rand+=Math.floor(Math.random()*10)
        }
        var orderNumber = header + agentNumber + timer + rand;
        this.setState({orderNumber: orderNumber});
        this.loadPolicy2();
        this.setState({
          visible: true,
        });
    };

    public handleCancelA = e => {
        this.setState({
          visible: false,
        });
        this.setState({amount: ''});
        this.setState({eachAmount: ''});
    };


    public createFactoring = async () => {
        if(this.state.orderNumber == ''){
            message.info('订单号不能为空');
            return false
        }
        if(this.state.machinesTool == ''){
            message.info('机具数量不能为空');
            return false
        }
        if(document.getElementById('factoringAmount').value > this.state.loanAmount){
            message.info('保理总额不能大于贷款总额');
            return false
        }
        var canshu = {
            id : '0',
            orderNo: this.state.orderNumber,
            num: this.state.machinesTool,
            downType: 1,
            sns:this.state.posList,
            amount: (this.state.amount)*100,

        }
        var obj1 =  this.storageParam;
        var obj2 = this.storageParams;
        var newObj = {};
        Object.assign(newObj,canshu,obj1,obj2);
        this.setState({modalLoading: true});
        const {HEAD, BODY} = await indexService.POS_012(newObj);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('创建保理成功');
            this.setState({
              visible: false,
            });
            this.setState({modalLoading: false});
        } else {
            message.error(MSG);
        }
    }

   


    public componentDidMount() {
        this.loadPolicy();
        this.loadPolicy1();
        
    }
    

    public searchData = async () => {
        var reg = /^\d+$|^\d+[.]?\d+$/;
        if(this.storageParam.policyId == ''){
            message.info('请选择政策类型');
            return false
        }
        if(this.storageParams.toAgentId == ''){
            message.info('请选择代理商');
            return false
        }
        if(this.state.startSn == ''){
            message.info('请输入序列号始');
            return false
        }
        if(!reg.test(this.state.startSn)){
            message.info('只能输入数字');
            return false
        }        
        if(this.state.endSn == ''){
            message.info('请输入序列号末');
            return false
        }        
        if(!reg.test(this.state.endSn)){
            message.info('只能输入数字');
            return false
        }        
        var num =  document.getElementById('endSn').value - document.getElementById('startSn').value;
        this.setState({machinesTool: num});               
        this.setState({tableLoading: true});
        var obj = {
            startSn : this.state.startSn,
            endSn : this.state.endSn,
            id: 0,
            posList: this.state.posList,
        }
        var obj1 =  this.storageParam;
        var newObj = {};
        Object.assign(newObj,obj,obj1);
        const {HEAD, BODY} = await indexService.POS_005(newObj);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {header, rows, total} = BODY;
            if(BODY.message != ""){
                message.info(BODY.message);
            }
            var zongshu = 0;
            var jushuliang = 0;
            for(var i = 0; i < rows.length; i++){
                zongshu = zongshu + rows[i].total;
                this.setState({total: zongshu});
                jushuliang = jushuliang + (rows[i].endSn - rows[i].startSn + 1);
                this.setState({machinesTool: jushuliang});
            }
            const pagination = {...this.state.pagination};
            pagination.total = total;
            this.setState({posList: rows});           
            header.push({
                title: '操作', dataIndex: 'key', key: 'key', fixed: 'right', width: 200,
                render: (id) => { 
                    const item = this.getItem(id);                                     
                    return (
                        <div className="btn-group">
                            <Button style={{marginLeft: 10}} size="small" onClick={this.setParam(item)}>删除</Button>
                        </div>
                    );
                },
            });

            this.setState({header, items: rows, tableLoading: false, pagination});
        } else {
            message.error(MSG);
        }
        
    }

    public getItem = (id) => {
        let o: any = {};
        this.state.items.forEach((item) => {
            if (item.key === id) {
                o = item;
            }
        });
        return o;
    };


    public setParam = (item) => async () => {  
        var lists = this.state.items; 
        var index = lists.indexOf(item);
        lists.splice(index,1);               
        this.setState({items: lists});
        var sum = 0;
        if(lists.length == '0'){
            this.setState({machinesTool: ''});           
        }else{
            for(var i = 0; i < lists.length; i++){
                sum += lists[i].total;                        
                this.setState({machinesTool: sum});
            }
        }                                             
    }

   
    
    //政策列表查询
    public loadPolicy = async (policyId) => {
        const {HEAD, BODY} = await indexService.POS_003({policyId});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;  
            this.setState({policy: rows});       
            if (rows) {                
                this.setState({currentItem: rows, policyLoading: false});
                var list = this.state.currentItem;
                for(var i = 0; i < list.length; i++){
                    if(policyId === list[i].policyId){
                        this.setState({policyType: list[i].name});
                        this.setState({startSn: list[i].startSn});
                        this.setState({startSns: list[i].startSn});
                        this.setState({endSn: list[i].endSn});
                        this.setState({endSns: list[i].endSn});
                    }
                }
            } else {               
                const currentItem = {policyId};
                this.setState({currentItem, policyLoading: false,  btnDisabled: true});
            }
        } else {
            message.error(MSG);
        }
    }


    generateTimeReqestNumber() {
        var date = new Date();
        return date.getFullYear().toString() + this.pad2(date.getMonth() + 1) + this.pad2(date.getDate()) + this.pad2(date.getHours()) + this.pad2(date.getMinutes()) + this.pad2(date.getSeconds());
    }
    
    pad2(n) { return n < 10 ? '0' + n : n }

    PrefixZero(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }
    
    //代理商列表查询
    public loadPolicy1 = async (agentId) => {
        const {HEAD, BODY} = await indexService.POS_004();
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;
            for(var i = 0; i < rows.length; i++){
                if(agentId === rows[i].agentId){                   
                    var agentNumber = rows[i].agentId;
                    this.setState({dailishang: agentNumber});                   
                    this.setState({theAgent: rows[i].agentName});                   
                }             
            }
            
            this.setState({policy1: rows});           
        } else {
            message.error(MSG);
        }
    }

    //确认划拨
    public loadPolicy2 = async (term) => {    
        this.setState({policyLoading: true});      
        const {HEAD, BODY} = await indexService.POS_006();
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            let rows = BODY;
            let price = rows.POS_PRICE/100;

            var num =  this.state.machinesTool;
            var number = price * num;
            this.setState({machinesPrice: price});
            this.setState({loanAmount: number});
            var factoringAmount = document.getElementById('factoringAmount').value;            
            let trem = rows.LOAN_TERMS;
            let data = Array.from(trem.split(","));
            this.setState({data});
            for(var i = 0; i < data.length; i++){
                if(term === data[i]){
                    var zhi = data[i];
                    var eachAmount = factoringAmount / zhi;
                    this.setState({eachAmount: eachAmount});
                    this.setState({term: zhi});
                }
            }
            
        } else {
            message.error(MSG);
        }
        
    }


    public handleChangeParam = (key) => (e) => {
        const currentItem = Object.assign({}, this.state.currentItem);
        switch (key) {
            case 'policyId':
                console.log(`change value ${key}:${e}`);
                if (this.storageParam[key] !== e) {
                    this.loadPolicy(e);
                }
                this.storageParam[key] = e;
                this.setState({currentItem});
                this.setState({items: ''});
                this.setState({posList: []}); 
                break;
            case 'toAgentId':
                console.log(`change value ${key}:${e}`);
                if (this.storageParams[key] !== e) {
                    this.loadPolicy1(e);
                }
                this.storageParams[key] = e;
                this.setState({currentItem});
                break;
            case 'term':
                console.log(`change value ${key}:${e}`);
                if (this.storageParam[key] !== e) {
                    this.loadPolicy2(e);
                }
                this.storageParam[key] = e;
                this.setState({currentItem});
                break;
            case 'amount':
                console.log(`change value ${key}:${e.target.value}`);
                this.storageParams1[key] = e.target.value * 100;
                this.setState({currentItem});
                break;
            default:
                console.log(`change value ${key}:${e.target.value}`);
                currentItem[key] = e.target.value;
                this.setState({currentItem});
                break;
        }
    }

    public handleTableChange = (pagination) => {
        this.searchParam.currentPage = pagination.current;
        this.setState({pagination}, () => {
            
        });
    }


    public render() {
        const {header, modalLoading, items, tableLoading, pagination, policy, policy1, policyLoading, btnLoading, btnDisabled, startSn, endSn} = this.state;
        return (
            <Fragment>
                <Row>
                    <Col span={7} style={{width: '100%'}}>
                        <Form.Item label="政策类型" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Select onChange={this.handleChangeParam('policyId')} style={{width: '49%'}}
                                    >
                                {policy.map(({policyId, name}, index) => (
                                    <Option  id="select" key={index} value={policyId}>{name}</Option>))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={7} style={{width: '100%'}}>
                        <Form.Item label="代理商选择" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Select onChange={this.handleChangeParam('toAgentId')} style={{width: '49%'}}
                                    >
                                
                                {policy1.map(({agentId, agentName}, index) => (
                                    <Option key={index} value={agentId}>{agentName}</Option>))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={7} style={{width: '100%'}}>
                        <Form.Item label="序列号始" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        
                            <Input type="text" maxLength={15} onChange={e => this.setState({startSn : e.target.value})} placeholder="请输入序列号始" id="startSn" style={{width: '49%'}} value={startSn}/>
                        </Form.Item>
                    </Col>
                    <Col span={7} style={{width: '100%'}}>
                        <Form.Item label="序列号末" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        
                            <Input type="text" maxLength={15} onChange={e => this.setState({endSn : e.target.value})} placeholder="请输入序列号末" id="endSn" style={{width: '49%'}} value={endSn}/>
                        </Form.Item>
                    </Col>
                    <Col span={14}></Col>
                    <Col span={3}>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', right: 0, top: -62}}
                                onClick={this.searchData}>查询</Button>
                        
                    </Col>
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 500}} size="middle"/>

                <Col span={3}>
                    <Button type="primary" disabled={btnDisabled} style={{position: 'absolute', left: 0, top: 0}} 
                                onClick={this.addModal}>确认划拨</Button>                        
                </Col>
                
                {this.renderaddModal()}
                
            </Fragment>
        );
    }

    public renderaddModal() {
        const {visible, modalLoading, policy, policyLoading, disabled} = this.state;
        const {orderNumber, theAgent, policyType, machinesTool, machinesPrice, loanAmount, factoringAmount, eachAmount, amount} = this.state;
        return (
            <Modal
              title="设置还款计划"
              visible={visible}
              onOk={this.handleOkA}
              onCancel={this.handleCancelA}
              width={1000}
              footer={[
                <Button key="back" onClick={this.handleCancelA}>取消订单</Button>,
                <Button key="submit" type="primary" loading={modalLoading}
                        onClick={this.createFactoring}>发送订单</Button>,
              ]}
            >
              
                <Form.Item label="订单号" labelCol={{span: 6}} wrapperCol={{span: 16}}>    
                    <Tooltip title="prompt text">
                        <span>{orderNumber}</span>
                    </Tooltip>          
                </Form.Item>

                <Form.Item label="接收代理商" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Tooltip title="prompt text">
                        <span>{theAgent}</span>
                    </Tooltip>
                </Form.Item>

                <Form.Item label="政策类型" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Tooltip title="prompt text">
                        <span>{policyType}</span>
                    </Tooltip>
                </Form.Item>

                <Form.Item label="机具数量" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Tooltip title="prompt text">
                        <span>{machinesTool}</span>
                    </Tooltip>
                </Form.Item>

                <Form.Item label="单价" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Tooltip title="prompt text">
                        <span>{machinesPrice}</span>
                    </Tooltip>
                </Form.Item>

                <Form.Item label="贷款总额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Tooltip title="prompt text">
                        <span>{loanAmount}</span>
                    </Tooltip>
                </Form.Item>

                <Form.Item label="保理总额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={amount} id="factoringAmount" onChange={e => this.setState({amount : e.target.value})}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="期数" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Select
                        onChange={this.handleChangeParam('term')}
                        showSearch
                        style={{ width: 300 }}
                        placeholder="选择期数"
                        className="ddlResourceType"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {this.state.data.map((index) => <Option  key={index} value={index}>{index}</Option>)}
                      </Select>
                </Form.Item>
                <Form.Item label="每期金额" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input disabled={disabled} onChange={this.handleChangeParam('initialPassword')}
                           style={{width: 300}} value={eachAmount}/>
                </Form.Item>

        </Modal>
        )
    }
}
