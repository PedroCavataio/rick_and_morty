
//Importa React y el componente "Card" desde el archivo "./Card".
import React from 'react';
import Card from './Card';

//Exporta una función de componente llamada "Cards" que recibe una propiedad "characters".
export default function Cards({characters}) {
   return (<div>

{/* Renderiza una lista de componentes "Card" usando el método "map()" de JavaScript. El método "map()" itera sobre cada objeto del array "characters" y devuelve un nuevo array de componentes "Card". */}
            {characters.map((character) => (
                <Card
                  key={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
             ))}
            </div>
  );
}

//Para cada personaje en "characters", se crea un componente "Card" con las siguientes propiedades:
/* "key" - un identificador único para el componente
"name" - el nombre del personaje
"status" - el estado del personaje
"species" - la especie del personaje
"gender" - el género del personaje
"origin" - el nombre del origen del personaje
"image" - la URL de la imagen del personaje
"onClose" - una función que se ejecuta cuando se hace clic en el botón de cierre en la tarjeta. En este caso, muestra una alerta de ventana que indica que se está emulando el cierre de la tarjeta. */
