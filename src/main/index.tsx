import './styles/index.less';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {App} from './App';
import {routes} from './routes';
import SideMenu from './components/SideMenu';
import BreadCrumb from './components/BreadCrumb';
import {Layout} from 'antd';

const {Header, Sider, Content} = Layout;


ReactDOM.render(
    <HashRouter>

        <Layout className="layout-container">
            <Header className="header">
                <div className="logo"/>

            </Header>
            <Layout>
                <Sider width={200} style={{background: '#fff'}}>
                    <SideMenu/>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <BreadCrumb/>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            overflowX: 'hidden',
                            overflowY: 'auto',
                        }}
                    >
                        <App routes={routes()}/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </HashRouter>,
    document.getElementById('app'),
);
