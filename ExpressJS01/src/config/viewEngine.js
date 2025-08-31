const path = require('path');


function setViewEngine(app) {
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');
}


module.exports = setViewEngine;