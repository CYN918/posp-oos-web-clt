import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message, Select, Upload, Icon} from 'antd';
import indexService from '../../services/terminalService';
import reqwest from '../../reqwest';

const Option = Select.Option;


export class TerminalStorage extends Component {

    public searchParam: any = {
        policyName: '',
        currentPage: 1,
        pageSize: 10,
    };

    public storageParam: any = {
        startSn: '',
        policyId: '',
        endSn: '',
    };

    public state: any = {
        header: [],
        items: [],
        tableLoading: false,
        modalLoading: false,
        btnLoading: false,
        policy: [],
        pagination: {
            total: 0,
            current: 0,
            pageSize: this.searchParam.size,
        },
        componentItem: {}, 
        fileList: [],
        uploading: false,    
    };

    public componentDidMount() {
        this.searchData();
        this.loadPolicy();
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

    
    
    //查询终端入库
    public searchData = async () => {
        this.setState({tableLoading: true});
        const {HEAD, BODY} = await indexService.POS_001(this.searchParam);
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

    //查询序列号
    public searchData1 = async () => {
        var reg = /^\d+$|^\d+[.]?\d+$/;
        if(this.storageParam.startSn == ''){
            message.info('请输入序列号始');
            return false
        }
        if(this.storageParam.startSn.length < 15){
            message.info('序列号始必须是15位');
            return false
        }
        if(!reg.test(this.storageParam.startSn)){
            message.info('只能输入数字');
            return false
        }
        if(this.storageParam.endSn == ''){
            message.info('请输入序列号末');
            return false
        }
        if(this.storageParam.endSn.length < 15){
            message.info('序列号末必须是15位');
            return false
        }
        if(!reg.test(this.storageParam.endSn)){
            message.info('只能输入数字');
            return false
        }
        if(this.storageParam.startSn > this.storageParam.endSn){
            message.info('序列号始不能大于序列号末');
            return false
        }
        this.setState({tableLoading: true});
        const {HEAD, BODY} = await indexService.POS_001(this.storageParam);
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
    

    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
          formData.append('idPicture', file);
        
        });
        this.setState({
          uploading: true,
        });
        reqwest({
          url: 'http://10.10.5.237:8081/POS_007',
          method: 'post',
          processData: false,
          data: formData,
          success: () => {
                var testObj = JSON.parse(event.currentTarget.response);
                console.log(testObj.HEAD.CODE)
                if(testObj.HEAD.CODE === '000'){
                    this.setState({
                      fileList: [],
                      uploading: false,
                    });  
                    message.success('文件上传成功!');
                    const url = location.href;
                    location.replace(url);
                    this.searchData();
                }else{
                    this.setState({
                        fileList: [],
                        uploading: false,
                    });
                    message.error(testObj.HEAD.MSG);
                 
                }
            },
        });
    };

