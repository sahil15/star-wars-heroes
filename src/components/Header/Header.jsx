import React,{useState} from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Header() {

    const [envName, ] = useState("STAR WAR HEROES");    

    return (
        <Navbar className="navbar navbar-top navbar-dark bg-gradient-info" expand="md">
          <NavbarBrand className="text-white">{envName}</NavbarBrand>
        </Navbar>
    );
}

export default Header;