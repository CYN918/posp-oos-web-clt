import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import {AdManagement} from '../views/advertising';

export default class extends Component<any, any> {
    public render() {
        const {match} = this.props as any;
        return (
            <div>
                <Switch>
                    <Route path={`${match.url}/adManagement`}
                           component={(props) => <AdManagement {...props} />}></Route>
                </Switch>
            </div>
        );
    }
}