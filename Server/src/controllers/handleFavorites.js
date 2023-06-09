const express = require ("express")
const server = express()


let myFavorites = [];

function postFav (req,res) {
  const {id,name,status,gender,species,image,origin,location} = req.body;
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
  let filtered = [];
  if (myFavorites.length){
      myFavorites.filter(element =>{
          filtered = (element.id !== id)
      })
  }
  return res.json(filtered);
}

module.exports = { postFav, deleteFav };

