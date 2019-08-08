
import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import ChatUI from './src/components/ChatUI';
import LoginUI from './src/components/LoginUI';
import rootReducer from './src/reducers';
import { fetchMessages, checkUserExists } from './src/actions';


const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
    )
);


const LoginOrChat = connect(
    (state) => ({
        authorized: state.user.authorized
    })
)(({ authorized, dispatch }) => {
    if (authorized) {
        return (<ChatUI />);
    }else{
        dispatch(checkUserExists());
        return (<LoginUI />);
    }
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
               <LoginOrChat />
            </Provider>
        );
    }
}

export default App;
