import React from 'react'; 

//Define un componente de función llamado Card que recibe varias propiedades como argumentos desestructurados.
export default function Card({onClose, id, name, status, species, gender, origin, image }) {
   return (
      <div>
         <button onClick={onClose}>X</button> 
         <h2>{id}</h2>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} /> 
      </div>
   );
}
