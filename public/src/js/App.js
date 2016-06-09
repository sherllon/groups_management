define(['backbone.marionette', 'underscore', 'views/ContentLayout'], function(Marionette, _, ContentLayout) {
	
	var App = Marionette.Application.extend({
		
		ContentLayout: _.noop,
		
		initialize: function() {
			this.ContentLayout = new ContentLayout({
				el: "#bd"
			});
			
			this.ContentLayout.render();
		}
	});
	
	return App;
});