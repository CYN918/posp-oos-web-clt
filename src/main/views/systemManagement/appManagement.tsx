import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, message, Select, Modal, Spin} from 'antd';
import indexService from '../../services/transactionService';

const Option = Select.Option;
export class AppManagement extends Component {

    public searchParam: any = {
        currentPage: 1,
        pageSize: 10,
    };

    public state: any = {
        header: [],
        items: [],
        visible: false,
        modalLoading: false,
        btnDisabled: false,
        tableLoading: false,
        pagination: {
            total: 0,
            current: 0,
            pageSize: this.searchParam.size,
        },
        currentItem: {},
    };
    public addSure = () => {
        this.setState({
          visible: true,
        });
    };

    public handleCancel = e => {
        this.setState({
          visible: false,
        });
    };

    public componentDidMount() {
        this.searchData();
    }

    public searchData = async () => {
        this.setState({tableLoading: true});
        const {HEAD, BODY} = await indexService.SYS_006(this.searchParam);
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

    public handleOk = async () => {
        this.setState({modalLoading: true});
        const {HEAD, BODY} = await indexService.SYS_005(this.state.currentItem);
        const {MSG, CODE} = HEAD;
        if (CODE === '000') {
            message.success('添加成功');
            this.setState({
              visible: false,
            });
            this.searchData();  
            this.setState({modalLoading: false});        
        } else {
            message.error(MSG);
        }
    };

    public handleChangeParam = (key) => (e) => {
        const currentItem = Object.assign({}, this.state.currentItem);
        switch (key) {           
            case 'isForced':
                console.log(`change value ${key}:${e}`);
                currentItem[key] = e;
                this.setState({currentItem});
                break;
            case 'versionType':
                console.log(`change value ${key}:${e}`);
                currentItem[key] = e;
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
                            <Input placeholder="请输入名称" onChange={this.handleChange('agentName')}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', right: 0}}
                                onClick={this.searchData}>查询</Button>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', right: 80}}
                                onClick={this.addSure}>添加</Button>
                    </Col>
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 2000}} size="middle"/>
                {this.renderaddModal()}
            </Fragment>
        );
    }

    public renderaddModal() {
        const {visible, header, modalLoading, items, tableLoading, pagination, policy, policyLoading, btnLoading, currentItem = {}} = this.state;
        const {versionNum = '', url = '', record = '', intVersionNum = ''} = currentItem;
        return (
        <Modal
              title="新增版本"
              visible={visible}
              onOk={this.handleOk}
              destroyOnClose={true}
              onCancel={this.handleCancel}
              width={1000}
              footer={[
                <Button key="back" onClick={this.handleCancel}>取消</Button>,
                <Button key="submit" type="primary" loading={modalLoading}
                        onClick={this.handleOk}>确定添加</Button>,
              ]}
            >
              
                
                <Form.Item label="版本号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={versionNum} onChange={this.handleChangeParam('versionNum')}
                           style={{width: 300}}/>
                </Form.Item>
                <Form.Item label="更新地址" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={url} onChange={this.handleChangeParam('url')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="是否强制更新" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Select style={{width: 300}} onChange={this.handleChangeParam('isForced')}>    
                        <Option value="1">强制更新</Option>
                        <Option value="10">不强制更新</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="描述" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={record} onChange={this.handleChangeParam('record')} style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="内部版本号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={intVersionNum} onChange={this.handleChangeParam('intVersionNum')} style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="类型" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Select style={{width: 300}} onChange={this.handleChangeParam('versionType')}>    
                        <Option value="1">ios</Option>
                        <Option value="2">安卓</Option>
                    </Select>
                </Form.Item>

            
            </Modal>
            
        );
    }
}
