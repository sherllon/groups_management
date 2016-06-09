define(['backbone.marionette', "hbs/UserByGroup"], function(Marionette, UserByGroupTemplate) {
	
	var UserByGroup = Marionette.LayoutView.extend({
		template: UserByGroupTemplate,
		
		tagName: "div",
		
		regions: {
			userList: "#currentUsers",
			userAddition: "#addUserToGroup"
		},
		
		initialize: function() {
			if(this.model) {
				this.model.fetch();
			}
			//this.render();
		},
		
		onRender: function() {
			
		},
		
		modelEvents: {
			"fetch": function() {
				this.render();
			}
		}
	});
	
	return UserByGroup;
});