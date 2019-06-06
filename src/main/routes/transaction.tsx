import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import {
    CreditCardTransaction,
    VIPTransactionRecord,
    RepaymentOrder,
    SeparateRecord,
    CashBackRecord,
    WithdrawalsRecord
} from '../views/transaction';

export default class extends Component<any, any> {
    public render() {
        const {match} = this.props as any;
        return (
            <div>
                <Switch>
                    <Route path={`${match.url}/creditCardTransaction`}
                           component={(props) => <CreditCardTransaction {...props} />}></Route>
                    <Route path={`${match.url}/VIPTransactionRecord`}
                           component={(props) => <VIPTransactionRecord {...props} />}></Route>
                    <Route path={`${match.url}/repaymentOrder`}
                           component={(props) => <RepaymentOrder {...props} />}></Route>
                    <Route path={`${match.url}/separateRecord`}
                           component={(props) => <SeparateRecord {...props} />}></Route>
                    <Route path={`${match.url}/cashBackRecord`}
                           component={(props) => <CashBackRecord {...props} />}></Route>
                    <Route path={`${match.url}/withdrawalsRecord`}
                           component={(props) => <WithdrawalsRecord {...props} />}></Route>
                </Switch>
            </div>
        );
    }
}