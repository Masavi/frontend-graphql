import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import { Link } from 'react-router-dom';

  import payload from '../../payload';
  import isAuthenticated from '../../isAuthenticated';

export default class NavbarComponent extends React.Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      authenticated: localStorage.getItem('appToken') !== null,
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  authenticatedRender = () => {
    if(isAuthenticated()){
      return(
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={`/users/${payload()._id}`}>
              Bienvenido {payload().email}
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='/create-post'>
              Nuevo Post
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='/logout'>
              Cerrar Sesion
            </a>
          </li>
        </ul>
      )
    } else {
      return(      
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href='/login'>
              Inicia Sesion
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='/signup'>
              Registrate
            </a>
          </li>
      </ul>
     )
    }
  }

  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: '#f1f1f1'}} light expand="md">
          <NavbarBrand href="/">My app</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <div>
                {
                  this.authenticatedRender()
                }
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}