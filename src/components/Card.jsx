import React from 'react'; 

//Define un componente de función llamado Card que recibe varias propiedades como argumentos desestructurados.
export default function Card({id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div>
         <button onClick={onClose}>X</button> {/*Renderiza un botón para cerrar la card, que ejecuta la función onClose cuando se hace clic en él */}.
         
         {/* Renderiza el nombre del personaje, el estado, la especie, el género y el origen en elementos h2 */}
         <h2>id: {id}</h2>
         <h2>name: {name}</h2>
         <h2>status: {status}</h2>
         <h2>species: {species}</h2>
         <h2>gender: {gender}</h2>
         <h2>origin: {origin}</h2>
         {/* Renderiza la imagen del personaje utilizando la propiedad src y el atributo alt. */}
         <img src={image} alt='name'/> 
      </div>
   );
}
