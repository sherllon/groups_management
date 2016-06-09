define(["backbone"], function(Backbone) {
	var Group = Backbone.Model.extend({
		urlRoot: "/groups",
		
		parse: function( response, options ) {
			
			if(response._id) {
				response.id = response._id;
				delete response._id;
			}
			
			return response;
		}
	});
	
	return Group;
});