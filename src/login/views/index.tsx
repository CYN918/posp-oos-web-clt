import {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox, message} from 'antd';

export class Index extends Component {

	public state: any = {              
        uname: "",
        pwd: "", 
        currentItem: {},          
    };


    public handleSubmit = async () => {
        console.log(this.state.currentItem)
	    if(this.state.currentItem.uname == "admin" && this.state.currentItem.pwd == "123456") { 
	        message.success("登录成功")
        }else { 
            message.error("登录名或密码错误！")
            return false; 
        }
	};

	public handleChangeParam = (key) => (e) => {
	    const currentItem = Object.assign({}, this.state.currentItem);
        console.log(`change value ${key}:${e.target.value}`);
        currentItem[key] = e.target.value;
        this.setState({currentItem});
    }


    public render() {
        const {currentItem = {}} = this.state;
        const {uname = '', pwd = ''} = currentItem;
        return (
            <div  style={{width: 300, height: 272, textAlign: 'center', position: 'absolute', left: '50%', top: '50%', marginTop: -136, marginLeft: -150}}>
            <Form className="login-form">
                <Form.Item labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
		              placeholder="用户名" style={{width: 300}} value={uname} onChange={this.handleChangeParam('uname')}/>                      
                </Form.Item>

                <Form.Item labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}
		              type="password"
		              placeholder="密码" style={{width: 300}} value={pwd} onChange={this.handleChangeParam('pwd')}/>
                </Form.Item>
		        <Form.Item>
		          <Checkbox>记住密码</Checkbox>
		          <a className="login-form-forgot" href="">
		            忘记密码
		          </a><br/>
		          <Button type="primary" onClick={this.handleSubmit} htmlType="submit" className="login-form-button">
		            登录
		          </Button><br/>
		          Or <a href="">register now!</a>
		        </Form.Item>
		    </Form>
		    </div>
        );
    }
}
