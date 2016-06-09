define(['backbone.marionette', "hbs/Group", "models/GroupItem"], function(Marionette, GroupTemplate, GroupItemModel) {
	
	var Group = Marionette.ItemView.extend({
		template: GroupTemplate,

		tagName: "div",
		
		ui: {
			addGroupForm: "#addGroupForm"
		},
		
		initialize: function() {
			this.model = new GroupItemModel();
		},
		
		modelEvents: {
			"sync": function() {
				this.triggerMethod("groups:list");
			}
		},
		
		events: {
			"submit @ui.addGroupForm": function(e) {
				e.preventDefault();
					
				var form = event.target,
					userJson = {
						name: form["name"].value,
						description: form["description"].value
					};
				
				this.model.save(userJson);
			},
			"click a.return": function(e) {
        		e.preventDefault();
        		this.triggerMethod("return");
        	}
		}
		
		
	});
	
	return Group;
});