import React, { useState, useEffect } from 'react';

function Home() {
  const [parts, setParts] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>Escudería Orakle - Inventario</h1>
      <div className="parts-grid">
        {parts.map((part) => (
          <div className="part-card" key={part.id}>
            <Link to={`/part/${part.id}`}>
              <img src={part.image} alt={part.name} />
              <h2>{part.name}</h2>
              <p>Marca: {part.brand}</p>
              <p>Precio: ${part.price}</p>
              <p>Año: {part.year}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
