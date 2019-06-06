import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import {DeductibleRecord, FactoringManagement, RechargeRecord, RepaymentRecord} from '../views/factoring';

export default class extends Component<any, any> {
    public render() {
        const {match} = this.props as any;
        return (
            <div>
                <Switch>
                    <Route path={`${match.url}/deductibleRecord`}
                           component={(props) => <DeductibleRecord {...props} />}></Route>
                    <Route path={`${match.url}/factoringManagement`}
                           component={(props) => <FactoringManagement {...props} />}></Route>
                    <Route path={`${match.url}/rechargeRecord`}
                           component={(props) => <RechargeRecord {...props} />}></Route>
                    <Route path={`${match.url}/repaymentRecord`}
                           component={(props) => <RepaymentRecord {...props} />}></Route>
                </Switch>
            </div>
        );
    }
}