define(["backbone"], function(Backbone) {
	var UserItem = Backbone.Model.extend({
		urlRoot: "/users",
		
		parse: function( response, options ) {
			
			if(response._id) {
				response.id = response._id;
				delete response._id;
			}
			
			return response;
		}
	});
	
	return UserItem;
});