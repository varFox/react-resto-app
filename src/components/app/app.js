import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Background from './food-bg.jpg';

const App = ({RestoService}) => {
	console.log(RestoService.getMenuItems());
	return (
		<Router>
			<div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
				<AppHeader total={50}/>
				<Switch>
				<Route exact path='/' component={MainPage}/>
					<Route path='/menu' component={MainPage}/>
					<Route path='/total' component={CartPage}/>
				</Switch>
			</div> 
		</Router>
	)
}

export default WithRestoService()(App);