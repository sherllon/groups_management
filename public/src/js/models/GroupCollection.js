define(["backbone", "models/GroupItem"], function(Backbone, Group) {
	var GroupCollection = Backbone.Collection.extend({
		url: "/groups/list",
		model: Group,
		
		initialize: function() {
			this.fetch();
		}
	});
	
	return GroupCollection;
});