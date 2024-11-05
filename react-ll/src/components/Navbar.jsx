import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/cartContext';
import { useUser } from '../contexts/UserContext';

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useUser();

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Pizzería Mamma Mia!</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className={`nav-link btn btn-outline-success me-2 ${setActiveClass}`} to="/">Home 🍕</NavLink>
            {token ? (
              <>
                <NavLink className={`nav-link btn btn-outline-success me-2 ${setActiveClass}`} to="/profile">Profile 👨‍💻</NavLink>
                <button onClick={logout} className="nav-link btn btn-outline-success me-2">Logout 🔐</button>
              </>
            ) : (
              <>
                <NavLink className={`nav-link btn btn-outline-success me-2 ${setActiveClass}`} to="/login">Login 🚪</NavLink>
                <NavLink className={`nav-link btn btn-outline-success me-2 ${setActiveClass}`} to="/register">Register 🔐</NavLink>
              </>
            )}
          </div>
          <div className="navbar-nav ms-auto">
            <NavLink className={`nav-link btn btn-outline-success`} to="/cart">🛒 Total: ${total.toFixed(2)}</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
