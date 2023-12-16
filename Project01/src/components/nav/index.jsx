import React from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

const MyNavbar = () => {

return (

<div>

<Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
          IFCE
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item>
              <Nav.Link href="/user">Cadastro de Tarefas</Nav.Link>
            </Nav.Item>
          </Navbar.Nav>
        </Collapse>
      </Navbar>


</div>


)

}

export default MyNavbar