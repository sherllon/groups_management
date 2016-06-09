define(['backbone.marionette', "hbs/Footer"], function(Marionette, FooterTemplate) {
	
	var Footer = Marionette.ItemView.extend({
		template: FooterTemplate,
		
		tagName: "div",
		
		initialize: function() {
			this.render();
		}
	});
	
	return Footer;
});