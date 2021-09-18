import React,{useEffect} from 'react'
import  {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink } from './styles'


const Sidebar = ({isOpen,toggle}) => {

	
	return (
		<>
			<SidebarContainer isOpen={isOpen} >
				<Icon >
					<CloseIcon onClick={toggle} />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu >
						<SidebarLink to='about' offset={-150} 
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						activeClass='active'
						onClick={toggle} >About</SidebarLink>
						<SidebarLink to='services'
						offset={-150} 
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						activeClass='active'
						onClick={toggle}>Services</SidebarLink>
						<SidebarLink to='gallery'
						offset={-150} 
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						activeClass='active'
						onClick={toggle}>Gallery</SidebarLink>
						<SidebarLink to='contact'
						offset={-30} 
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						activeClass='active'
						onClick={toggle}>Contact</SidebarLink>
					</SidebarMenu>

				</SidebarWrapper>
			</SidebarContainer>
		</>
	)
}

export default Sidebar
