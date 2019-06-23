import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, Modal, message, Select, Spin} from 'antd';
import indexService from '../../services/agencySerivce';

const Option = Select.Option;


export class AdManagement extends Component {

    public searchParam: any = {
        currentPage: 1,
        pageSize: 10,
    };

    public state: any = {
        visible: false,
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
        
    }

    public addModal = () => {
        this.setState({
            visible: true,
        });
    };
    
    
    //添加消息
    public addMessage = async () => {
        const data = this.state.currentItem;
        if(JSON.stringify(data) == '{}'){
            message.info('提交不能为空');
            return false
        }
        this.setState({tableLoading: true});
        this.setState({modalLoading: true});        
        const {HEAD, BODY} = await indexService.MSG_001(this.state.currentItem);
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
    }
    
   
    
    //查询消息列表
    public searchData = async () => {
        this.setState({tableLoading: true});
        const {HEAD, BODY} = await indexService.MSG_002(this.searchParam);
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

    public handleChangeParam = (key) => (e) => {
        const currentItem = Object.assign({}, this.state.currentItem);
        switch (key) {
            case 'type':
                console.log(`change value ${key}:${e}`);
                currentItem[key] = 1;
                this.setState({currentItem});
                break;
            case 'toTarget':
                console.log(`change value ${key}:${e}`);
                currentItem[key] = e;
                this.setState({currentItem});
                break;
            case 'popup':
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

    public handleCancelA = e => {
        this.setState({
            visible: false,
        });
        this.searchData();
    };

    public handleTableChange = (pagination) => {
        this.searchParam.currentPage = pagination.current;
        this.setState({pagination}, () => {
            this.searchData();
        });
    }
    

    public render() {
        const {header, items, tableLoading, pagination} = this.state;
        return (
            <Fragment>
                <Row>                    
                    <Col span={8}>
                        <Button type="primary" style={{marginTop: 4, position: 'absolute', left: 0}}
                                onClick={this.addModal}>添加</Button>
                    </Col>
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 500}} size="middle" style={{position: 'relative', top: 40}}/>
                {this.renderaddModal()}
            </Fragment>
        );
    }

    public renderaddModal() {
        const {visible, modalLoading, policyLoading, currentItem = {}, btnDisabled} = this.state;
        const {record = '', content = '', title = '', type = '', toTarget = '', popup = ''} = currentItem;
        return (
            <Modal
              title="新增消息"
              visible={visible}
              onOk={this.handleOkA}
              onCancel={this.handleCancelA}
              width={1000}
              footer={[
                <Button key="back" onClick={this.handleCancelA}>取消</Button>,
                <Button key="submit" type="primary" loading={modalLoading}
                        onClick={this.addMessage}>确定添加</Button>,
              ]}
            >
              <Spin tip="加载中..." spinning={policyLoading}>
                <Form.Item label="类型" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Select style={{ width: 300 }} onChange={this.handleChangeParam('type')}>
                        <Option value="1">公告</Option>
                        <Option value="2">推送消息</Option>
                    </Select>                       
                </Form.Item>

                <Form.Item label="用户类型" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Select style={{ width: 300 }} onChange={this.handleChangeParam('toTarget')}>
                        <Option value="1">商户</Option>
                        <Option value="2">代理商</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="标题" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={title} onChange={this.handleChangeParam('title')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="内容" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={content} onChange={this.handleChangeParam('content')} style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="描述" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={record} onChange={this.handleChangeParam('record')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="状态" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Select style={{ width: 300 }} onChange={this.handleChangeParam('popup')}>
                        <Option value="1">开始弹窗</Option>
                        <Option value="10">关闭弹窗</Option>
                    </Select>
                </Form.Item>

            </Spin>
        </Modal>
        )
    }


}

