
import React from 'react';
import Card from '../Card/Card.jsx';
import styles from "./Cards.module.css";

export default function Cards(props) {
   const {characters} = props;
   return (
        <div className={styles.contenedor}>
            {characters?.map (character =>
              <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              /* origin={character.origin.name} */
              image={character.image}
              onClose={() => props.onClose(character.id)}
              />
             )}
        </div>
  );
}

