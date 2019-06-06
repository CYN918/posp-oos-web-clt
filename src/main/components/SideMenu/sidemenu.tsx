import {Component} from 'react';
import {Menu, Icon} from 'antd';
import menuInfo, {menuList} from '../../stores/menuInfo';
import {observer} from 'mobx-react';
import './style';

const SubMenu = Menu.SubMenu;

@observer
export default class SideMenu extends Component {
    public handleClick = e => {
        menuInfo.setActiveMenu(e.keyPath.reverse().join('/'));
        console.log('click ', e);
    }

    public render() {
        const selectedKeys = menuInfo.activeMenu.split('/')[1];
        return (
            <Menu
                onClick={this.handleClick}
                mode="inline"
                selectedKeys={[selectedKeys]}
                defaultOpenKeys={['terminal']}
                style={{height: '100%', borderRight: 0, overflowY: 'auto'}}
            >
                {
                    menuList.map((item) => {
                        const {key, name, icon, children} = item;
                        return (
                            <SubMenu key={key} title={<span><Icon type={icon}/>{name}</span>}>
                                {children.map((ele) => (<Menu.Item key={ele.key}>{ele.name}</Menu.Item>))}
                            </SubMenu>
                        );
                    })
                }
            </Menu>
        );
    }

}