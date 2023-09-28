import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PartDetail() {
  const { id } = useParams();
  const [part, setPart] = useState(null);

  useEffect(() => {
    // Realizar una solicitud GET al endpoint `/parts/${id}` para obtener los detalles de la parte específica
    // Actualiza el estado "part" con la respuesta del servidor
  }, [id]);

  if (!part) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles de la Parte</h1>
      <img src={part.image} alt={part.name} />
      <h2>{part.name}</h2>
      <p>Marca: {part.brand}</p>
      <p>Precio: ${part.price}</p>
      <p>Año: {part.year}</p>
      <p>Descripción: {part.description}</p>
    </div>
  );
}

export default PartDetail;
