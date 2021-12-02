const request = require('request');
const input = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + input, (error, body) => {
  if (!error) {
    const data = JSON.parse(body);
    
    if (data.length === 0) {
      console.log("Breed not found");
    } else {
      console.log(data);
    }

    // console.log(typeof body);
    // console.log(typeof data);

  }
});