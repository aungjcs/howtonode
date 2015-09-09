var fs, readPath, files;

fs = require( 'fs' );
readPath = process.argv[2];

files = fs.readdirSync( readPath );

console.log( 'files', files );
