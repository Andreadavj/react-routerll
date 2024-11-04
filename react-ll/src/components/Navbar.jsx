import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/cartContext';
import { useUser } from '../contexts/UserContext';

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <Link className="nav-link btn btn-outline-success me-2" to="/">Home 🍕</Link>
            {token ? (
              <>
                <Link className="nav-link btn btn-outline-success me-2" to="/profile">Profile 👨‍💻</Link>
                <button onClick={logout} className="nav-link btn btn-outline-success me-2">Logout 🔐</button>
              </>
            ) : (
              <>
                <Link className="nav-link btn btn-outline-success me-2" to="/login">Login 🚪</Link>
                <Link className="nav-link btn btn-outline-success me-2" to="/register">Register 🔐</Link>
              </>
            )}
          </div>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link btn btn-outline-success" to="/cart">🛒 Total: ${total.toFixed(2)}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
