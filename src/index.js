const express = require('express');
const path = require('path');
const morgan = require('morgan');
var exphbs  = require('express-handlebars');

const app = express();
const port = 3000;
var hbs = exphbs.create({ 
    extname: 'hbs'
 });
//set view
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use('/static',express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.get('/', (req, res) =>{
    res.render('home');
})
app.listen(port, function() {
    console.log('App listening on port ' + port);
});