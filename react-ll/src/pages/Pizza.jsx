import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Error fetching pizza:', error);
      }
    };

    fetchPizza();
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="container">
      <h2>{pizza.name}</h2>
      <img src={pizza.image} alt={pizza.name} />
      <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
      <p>Precio: ${pizza.price.toLocaleString()}</p>
    </div>
  );
};

export default Pizza;
