define(['backbone.marionette', "hbs/GroupItem"], function(Marionette, GroupItemTemplate) {
	
	var Group = Marionette.ItemView.extend({
		template: GroupItemTemplate,

		tagName: "tr",
		
		initialize: function() {
			this.render();
		},
		
		events: {
			"click a.removeGroup": function(e) {
				e.preventDefault();
				this.model.destroy();
			}
		}
	});
	
	return Group;
});