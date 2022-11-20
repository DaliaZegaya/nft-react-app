import "./Header.css";
import React from "react";
import { Container } from 'reactstrap'
import { NavLink, Link } from "react-router-dom";
import { useUserAuth } from '../../../contexts/userAuth.context'
import { useState } from 'react';

import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';



const NAV_LINKS = [
  {
    pageName: "Home",
    url: '/home'
  },
  {
    pageName: "Market",
    url: '/market'
  },
  {
    pageName: "Create",
    url: '/create'
  },
  {
    pageName: "Contact",
    url: '/contact'
  }

]




export default function App() {
  const [showNavText, setShowNavText] = useState(false);
  const {logOut} = useUserAuth()

  const handleLogOut = () => {
    return logOut()
  }

  return (
    <header className="header">
      <MDBNavbar expand='lg' dark className="mobileMenu nav_item" >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <div className="logo">
              <h2 className="d-flex gap-2 align-item-center">
                <span><i className="ri-fire-fill"></i></span>
                NFT's
              </h2>
            </div>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavText(!showNavText)}
          >
            <i class="ri-menu-line"></i>
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavText}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              {
                NAV_LINKS.map((item, index) => (
                  <MDBNavbarItem>
                    <Link to={item.url}>
                      <MDBNavbarLink active aria-current='page'>
                        {item.pageName}
                      </MDBNavbarLink>
                    </Link>
                  </MDBNavbarItem>
                ))
              }
            </MDBNavbarNav>
            <span><i className="ri-user-line text-light"></i></span>
            <Link to="login" onClick={handleLogOut}>
              LOGOUT
            </Link>        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>

  );
}

