define(["App"], function(App) {
	describe("Application tests:", function() {
		it("should return a Marionette application", function() {
			expect(App).toBeDefined();
			expect(App).not.toBeNull();
		});
	});
});