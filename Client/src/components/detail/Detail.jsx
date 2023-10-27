import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /* axios(`http://localhost:3001/rickandmorty/character/${id}`)  */
    axios(`https://rick-and-morty-src.onrender.com/rickandmorty/character/${id}`)  
    .then(({data}) => {
        /* const data = response.data;  */   
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
  }, [id]);    

  console.log('Character state:', character);

  const handleGoBack = () => {
        navigate(-1); 
    
  };

  return (

    <div className={styles.detail}>
      <div className={styles.imageContainer}>
        {isLoading ? (
          <p>Cargando...</p>
          ) : (
            character.image && <img src={character.image} alt={character.name} />
            )}
      </div>
      <div className={styles.infoContainer}>
          <button className={styles.closeButton} onClick={handleGoBack}>X</button>
        <h1 className={styles.name}>{character.name || 'No Name'}</h1>
        <div className={styles.details}>
          {character.status && <p>Status: {character.status}</p>}
          {character.species && <p>Species: {character.species}</p>}
          {character.gender && <p>Gender: {character.gender}</p>}
          {character.origin && character.origin.name && (
            <p>Origin: {character.origin.name}</p>
            )}
        </div>
      </div>
    </div>
  );
}





