var _, arr;

_ = require( 'underscore' );
arr = ['red', 'green', 'blue'];

console.log( 'contains green:', _.contains( arr, 'green' ) );
console.log( 'contains white:', _.contains( arr, 'white' ) );
