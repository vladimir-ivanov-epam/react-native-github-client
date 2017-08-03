import React, {Component} from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import AppWithNavigationState from './containers/AppNavigator';
import { composeWithDevTools } from 'redux-devtools-extension';

class App extends Component {
    store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));
    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
};

export default App;
