import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import {
    BrowserRouter,
    Route,
    Switch, 
    Link
} from 'react-router-dom';
import Search from '../components/Search';
import About from '../components/About';

//import Login from '../auth/Login';
//import Register from '../auth/Register';
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
                    <NavbarBrand href="/">GATHER</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/about/">What is Gather?</Link>
                            </NavItem>
                            {/* <NavItem>
                                <Link to="/register/">Register</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/login/">Login</Link>
                            </NavItem> */}
                            <NavItem>
                                <Link to="/search/">Search</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/favorites/">Favorites</Link>
                            </NavItem>
                            <NavItem>
                                <Button onClick={props.clickLogout}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
                <Switch>
                    {/* <Route exact path="/login"><Login /></Route>
                    <Route exact path="/register"><Register /></Route> */}
                    <Route exact path="/about"><About/></Route>
                    <Route exact path="/search"><Search /></Route>
                    <Route exact path="/favorites"><Favorites /></Route>
                </Switch>
        </div>
            </BrowserRouter>
    );
};

export default Sitebar;