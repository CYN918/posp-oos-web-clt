import './styles/index.less';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {App} from './App';
import {routes} from './routes';

ReactDOM.render(
    <HashRouter>
        <App routes={routes()}/>
    </HashRouter>,
    document.getElementById('app'),
);
