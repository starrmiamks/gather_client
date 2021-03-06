import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

import {
    BrowserRouter,
    Route,
    Switch, 
    Link
} from 'react-router-dom';
import Search from '../components/Search';
import Gather from '../components/Gather';
import Favorites from '../components/Favorites';

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen)
    }
    return (
        <BrowserRouter>
        <div>
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand>
                        <Link to="/gather/" className="GatherLink">GATHER</Link></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav color= "gray" className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/search/">Search</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/favorites/">Favorites</Link>
                            </NavItem>
                            <NavItem>
                                <Link onClick={props.clickLogout}>Logout</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
                <Switch>
                    <Route exact path="/gather"><Gather/></Route>
                    <Route exact path="/search"><Search /></Route>
                    <Route exact path="/favorites"><Favorites /></Route>
                </Switch>
        </div>
            </BrowserRouter>
    );
};

export default Sitebar;