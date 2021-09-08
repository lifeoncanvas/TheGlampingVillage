import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
	background: ${({ scrollNav}) => (scrollNav ? 'rgba(	110	175	201 )' : 'transparent')};
	height:80px;
	border-radius: 0px 0px 20px 20px;
	margin-top:-80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position:sticky;
	top:0;
	z-index:10;

	@media screen and (max-width:960px) {
		transition: 0.8s all ease;

	}
`;

export const NavContainer = styled.div`
	display:flex;
	justify-content: space-between;
	height: 80px;
	width:100%;
	padding:0 24px;
	max-width: 1280px;
`; 


export const NavLogo = styled(LinkR)`
	color:#494745;
	justify-content: flex-start;
	cursor: pointer;
	font-size:1,5rem;
	display:flex;
	align-items:center;
	margin-left:24px;
	font-weight: bold;
	text-decoration:none;

`;


export const MobileIcon = styled.div`
	
	display: block;
	position:absolute;
	right: 0;
	top: 0;
	transform: translate(-100%,60%);
	font-size: 1.8rem;
	cursor:pointer;
	color:#494745;


`;

export const NavMenu = styled.ul`
	display:flex;
	align-items: center;
	list-style:none;
	text-align:center;
	margin-right: -22px;

	@media screen and (max-width:768px){
		display:none;
	}

`;


export const NavItem = styled.li`
	height:80px;

`;

export const NavLinks = styled(LinkS)`
	color:#494745;
	display:flex;
	align-items:center;
	text-decoration:none;
	padding:0 1rem;
	height:100%;
	cursor:pointer;


`;