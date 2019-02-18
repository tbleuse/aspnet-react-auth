import React from 'react';
import { Container } from 'react-bootstrap';
import {NavMenu} from './NavMenu';

export default props => (
  <Container fluid>
      <NavMenu />
      <main role="main">
        {props.children}
      </main>
  </Container>
);
