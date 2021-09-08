import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import{Link as LinkS} from 'react-scroll'


export const SidebarContainer = styled.aside`
	position:fixed;
	z-index:999;
	width:100%;
	height:100%;
	background:#6eafc9;
	display:grid;
	align-items: center;
	top:0;
	left:0;
	transition:0.3s ease-in-out;
	 opacity:${({isOpen}) => (isOpen ? '100%' : '0')};
	top:${({isOpen}) => (isOpen ? '0' : '-100%')}; 
	
`;


export const CloseIcon = styled(FaTimes)`
	color:#494745;

`;

export const Icon = styled.div`
	position:absolute;
	top:1.2rem;
	right:1.5rem;
	background:transparent;
	font-size: 2rem;
	cursor: pointer;
	outline:none;
`;

export const SidebarWrapper = styled.div`
		color:#494745;
;

`;

export const SidebarMenu = styled.ul`

	display: grid;
	grid-template-columns:1fr;
	grid-template-rows: repeat(6,100px);
	text-align:center;
	margin-top:7rem;
	@media screen and (max-width:480px){
		
		grid-template-rows: repeat(6,60px);
	}
`;

export const SidebarLink = styled(LinkS)`
	display:flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	text-transform: uppercase;
	list-style:none;
	transition:0.2s ease-in-out;
	text-decoration:none;
	color:#494745;
	cursor: pointer;

	&:hover {
		color:#fff;
		transform: scale(1.25);
		transition:0.2s ease-in-out;
	}
`;

