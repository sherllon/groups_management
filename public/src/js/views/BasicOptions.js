define(['backbone.marionette', "hbs/BasicOptions"], function(Marionette, BasicOptionsTemplate) {
	
	var BasicOptions = Marionette.ItemView.extend({
		template: BasicOptionsTemplate,
		
		tagName: "div",
		
		events: {
			"click #listUsers": function(e){
				e.preventDefault();
				this.triggerMethod("users:list");
			},
			"click #addUser": function(e){
				e.preventDefault();
				this.triggerMethod("users:add");
			},
			"click #listGroups": function(e){
				e.preventDefault();
				this.triggerMethod("groups:list");
			},
			"click #addGroup": function(e){
				e.preventDefault();
				this.triggerMethod("groups:add");
			}
		}
	});
	
	return BasicOptions;
});