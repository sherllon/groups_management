var express = require('express');
var router = express.Router();

function getGroupCollectionDB(req) {
	var db = req.db,
		collection = db.get("groupcollection");
	
	return collection;
}

router.post('/', function(req, res) {
	var collection = getGroupCollectionDB(req),
		group = {
			name: req.body.name,
			description: req.body.description
		};
	
	
	collection.insert(group, {}, function(e, result) {
		res.json(result);
	})
});

router.get('/list', function(req, res, next) {
	var collection = getGroupCollectionDB(req);
	
	collection.find({}, {}, function(e, result) {
		res.json(result);
	});
});

router.route('/:user_id')
	.delete(function(req, res) {
		var collection = getGroupCollectionDB(req);
		
		collection.remove({_id: req.params.user_id}, {}, function(e, result) {
			res.json(result);
		})
	})
	.get(function(req, res) {

	var db = req.db,
		collection = db.get("groupcollection");
	
	collection.findById( req.params.group_id , {}, function(e, result) {
		res.json(result);
	})

});

module.exports = router;
