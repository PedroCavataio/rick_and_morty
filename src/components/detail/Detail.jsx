import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail() {
  const { detailId } = useParams();
  const navigate = useNavigate();
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

  const handleGoBack = () => {
    // Navegar hacia atrás o a una ruta específica
    navigate(-1); // Navegar hacia atrás en el historial
    // navigate('/ruta-especifica'); 
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
