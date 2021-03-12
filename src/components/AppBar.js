import React from "react";
import Toggle from "./Toggler";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Sidebar = styled.div`
  text-align: center;
  margin: 0;
  padding-top: 25px;
  width: 200px;
  background: ${({ theme }) => theme.appbarbg};
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  box-shadow: 0px 30px 60px 1px rgba(138, 149, 158, 0.2);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
`;

const A = styled.div`
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
  :hover {
    background-color: #555;
    color: white;
  }
`;

class AppBar extends React.Component {
  render() {
    return (
      <Sidebar>
        <Title>Prueba</Title>
        <Toggle
          theme={this.props.theme}
          toggleTheme={this.props.themeToggler}
        />
        <A>
          <Link to="/page1" className="link">
            Página 1
          </Link>
        </A>
        <A>
          <Link to="/page2" className="link">
            Página 2
          </Link>
        </A>
      </Sidebar>
    );
  }
}

export default AppBar;
