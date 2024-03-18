import React, { useState } from 'react'
import './Header.css'
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle,Nav, NavItem, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown } from 'reactstrap'
import Logo from '../../assets/images/logo/PicsPortLogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
    const navToggle = () => {
        setIsNavOpen(!isNavOpen);
    }
  return (
    <div>
      <Navbar 
        className='nav' expand='sm'>
        <NavbarBrand href='/' className='mr-auto ml-md-5 Brand'>
            <img className='logo' src={Logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={navToggle}/>
        <Collapse isOpen={isNavOpen} className=''navbar>
        <Nav className='links NavItems' navbar>
            <NavItem ><Link className='nav-link' to='/home' >Home</Link></NavItem>
            <NavItem ><Link className='nav-link' to='/about' >About</Link></NavItem>
            <NavItem ><Link className='nav-link' to='/gallery' >Gallery</Link></NavItem>
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Category
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Animal</DropdownItem>
                <DropdownItem>Anime</DropdownItem>
                <DropdownItem>Background</DropdownItem>
                <DropdownItem>People</DropdownItem>
                <DropdownItem>Land Scape</DropdownItem>
                <DropdownItem>Space</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
            <NavItem ><Link className='nav-link' to='/login' >Log in</Link></NavItem>    
        </Nav>       
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header