 const axios = require('axios'); 
 const getCharById = require('../controllers/getCharById');

 const URL = "http://rickandmortyapi.com/api/character/";

    module.exports = async (req, res) => {   
        try { 
          const { id } = req.params;
          const response = await axios.get(URL + id);
          const { status, name, species, origin, image, gender } = response.data;
          const character = { id, status, name, species, origin, image, gender };
          
          if (name) {
            return res.status(200).json(character);
          } else {
            return res.status(404).send("Not found");
          }
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };   
    

     