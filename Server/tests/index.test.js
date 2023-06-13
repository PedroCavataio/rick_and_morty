const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
/* const postFav = require("../src/controllers/handleFavorites") */

describe('Test de RUTAS', () => {
  describe('GET /rickandmorty/character/:id', () => {
    it('Responde con status: 200', async () => {
      await agent.get('/rickandmorty/character/1').expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get('/rickandmorty/character/1');
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('species');
      expect(response.body).toHaveProperty('gender');
      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('origin');
      expect(response.body).toHaveProperty('image');
    });

    it('Si hay un error responde con status: 500', async () => {
      await agent.get('/rickandmorty/character/123456').expect(500);
    });
  });

  describe('GET /rickandmorty/login', () => {
    it('Valida acceso exitoso', async () => {
      const response = await agent.get('/rickandmorty/login').query({
        email: 'ejemplo@gmail.com',
        password: '123456',
      });
      expect(response.body).toEqual({ access: true });
    });

    it('Valida acceso fallido', async () => {
      const response = await agent.get('/rickandmorty/login').query({
        email: 'incorrecto@gmail.com',
        password: 'password_incorrecto',
      });
      expect(response.body).toEqual({ access: false });
    });
  });

  const app = require('../src/app');
  const session = require('supertest');
  const agent = session(app);
  

  describe('POST /rickandmorty/fav', () => {
    let body1;
  
    beforeEach(() => {
      body1 = {
        id: 1,
        name: 'personaje1',
        status: 'alive',
        gender: 'male',
        species: 'human',
        image: 'imagen1.jpg',
        origin: 'Earth',
        location: 'Earth',
      };
    });
  
    it('Lo que envíes por body debe ser devuelto en un arreglo', async () => {
      const response = await agent.post('/rickandmorty/fav').send(body1);
  
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(1);
      expect(response.body).toEqual([body1]);
    });
  
    it('Al enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente', async () => {
      const body2 = {
        id: 2,
        name: 'personaje2',
        status: 'unknown',
        gender: 'female',
        species: 'alien',
        image: 'imagen2.jpg',
        origin: 'Unknown',
        location: 'Unknown',
      };
  
      await agent.post('/rickandmorty/fav').send(body1);
      const response = await agent.post('/rickandmorty/fav').send(body2);

       
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(2);
      expect(response.body).toContainEqual(body1);
      expect(response.body).toContainEqual(body2);
    });
  });
  
  

   describe('DELETE /rickandmorty/fav/:id', () => {
    it('No modifica los elementos previos si el ID no existe', async () => {
      const initialResponse = await agent.get('/rickandmorty/fav');
      const initialFavorites = initialResponse.body;

      await agent.delete('/rickandmorty/fav/999');

      const response = await agent.get('/rickandmorty/fav');
      expect(response.body).toEqual(initialFavorites);
    });

    it('Elimina correctamente el personaje cuando se envía un ID válido', async () => {
      const body = {
        favorite: 'personaje1',
      };

      const addResponse = await agent.post('/rickandmorty/fav').send(body);
      const addedCharacter = addResponse.body[0];

      const characterId = addedCharacter.id;

      await agent.delete(`/rickandmorty/fav/${characterId}`);

      const response = await agent.get('/rickandmorty/fav');
      expect(response.body).not.toContainEqual(addedCharacter);
    });
  });
});
