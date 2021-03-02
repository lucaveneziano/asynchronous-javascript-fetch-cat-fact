const button = document.getElementById('btn_get');
button.addEventListener('click', function(e) {
  	fetch('/clicked', {method: 'GET'})
	    .then(response => response.json())
	    .then((data) => {
		  	console.log('Success:', data);
		  	document.getElementById('cat-fact-text').innerHTML = data.text;
		})
	    .catch((error) => {
		  console.log('Error:', error);
		});
});