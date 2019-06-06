import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import {BankCardManagement, MerchantManagement} from '../views/merchant';

export default class extends Component<any, any> {
    public render() {
        const {match} = this.props as any;
        return (
            <div>
                <Switch>
                    <Route path={`${match.url}/bankCardManagement`}
                           component={(props) => <BankCardManagement {...props} />}></Route>
                    <Route path={`${match.url}/merchantManagement`}
                           component={(props) => <MerchantManagement {...props} />}></Route>
                </Switch>
            </div>
        );
    }
}