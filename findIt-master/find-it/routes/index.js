var express = require('express');
var router = express.Router();
var BackendController = require('../controllers/BackendController');
require('./common');

router.use('/', function(req, res, next){
    if(!req.cookies._hsh){
        if(req.cookies._error){ // parse login error
            res.render('index', {status: req.cookies._error});   
        }
        res.render('index', {status: "login"});
    } else { //find if user logged in
        Users.findOne({_hsh: req.cookies._hsh}, function(err, user){
            if(err) next(err);
            res.render('index');           
        });      
    } 
});

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
