import React, { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';
import { useUser } from '../contexts/UserContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { token } = useUser();

  // Funciones increaseQuantity, decreaseQuantity, removeItem (sin cambios)

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.name}</h5>
                <p>Precio: ${item.price.toLocaleString()}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
              <div>
                <button onClick={() => decreaseQuantity(item.id)} className="btn btn-danger">-</button>
                <button onClick={() => increaseQuantity(item.id)} className="btn btn-success">+</button>
                <button onClick={() => removeItem(item.id)} className="btn btn-warning">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}</h4>
      <button className="btn btn-primary" disabled={!token}>Pagar</button>
    </div>
  );
};

export default Cart;