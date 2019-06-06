import {Component, Fragment} from 'react';
import {Table, Row, Col, Input, Form, Button, Modal, message, Select, Spin, InputNumber} from 'antd';
import indexService from '../../services/terminalService';



export class TransferVendor extends Component {

    public searchParam: any = {
        currentPage: 1,
        pageSize: 10,
    };

    public state: any = {
        header: [],
        modalLoading: false,
        tableLoading: false,
        policyLoading: false,
        visible: false,
        pagination: {
            total: 0,
            current: 0,
            pageSize: this.searchParam.size,
        },
        curItem: {},
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

    public newData = () => {
        this.setState({
          visible: true,
        });
    }

    public handleCancelA = e => {
        console.log(e);
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
    };

    //新增厂商
    public addSure = async () => {
        this.setState({modalLoading: true});
        const {HEAD, BODY} = await indexService.POS_008(this.state.curItem);
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

    public handleChange = (key) => (e) => {
        console.log(`change value ${key}:${e.target.value}`);
        this.searchParam[key] = e.target.value;
    };

    public handleChangeParam = (key) => (e) => {        
        console.log(`change value ${key}:${e.target.value}`);
        curItem[key] = e.target.value;
        this.setState({curItem});               
    };

    public render() {
        const {header, items, tableLoading, pagination} = this.state;
        return (
            <Fragment>
                <Row>                   
                    <Col span={8} labelCol={{span: 6}} wrapperCol={{span: 16}}>
                        <Button type="primary" style={{top: 0, position: 'absolute', left: 0}}
                                onClick={this.newData}>新增</Button>
                    </Col>
                </Row>
                <Table columns={header} onChange={this.handleTableChange} pagination={pagination} loading={tableLoading}
                       dataSource={items} scroll={{x: 2000}} size="middle" style={{position: 'relative', top: 40}}/>
                {this.renderaddModal()}
            </Fragment>
        );
    }

    //新增厂商
    public renderaddModal() {
        const {visible, modalLoading, policyLoading, curItem = {}} = this.state;
        const {factoryNo = '', factoryName = '', posModel = '', posName = ''} = curItem;
        return (
            <Modal
              title="新增厂商"
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
                <Form.Item label="厂商编号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={factoryNo} onChange={this.handleChangeParam('factoryNo')} style={{width: 300}}/>                        
                </Form.Item>

                <Form.Item label="厂商名称" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={factoryName} onChange={this.handleChangeParam('factoryName')} style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="支持终端型号" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={posModel} onChange={this.handleChangeParam('posModel')}
                           style={{width: 300}}/>
                </Form.Item>

                <Form.Item label="终端名称" labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input value={posName} onChange={this.handleChangeParam('posName')} style={{width: 300}}/>
                </Form.Item>


            </Spin>
        </Modal>
        )
    }
}

