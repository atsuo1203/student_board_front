import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.header`
  font-size: 1.5rem;
  padding: 2rem;
  text-align: center;
  color: #FFC507;
  background: #353B41;
`;

class Header extends Component {
  render() {
    return (
      <Div>
        Top
      </Div>
    );
  }
}
export default Header;