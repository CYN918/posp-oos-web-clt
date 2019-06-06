import {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {IAppProps} from './prototype';
import {Index} from './views/index';

export class App extends Component<IAppProps, any> {
    public render() {
        const {routes} = this.props;
        return (
            <Switch>
                {
                    routes.map((route, index) => {
                        const {path, exact, component} = route;
                        return (
                            <Route key={index} path={path} exact={exact}
                                   render={(routeProps) => component(routeProps)}/>
                        );
                    })
                }
                <Route component={Index}/>
            </Switch>
        );
    }
}
