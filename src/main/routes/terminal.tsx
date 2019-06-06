import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import {TerminalStorage, TerminalTransfer, TransferRecord, TransferVendor} from '../views/terminal';

export default class extends Component<any, any> {
    public render() {
        const {match} = this.props as any;
        return (
            <div>
                <Switch>
                    <Route path={`${match.url}/terminalStorage`}
                           component={(props) => <TerminalStorage {...props} />}></Route>
                    <Route path={`${match.url}/terminalTransfer`}
                           component={(props) => <TerminalTransfer {...props} />}></Route>
                    <Route path={`${match.url}/transferRecord`}
                           component={(props) => <TransferRecord {...props} />}></Route>
                    <Route path={`${match.url}/transferVendor`}
                           component={(props) => <TransferVendor {...props} />}></Route>
                </Switch>
            </div>
        );
    }
}