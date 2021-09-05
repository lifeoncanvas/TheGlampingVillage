import React from 'react';
import './styles.scss';
import t1 from '../../Images/t1.jpg';
import { MdPlayCircleFilled } from "react-icons/md";
import { Link } from 'react-router-dom';


const Hero = () => {
	return (
		
		<div className='bg-image' >
			 
			<div className='overlay'>
			<div className='info'>
				<h1>Make The Most Of It</h1>
				{/* <p>Whether you are staying at home with family or spending time with friends this upcoming holiday</p>
				 */}
					
					<Link className='button'  >  <MdPlayCircleFilled /> </Link>
				
				
			</div>
			</div>

			
		</div>
	)
}

export default Hero;
