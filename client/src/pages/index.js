import React from 'react';
import {Route} from 'react-router-dom';
import Main from './Main';
import List from './List';
import Detail from './Detail';
import Pay from './Pay';
import Room from './Room';
import Login from './Login';

export default (props) => (
    <>
        <Route exact path = "/" component = {Main}/>
        <Route path = "/list" component = {List}/>
        <Route path = "/detail" component = {Detail}/>
        <Route path = "/pay" component = {Pay}/>
        <Route path = "/room" component = {Room}/>
        <Route path = "/login" component = {Login}/>
    </>
);