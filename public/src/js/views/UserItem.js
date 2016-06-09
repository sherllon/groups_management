define(['backbone.marionette', "hbs/UserItem"], function(Marionette, UserItemTemplate) {
	
	var UserItem = Marionette.ItemView.extend({
		template: UserItemTemplate,

		tagName: "tr",
		
		initialize: function() {
			this.render();
		},
		
		events: {
			"click a.removeUser": function() {
				this.model.destroy();
			}
		}
	});
	
	return UserItem;
});