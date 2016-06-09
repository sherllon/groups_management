var express = require('express');
var router = express.Router();

function getUserCollectionDB(req) {
	var db = req.db,
		collection = db.get("usercollection");
	
	return collection;
}

router.post('/', function(req, res) {
	var collection = getUserCollectionDB(req),
		user = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email
		};
	
	
	collection.insert(user, {}, function(e, result) {
		res.json(result);
	})
});

router.route('/:user_id').delete(function(req, res) {
	var collection = getUserCollectionDB(req);
	
	collection.remove({_id: req.params.user_id}, {}, function(e, result) {
		res.json(result);
	})
});

router.get('/list', function(req, res, next) {
	var collection = getUserCollectionDB(req);
	
	collection.find({}, {}, function(e, result) {
		res.json(result);
	})
});

router.get('/newuser', function(req, res) {
	res.render('newuser', { title: 'Add New User' });
});

router.post('/adduser', function(req, res) {

	var collection = getUserCollectionDB(req);

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.email;


    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("/users/");
        }
    });
});

module.exports = router;
