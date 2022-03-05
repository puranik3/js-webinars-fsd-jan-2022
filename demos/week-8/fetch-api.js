// returns a Promise
// Please check in the browser (Node has no fetch API)
fetch( 'https://jsonplaceholder.typicode.com/todos' )
    .then(response => response.json())
    .then(data => console.log( data ))
    .catch(error => console.log( error.message));

console.log( 'end of script' );