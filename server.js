var express  = require( 'express' ),
    path     = require( 'path' ),
    global   = __dirname,
    port     = 8888,
    app      = express();
    
app.use( express.static( path.join( global )));
app.use( express.static( path.join( global, 'css' )));
app.use( express.static( path.join( global, 'js' )));
app.use( express.static( path.join( global, 'node_modules' )));


app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
