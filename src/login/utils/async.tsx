import {Component} from 'react';

export const asyncComponent = (importComponent) => {
    return class extends Component<any, any> {
        public state = {
            component: null,
        };

        public componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        public render() {
            const C = this.state.component as any;
            return C ? <C {...this.props} /> : null;
        }
    };
};
