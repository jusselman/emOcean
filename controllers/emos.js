const Emo = require('../models/emo');

module.exports = {
    index,
    newEmo,
    show,
    create
}

function show(req, res) {
    res.render('emos/show', {title: 'Emos Forum'});
}

function create(req, res) {
    Emo.create(req.body);
    res.redirect('emos/show');
}

function newEmo(req, res) {
    res.render('emos/new', { title: 'New Emos'});
}


function index(req, res){
    Emo.find({}, function(err, emos) {
        res.render('emos/index', { 
            title: 'Emos Index', 
            emos,
            user: req.user
        });
    })
}


