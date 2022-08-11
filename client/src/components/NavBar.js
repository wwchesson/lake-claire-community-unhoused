import React from "react";
import { Nav, NavLink, NavMenu, H3 } from "./StyleElements";

function NavBar({user, setUser}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="navbar">
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/residents">
            Residents
          </NavLink>
          <NavLink to="/resident_intake">Resident Intake</NavLink>
          <button onClick={handleLogoutClick}>Logout</button> 
          <H3>{user.firstname}</H3>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default NavBar;