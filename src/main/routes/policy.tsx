import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import {PolicyManagement, ActivateCashback, ActivityCashBack, VipcashBack, CouPon} from '../views/policy';

export default class extends Component<any, any> {
    public render() {
        const {match} = this.props as any;
        return (
            <div>
                <Switch>
                    <Route path={`${match.url}/policyManagement`}
                           component={(props) => <PolicyManagement {...props} />}></Route>
                    <Route path={`${match.url}/activateCashback`}
                           component={(props) => <ActivateCashback {...props} />}></Route>
                    <Route path={`${match.url}/activityCashBack`}
                           component={(props) => <ActivityCashBack {...props} />}></Route>
                    <Route path={`${match.url}/vipcashBack`} component={(props) => <VipcashBack {...props} />}></Route>
                    <Route path={`${match.url}/couPon`} component={(props) => <CouPon {...props} />}
                    ></Route>
                </Switch>
            </div>
        );
    }
}