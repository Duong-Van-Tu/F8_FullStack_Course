class NewController{
    index(req, res, next){
        res.render('news');
    }

    show(req, res, next){
        res.send("NEWS DETAIL")
    }
}

module.exports = new NewController();