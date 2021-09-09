import React from 'react'
import styled from 'styled-components'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'

const GallaryContainer = styled.div`
	width: 1230px;
	margin-top: 10rem;
	
	margin-left:auto;
	margin-right: auto;
`;

const Wrapper = styled.div`
	
	display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 20px;

  img{
	  width: 100%;
	  height:100%;
	  object-fit: cover;
  }

  h2{
	 margin-top: 6rem;
	 font-weight: 200;
	 text-align: center;
  }
`;



const Gallary = () => {
	
	return (
		<div>
			<GallaryContainer>
			{/* <h1>He has been heir apparent as well as Duke it</h1> */}
			<Wrapper>
  <div class="one"> <img src={img1} /></div>
  <div class="two"><img src={img2} /></div>
  <div class="three"><img src={img3} /></div>
  <div class="four"><img src={img4} /></div>
  <div class="five"><h2>Giving you time in something fun to bring onto</h2></div>
  <div class="six"><img src={img2} /></div>
  <div class="four"><img src={img3} /></div>
  <div class="five"><img src={img4} /></div>
  <div class="six"><img src={img1} /></div>
			</Wrapper>
			</GallaryContainer>
		</div>
	)
}

export default Gallary

