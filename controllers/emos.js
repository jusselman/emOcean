const Emo = require('../models/emo');

module.exports = {
    index,
    newEmo,
    show,
    create,
    remove,
    editPage
}

function editPage(req, res) {
Emo.findById(req.params.id, function(err, emo) {
    // if (err) throw err
        res.render('emos/edit', 
        {
            emo,
            title: ''
        }
        );
    })
};


function remove(req, res) {
    Emo.findByIdAndDelete(req.params.id)
    .then( emo =>
    res.redirect('/emos/show')
        )
    }


function show(req, res) {
    Emo.find({}, function(err, emos) {
        res.render('emos/show', {
            title: 'Emos Forum',
            emos,
            user: req.user
        });
    })
    
    
}

function create(req, res) {
    var emo = new Emo(req.body);
    emo.save(function(err, savedEmo) {
        console.log(req.body);
        console.log(savedEmo);
        if (err) return res.redirect('/new');
        // redirect doesn't take that (/show) always starts from root
        // render must provide any variables your EJS will use (in the second argument)
        res.redirect('/emos/show', );
            
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


