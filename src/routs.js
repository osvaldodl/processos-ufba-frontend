import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './history'
import Login from './pages/Login'
import Main from './pages/Main'
import Cadastro from './pages/Cadastro'
import Recupera from './pages/Recupera'
import Reset from './pages/Recupera/Reset'
import NovoProcesso from './pages/NovoRequerimento'

const Routs = () => {
    return (
        <Router history={history} >
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/home' component={Main} />
                <Route path='/cadastro' component={Cadastro} />
                <Route path='/novorequerimento' component={NovoProcesso} />
                <Route path='/recupera' component={Recupera} />
                <Route path='/reset/:hash' component={Reset} />
            </Switch>
        </Router>
    )
}

export default Routs