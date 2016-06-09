define(['backbone.marionette', "hbs/Header"], function(Marionette, HeaderTemplate) {
	
	var Header = Marionette.ItemView.extend({
		template: HeaderTemplate,

		tagName: "div",
		
		initialize: function() {
			this.render();
		}
	});
	
	return Header;
});