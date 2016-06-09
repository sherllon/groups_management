define(["backbone", "models/UserItem"], function(Backbone, UserItem) {
	var UserList = Backbone.Collection.extend({
		url: "/users/list",
		model: UserItem,
		
		initialize: function() {
			this.fetch();
		}
	});
	
	return UserList;
});