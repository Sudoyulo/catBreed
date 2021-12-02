const request = require('request');
// const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, body) => {
    if (!error) {
      const data = JSON.parse(body.body);
    
      if (data.length === 0) {
        callback("breed not found", null);
        // console.log("Breed not found");
      } else {
        callback(null, data[0].description);
        // console.log(data[0].description);
      }
    
    }
  });
};

module.exports = { fetchBreedDescription };