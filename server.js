// Import Module global
const express = require('express');
const {
    engine
} = require('express-handlebars');
const app = express();

// Config Handlebars
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Route fichier static
app.use('/assets', express.static('public'))

// Router
app.get('/', function (req, res) {
    res.render('home')
})
app.get('/contact', function (req, res) {
    res.render('contact')
})

// Run server
app.listen(3000);
