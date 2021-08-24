const { Logger } = require('mongodb');
const {multipleMongooseToObject} = require('../../util/mongoose.js');
const Course = require('../models/Course.js');
class SiteController{
    //[GET] /home
    index(req, res, next){
        Course.find({})
        .then(courses => {
            res.render('home', { 
                courses: multipleMongooseToObject(courses)
            })
        })
        .catch(next);
    }

    //[GET] /search
    search(req, res, next){
        res.render('search');
    }
}

module.exports = new SiteController();