import React from 'react'
import { RiInstagramFill } from 'react-icons';
import { Link } from 'react-router-dom';
import { RiInstagramLine ,RiWhatsappLine,RiMapPin2Line} from "react-icons/ri";

import './styles.scss'

const Contact = () => {
	return (
		<div className='container'>
			<div className=' contact'>
				
			<div className='contact-header'>
				<h1>Get in touch with us</h1>
				<p>Charles, Prince of Wales, is the heir apparent to the British throne as the eldest son of Queen Elizabeth II. He has been heir apparent as well as Duke of Cornwall and Duke of Rothesay since 1952, and is both the oldest and the longest-serving heir apparent in British history</p>
			
			<form className='email-form'>
			
			<input type="email" id="email" name="email" placeholder="Enter your email" />
			<button type='submit'>Send</button>
			
			</form>
			<div className='social-links'>
			<Link className='social-link' ><RiInstagramLine/></Link>
			<Link className='social-link' ><RiWhatsappLine/></Link>
			<Link className='social-link' ><RiMapPin2Line/></Link>
			</div>
			</div>
			</div>
			
		</div>
	)
}

export default Contact;
