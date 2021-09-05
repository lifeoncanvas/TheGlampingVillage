import React from 'react'
import About from '../components/About';
import Contact from '../components/Contact';

import Hero from '../components/Hero';
import { ServiceObjOne, ServiceObjOne2, ServiceObjOne3 } from '../components/Info/data';
import Info from '../components/Info/info';

import Services from '../components/Services';



const Homepage = () => {
	return (
		<div>
			
			<Hero/>
			<About/>
			<Services />
			<Info {...ServiceObjOne}/>
			
			
			<Info {...ServiceObjOne2}/>
			<Info {...ServiceObjOne3}/>
			
			<Contact/>
		</div>
	)
}

export default Homepage;
