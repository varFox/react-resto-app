import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Background from './food-bg.jpg';
// import {initialState} from './../../reducers'

const App = () => {

	return (
		<Router>
			<div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
				<AppHeader/>
				<Switch>
				<Route exact path='/' component={MainPage}/>
					<Route path='/menu' component={MainPage}/>
					<Route path='/total' component={CartPage}/>
				</Switch>
			</div> 
		</Router>
	)
}

export default App;