import React from 'react'
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Services from '../components/Services';


const Homepage = () => {
	return (
		<div>
			
			<Hero/>
			
			<Services/>
			<About/>
			<Contact/>
		</div>
	)
}

export default Homepage;
