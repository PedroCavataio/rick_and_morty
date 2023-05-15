import React, { useState } from 'react';

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSearch = () => {
    props.onSearch(searchValue);
  }

  return (
    <div>
      <input type='search' value={searchValue} onChange={handleInputChange} />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}

/* Este código es un componente de React llamado "SearchBar". El componente importa la función useState de React para crear un estado de búsqueda y recibe una prop llamada "onSearch", que se usará para realizar una búsqueda */

/* 1- se utiliza la función "useState" de React para crear un estado llamado "searchValue", que se inicializa en una cadena vacía. (La función useState es una función de React que se utiliza para crear estados en los componentes de React. La función useState devuelve una matriz que contiene dos elementos: el primer elemento es el valor actual del estado y el segundo es una función para actualizar ese estado)*/

/* 2- Se define una función llamada "handleInputChange" que se ejecuta cada vez que el usuario cambia el valor del campo de entrada de búsqueda. Esta función actualiza el estado de "searchValue" con el nuevo valor del campo de entrada de búsqueda. */

/* 3- Se define una función llamada "handleSearch" que se ejecuta cuando el usuario hace clic en el botón de búsqueda. Esta función utiliza la prop "onSearch" que se recibió como argumento del componente y le pasa el valor actual del estado "searchValue". */

/* 4- En el retorno del componente, se renderiza un elemento <div> que contiene un campo de entrada de búsqueda y un botón de búsqueda. */

/* 5- El valor del campo de entrada de búsqueda se establece en el valor actual del estado "searchValue". */

/* 6- Cuando el usuario cambia el valor del campo de entrada de búsqueda, se ejecuta la función "handleInputChange", que actualiza el estado "searchValue" con el nuevo valor. */ 

/* 7- Cuando el usuario hace clic en el botón de búsqueda, se ejecuta la función "handleSearch", que utiliza la prop "onSearch" para realizar una búsqueda con el valor actual de "searchValue" */


