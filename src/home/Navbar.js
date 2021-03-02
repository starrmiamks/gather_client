import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
    NavLink
} from 'reactstrap';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Search from '../components/Search';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Favorites from '../components/Favorites';



const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen)
    }
    return (
        <div>
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">GATHER</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/about/">What is Gather?</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/register/">Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login/">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/search/">Search</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/favorites/">Favorites</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button onClick={props.clickLogout}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login"><Login /></Route>
                    <Route exact path="/register"><Register /></Route>
                    <Route exact path="/search"><Search /></Route>
                    <Route exact path="/favorites"><Favorites /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Sitebar;