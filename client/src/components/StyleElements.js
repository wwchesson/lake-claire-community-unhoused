import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #279139;
  height: 80px;
  display: flex;
  justify-content: center;
  padding: 10px;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: x-large;
  padding: 40px;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #f79d00;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Card = styled.div`
  width: 350px;
  height: 600px;
  background-color: #08b7fc;
  margin: 10px;
  padding: 10px;
  object-fit: contain;
`;

export const UpdateCard = styled.div`
  width: 350px;
  height: 300px;
  background-color: #08b7fc;
  margin: 10px;
  padding: 10px;
  object-fit: contain;
`;

export const LoginCard = styled.div`
  width: 250px;
  height: 150px;
  padding: 10px;
  object-fit: contain;
`;

export const Tiles = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 20px;
`;

export const LoginHeader = styled.div`
  margin-left: 10px;
  margin-bottom: 0px;
`;

export const H3 = styled.div`
  color: black;
  text-align: center;
  // font-family: "Roboto";
  font-size: 3em;
  padding: 5px;
`;

export const H4 = styled.div`
  color: white;
  text-align: right;
  // font-family: "Roboto";
  font-size: 1.5em;
  padding: 15px;
`;