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
    var emo = new Emo(req.body);
    emo.save(function(err, savedEmo) {
        console.log(emo);
        if (err) return res.redirect('/new');
        // redirect doesn't take that (/show) always starts from root
        // render must provide any variables your EJS will use (in the second argument)
        res.render('emos/show', {
            emo: savedEmo,
            title: null,
            user: req.user
        });
            
    })
    // Emo.create(req.body);
    // res.redirect('/emos/show');
}

function newEmo(req, res) {
    res.render('emos/new', {
        title: 'Emo 4FR'
    });
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


