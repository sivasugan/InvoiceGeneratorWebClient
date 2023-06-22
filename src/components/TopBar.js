import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { FaSignInAlt, FaFileAlt } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom'

function TopBar() {
  
  const navigate = useNavigate()

    const handleNavigation = (props) => {
      switch (props) {
          case "createinvoiceform":
              // {<Link to= '/merchant'></Link>}
              navigate('/createinvoiceform')
              break
          case "Tenant":
              console.log(props)
      }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className='navbar-InvoiceGenerator'>Invoice Generator</Navbar.Brand>
      <Navbar.Toggle aria-controls="topbar-nav" />
      <Navbar.Collapse id="topbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">
            <FaSignInAlt/> Go to Login
          </Nav.Link>
          <Nav.Link href="/createinvoiceform">
            <FaFileAlt /> Create Invoice
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
