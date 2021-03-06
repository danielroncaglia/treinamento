import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Repositorios/App';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import * as serviceWorker from './serviceWorker';

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route component={NaoEncontrada}></Route>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
