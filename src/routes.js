import React,{useState} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';

import Homepage from '../src/pages/homepage'
import Hero from './components/Hero';


import Services from './components/Services';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const Routes = () => {

	const[isOpen,setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Sidebar isOpen={isOpen} toggle={toggle}/>
		{/* { isOpen && 
		<div>
			<p>lorem30</p>
		</div>
		} */}
			<Navbar toggle={toggle}/>
		<Switch>
			

		   	{/* <Route path="/contact" component={Contact} />
			<Route path="/services" component={Services} />*/}
			
			
			<Route path="/" component={Homepage} />
			
		</Switch>

	</BrowserRouter>
	)
}

export default Routes;