import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import {AgentManagement, TerminalManagement, IncomeStatistics} from '../views/statistical';

export default class extends Component<any, any> {
    public render() {
        const {match} = this.props as any;
        return (
            <div>
                <Switch>
                    <Route path={`${match.url}/agentManagement`}
                           component={(props) => <AgentManagement {...props} />}></Route>
                    <Route path={`${match.url}/terminalManagement`}
                           component={(props) => <TerminalManagement {...props} />}></Route>
                    <Route path={`${match.url}/incomeStatistics`}
                           component={(props) => <IncomeStatistics {...props} />}></Route>
                </Switch>
            </div>
        );
    }
}