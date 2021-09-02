import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';

import Homepage from '../src/pages/homepage'
import Hero from './components/Hero';
import Header from './components/Navbar/Header';

import Services from './components/Services';

const Routes = () => {
	return (
		<BrowserRouter>
			<Header/>
		<Switch>
			

		   	{/* <Route path="/contact" component={Contact} />
			<Route path="/services" component={Services} />
			
			<Route path="/about" component={About} /> */}
			<Route path="/" component={Homepage} />
			
		</Switch>

	</BrowserRouter>
	)
}

export default Routes;

