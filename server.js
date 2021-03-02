const express = require('express');
const app = express();
const fetch 	= require("node-fetch");

var cat;
function getRandomCatFact(){
	(async () => {
	  	try {
		    const res = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat');

		    if (res.status >= 400) {
		      throw new Error("Bad response from server");
		    }

		    cat = await res.json();

		    console.log(cat);
		} catch (err) {
		    console.error(err);
		}	
	})();
}

app.use(express.static('public'));

app.listen(8000, () => {
	console.log('Server running at http://127.0.0.1:8000/');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/clicked', (req, res) => {
	getRandomCatFact();
  	res.send(cat);
});

