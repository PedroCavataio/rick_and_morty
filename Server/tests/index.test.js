const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

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

  describe('POST /rickandmorty/fav', () => {
    it('Devuelve un arreglo con el elemento enviado por body', async () => {
      const body = {
        favorite: 'personaje1',
      };
      const response = await agent.post('/rickandmorty/fav').send(body);
      expect(response.body).toEqual([body]);
    });

    it('Devuelve un arreglo que incluye el elemento enviado previamente', async () => {
      const body1 = {
        favorite: 'personaje1',
      };
      const body2 = {
        favorite: 'personaje2',
      };

      await agent.post('/rickandmorty/fav').send(body1);

      const response = await agent.post('/rickandmorty/fav').send(body2);
      expect(response.body).toEqual([body1, body2]);
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
