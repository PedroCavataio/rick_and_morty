/* Se importan los estilos del archivo App.css, el componente Card, Cards, SearchBar y los datos de los personajes y Rick desde sus respectivos archivos: */
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

/* Se define el componente App que renderizará el resto de los componentes de la aplicación: */
function App() {
   return (
      <div className='App'>

         {/*Aquí se renderiza el componente SearchBar con la propiedad onSearch*/}
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />

         {/*Aquí se renderiza el componente Cards con la propiedad characters*/}
         <Cards characters={characters} />

         {/*Aquí se renderiza el componente Card con las propiedades de Rick*/}
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

/* El componente App es exportado como un componente por defecto para que pueda ser utilizado en otros archivos */
export default App;

/* este código define una aplicación que renderiza un componente SearchBar, un componente Cards con una lista de personajes y un componente Card con las propiedades de Rick. Además, se utiliza la propiedad onSearch del componente SearchBar para hacer una alerta cuando se busca un personaje. */






