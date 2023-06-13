const express = require ("express")
const server = express()


let myFavorites = [];

function postFav (req,res) {
  const {id,name,status,gender,species,image,origin,location} = req.body; 
  const existingFavorite = myFavorites.find((favorite) => favorite.id === id);
  if (existingFavorite) {
    return res.status(400).json({ error: 'El favorito ya existe' });
  }
  myFavorites.push({
      id,
      name,
      status,
      gender,
      species,
      image,
      origin,
      location
  })
  return res.json(myFavorites);
}

function deleteFav (req,res) {
  const { id } = req.params;  
  console.log(id)
  let filtered = myFavorites.filter(element => element.id !==id) 
  myFavorites  = filtered;
     return res.json(myFavorites);
};

module.exports = { postFav, deleteFav };





