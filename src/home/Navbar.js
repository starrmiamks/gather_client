import React, { useState } from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Search from '../components/Search'
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

const Sitebar = (props) => {
    return (
        <div>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">Gather</NavbarBrand>
                <NavbarBrand href="/search">Search</NavbarBrand>

            </Navbar>
            <Switch>
                <Route exact path="/search"><Search /></Route>
            </Switch>
        </div>
    )
}

export default Sitebar;