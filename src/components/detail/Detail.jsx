import styles from "./Detail.module.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then(({ data }) => {
        console.log('Character data:', data);
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching character:', error);
        window.alert('Ocurrió un error al obtener la información del personaje');
        console.log(error);
        setIsLoading(false);
      });

    return () => {
      setCharacter({});
    };
  }, [detailId]);

  console.log('Character state:', character);

  return (
    <div className={styles.detail}>
    
      <h1>Detail</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {character.name ? <h2>{character.name}</h2> : null}
          {character.status ? <p>Status: {character.status}</p> : null}
          {character.species ? <p>Species: {character.species}</p> : null}
          {character.gender ? <p>Gender: {character.gender}</p> : null}
          {character.origin && character.origin.name ? (
            <p>Origin: {character.origin.name}</p>
          ) : null}
          {character.image ? (
            <img src={character.image} alt={character.name} />
          ) : null}
        </div>
      )}
    </div>
  );
}
