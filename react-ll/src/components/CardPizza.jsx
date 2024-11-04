import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza, addToCart }) => {
  return (
    <div className="card">
      <Link to={`/pizza/${pizza.id}`}>
        <img src={pizza.image} className="card-img-top" alt={pizza.name} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">🍕 {pizza.ingredients.join(", ")}</p>
        <p className="price">Precio: ${pizza.price.toLocaleString()}</p>
        <button onClick={addToCart} className="btn btn-success"> 🛒 Añadir</button>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CardPizza;
