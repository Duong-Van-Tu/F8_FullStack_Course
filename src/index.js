const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');

const route = require('./routes/index.js');
const db = require('./config/db');

//connect mongodb
db.connect();
const app = express();
const port = 3000;
const hbs = exphbs.create({ 
    extname: 'hbs'
 });
//set view
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use('/static',express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

route(app);
app.listen(port, function() {
    console.log('App listening on port ' + port);
});