define(['backbone.marionette', "hbs/ContentLayout", "views/Header", "views/Body", "views/Footer", "models/Header", "models/Footer"], 
		function(Marionette, ContentLayout, Header, Body, Footer, HeaderModel, FooterModel) {
	
	var ContentLayout = Marionette.LayoutView.extend({
		template: ContentLayout,
		regions: {
			Header: "#content-hd",
			Body: "#content-bd",
			Footer: "#content-ft"
		},
		onRender: function() {
			this.getRegion("Header").show(new Header({model: new HeaderModel({pageTitle: "Manage groups"}) }));
			this.getRegion("Body").show(new Body());
			this.getRegion("Footer").show(new Footer({model: new FooterModel() }));
		}
	});
	
	return ContentLayout;
});