    //政策列表查询
    public loadPolicy = async (policyId) => {
        const {HEAD, BODY} = await indexService.AGT_007({policyId});
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;  
            this.setState({policy: rows});       
            if (rows) {                
                this.setState({componentItem: rows, policyLoading: false, btnDisabled: true});
            } else {
                
                const componentItem = {policyId};
                this.setState({componentItem, policyLoading: false, btnDisabled: false});
            }
        } else {
            message.error(MSG);
        }
    }

    //确定政策入库
    public sureData = async () => {
        var reg = /^\d+$|^\d+[.]?\d+$/;
        if(this.storageParam.startSn == ''){
            message.info('请输入序列号始');
            return false
        }
        if(!reg.test(this.storageParam.startSn)){
            message.info('只能输入数字');
            return false
        }
        if(this.storageParam.startSn.length < 15){
            message.info('序列号始必须是15位');
            return false
        }
        
        if(this.storageParam.endSn == ''){
            message.info('请输入序列号末');
            return false
        }
        
        if(!reg.test(this.storageParam.endSn)){
            message.info('只能输入数字');
            return false
        }
        if(this.storageParam.endSn.length < 15){
            message.info('序列号末必须是15位');
            return false
        }
        if(this.storageParam.startSn > this.storageParam.endSn){
            message.info('序列号始不能大于序列号末');
            return false
        }          
        if(this.storageParam.policyId == ''){
            message.info('请选择政策');
            return false
        }     
        this.setState({policyLoading: true});
        const {HEAD, BODY} = await indexService.POS_011(this.storageParam);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            const {rows} = BODY;  
            message.success('确定上传成功');
            this.searchData();
        } else {
            message.error(MSG);
        }
    }

    public handleChangeParam = (key) => (e) => {
        const componentItem = Object.assign({}, this.state.currentItem);
        switch (key) {
            case 'policyId':
                console.log(`change value ${key}:${e}`);
                if (this.storageParam[key] !== e) {
                    this.loadPolicy(e);
                }
                this.storageParam[key] = e;
                this.setState({componentItem});
                break;
            case 'startSn':
                console.log(`change value ${key}:${e.target.value}`);                
                this.storageParam[key] = e.target.value;
                this.setState({componentItem});
                break;
            case 'endSn':
                console.log(`change value ${key}:${e.target.value}`);
                this.storageParam[key] = e.target.value;
                this.setState({componentItem});
                break;
            default:
                console.log(`change value ${key}:${e.target.value}`);
                componentItem[key] = e.target.value;
                this.setState({componentItem});
                break;
        }
    }


    public render() {
        const {header, modalLoading, items, tableLoading, pagination, policy, policyLoading, btnLoading, componentItem = {}} = this.state;
        const {} = componentItem;
        const { uploading, fileList } = this.state;
        const props = {
          onRemove: file => {
            this.setState(state => {
              const index = state.fileList.indexOf(file);
              const newFileList = state.fileList.slice();
              newFileList.splice(index, 1);
              return {
                fileList: newFileList,
              };
            });
          },
          beforeUpload: file => {
            const filename = file.name;         
          const index1 = filename.lastIndexOf(".");          
          const index2 = filename.length;         
          const str = filename.substring(index1,index2);          
          const isJPG = str === '.txt';          
          if (!isJPG) {
            message.error('请上传txt文件!');
            return false
          }
          const isLt2M = file.size / 1024;
          if (!isLt2M) {
            message.error('文件大小不能超过10MB!');
            return false
          }
            this.setState(state => ({
              fileList: [...state.fileList, file],
            }));
            return false;
          },
          fileList,
        };
        return (
            <Fragment>
                <Row>
                    <Col span={7} >
                        <Upload {...props}>
                            <Button>
                                <Icon type="upload" />上传文件
                            </Button>   
                        </Upload>                           
                    </Col>
                    <Col span={3}>
                        <Button type="primary" disabled={fileList.length === 0}
          loading={uploading}
                                onClick={this.handleUpload}>{uploading ? 'Uploading' : '确定上传'}</Button>
                    </Col>  
                    <Col span={7} style={{width: '100%'}}></Col>
                    <Col span={7}>
                        <Form.Item label="序列号始" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        
                            <Input onChange={this.handleChangeParam('startSn')} placeholder="请输入序列号始" maxLength={15}  style={{width: '100%'}}/>
                        </Form.Item>
                    </Col>
                    <Col span={7}>
                        <Form.Item label="序列号末" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        
                            <Input maxLength={15} onChange={this.handleChangeParam('endSn')} placeholder="请输入序列号末" style={{width: '100%'}}/>
                        </Form.Item>
                    </Col>
                    <Col span={7}>
                        <Form.Item label="政策类型" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                            <Select onChange={this.handleChangeParam('policyId')}  style={{width: 230}}
                                    >
                                {policy.map(({policyId, name}, index) => (
                                    <Option  id="select" key={index} value={policyId}>{name}</Option>))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Button type="primary" loading={modalLoading} style={{position: 'absolute', right: 89, top: 40}}
                                onClick={this.searchData1}>查询</Button>
                        <Button type="primary" loading={modalLoading} style={{position: 'absolute', right: 0, top: 40}}
                                onClick={this.sureData}>确定入库</Button>
                        
                    </Col>                   
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 2000}} size="middle" style={{marginTop: 20}}/>
            </Fragment>
        );
    }
}

