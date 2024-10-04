import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../Assets/logo.webp'
import cart_icon from '../../Assets/shopping-cart.png'
// import { ShopContext } from '../../Context/ShopContext'
// import nav_dropdown from '../../Assets/nav_dropdown.png'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const [menu,setMenu]=useState("shop")
  // const {getTotalCartItems} =useContext(ShopContext)
  const menuRef =useRef()
  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }
  return (
    <div className='navbarContainer d-flex justify-content-around'>
      <div className="nav-logo">
        <img src={logo} alt="this is logo" style={{height: '10rem', width: '9rem'}} className='px-2'/>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='mx-2 px-2'>Home</Nav.Link>
            <Nav.Link href="#link" className='mx-2 px-2'>About</Nav.Link>
            <Nav.Link href="#link" className='mx-2 px-2'>Contact</Nav.Link>
            {/* <NavDropdown title="Shop" id="basic-nav-dropdown" className='mx-2 px-2'>
              <NavDropdown.Item href="/marketplace/handwoven">Handwoven Textiles</NavDropdown.Item>
              <NavDropdown.Item href="/marketplace/handicrafts">Handicrafts</NavDropdown.Item>
              <NavDropdown.Item href="/marketplace/jewellery">Jewellery</NavDropdown.Item>
              <NavDropdown.Item href="/marketplace/paintings">Paintings</NavDropdown.Item>
              <NavDropdown.Item href="/marketplace/beautyproducts">Skin care</NavDropdown.Item>
              <NavDropdown.Item href="/marketplace/spices">Spices</NavDropdown.Item>
              <NavDropdown.Item href="/marketplace/decor">Home Decor</NavDropdown.Item>
              <NavDropdown.Item href="/marketplace/pooja">Pooja Essentials</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/marketplace">All</NavDropdown.Item>

            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="nav-login-cart d-flex align-items-center justify-content-end">
        
        <NavDropdown title={<img src='assets/svg/profile.svg' style={{height: '30px'}}/> } id="basic-nav-dropdown" className='mx-2 px-2'>
              <NavDropdown.Item href="/marketplace/handwoven">
                {localStorage.getItem('auth-token')?
                <button className='btn' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
                <Link to='/login'><button className='btn'>Login</button></Link>}
              </NavDropdown.Item>
        </NavDropdown>

        <Link to='/cart'><img src={cart_icon} alt="this is cart" style={{height: '2rem'}} className='ms-3'/></Link>
         
       {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
      </div>
    </div>
  )
}

export default Header