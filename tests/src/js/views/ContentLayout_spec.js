define(["views/ContentLayout"], function(ContentLayout) {
	describe("ContentLayout tests:", function() {
		it("should return a Marionette LayoutView", function() {
			expect(ContentLayout).toBeDefined();
			expect(ContentLayout).not.toBeNull();
		});
	});
});