import React,{useRef,useEffect} from 'react'

import campImg2 from './img2.jpg'
import campImg3 from './img3.jpg'
import campImg4 from './img4.jpg'
import './styles.scss'
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { TimelineLite,Power2 } from 'gsap';

const About = () => {
	let imageContainer = useRef(null)
	let campImage= useRef(null)
	let imageReveal = CSSRulePlugin.getRule('.img-container:after')


	const tl = new TimelineLite() 
	useEffect(() => {
		tl.to(imageContainer, 1,{css:{visibility:'visible'}})
		.to(imageReveal,1.4,{width:"0%",ease:Power2.easeInOut}).from(campImage,1.4,{scale:1.6,ease:Power2.easeInOut,delay:-1.6})
	})
	return (
    <div className="container">
		
      <div id='about' className=" about-section " >
        {/* <div className='section-header'> 
        <h1> about us </h1>
				</div> */}
        <p>
          {" "}
          He has been heir apparent as well as Duke of Cornwall and Duke of
          Rothesay since 1952, and is he same time. Fundamentally, it reflects a combination of intent and the nature of activities involved.
        </p>
      </div>
      <div ref={el => imageContainer = el}  className="image">
        <div className="img-container">
          <img
		  ref={el => campImage = el} src={campImg3} />
        </div>
        <div className="img-container">
          <img
		  ref={el => campImage = el} src={campImg4} />
        </div>
        <div className="img-container">
          <img
		  ref={el => campImage = el} src={campImg2} />
        </div>
      
        
      </div>
      
      
    </div>
  );
}

export default About;
