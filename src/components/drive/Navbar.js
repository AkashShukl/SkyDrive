import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarComp() {
    return (
        <Navbar bg='light' expanded='sm'>
            <Navbar.Brand as={Link} to='/'>JunkBox</Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to='/user'>
                    Profile
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
