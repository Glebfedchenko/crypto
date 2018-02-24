import React from 'react';
import Coins from './Coins';
import {Provider} from 'react-redux';
import store from '../store/store';

const App = () =>
    <Provider store={store}>
        <Coins/>
    </Provider>
export default App