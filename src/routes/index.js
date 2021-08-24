const siteRoute = require('./site.js');
const newRoute = require('./news.js');
const courseRoute = require('./course.js');
function route(app){
    app.use('/news', newRoute);
    app.use('/courses', courseRoute);
    app.use('/', siteRoute);
}


module.exports = route;
