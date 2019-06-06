import {Component} from 'react';
import {Breadcrumb} from 'antd';
import menuInfo from '../../stores/menuInfo';
import {observer} from 'mobx-react';
import './style';

@observer
export default class BreadCrumb extends Component {

    public render() {
        const {menuNameArray} = menuInfo;
        return (
            <Breadcrumb style={{margin: '16px 0'}}>
                {menuNameArray.map(item => (<Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>))}
            </Breadcrumb>
        );
    }

}