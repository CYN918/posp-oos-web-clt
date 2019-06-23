import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import {
    AppManagement,
    
} from '../views/systemManagement';

export default class extends Component<any, any> {
    public render() {
        const {match} = this.props as any;
        return (
            <div>
                <Switch>
                    <Route path={`${match.url}/appManagement`}
                           component={(props) => <AppManagement {...props} />}></Route>
          
                </Switch>
            </div>
        );
    }
}