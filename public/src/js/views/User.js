define(['backbone.marionette', "hbs/User", "models/UserItem"], function(Marionette, UserTemplate, UserItemModel) {
	
	var User = Marionette.ItemView.extend({
		template: UserTemplate,

		tagName: "div",
		
		ui: {
			addUserForm: "#addUserForm"
		},
		
		initialize: function() {
			this.model = new UserItemModel();
		},
		
		modelEvents: {
			"sync": function() {
				this.triggerMethod("users:list");
			}
		},
		
		events: {
			"submit @ui.addUserForm": function(e) {
				e.preventDefault();
					
				var form = event.target,
					userJson = {
						firstName: form["firstName"].value,
						lastName: form["lastName"].value,
						email: form["email"].value
					};
				
				this.model.save(userJson);
			},
			"click a.return": function(e) {
        		e.preventDefault();
        		this.triggerMethod("return");
        	}
		}
		
		
	});
	
	return User;
});