define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h3>Add user</h3>\n\n<div>\n	<form id=\"addUserForm\" action=\"#\" method=\"post\">\n		<div>\n			<label for=\"firstName\">First Name:</label>\n			<input name=\"firstName\" id=\"firstName\" type=\"text\">\n		</div>\n		<div>\n			<label for=\"lastName\">Last Name:</label>\n			<input name=\"lastName\" id=\"lastName\" type=\"text\">\n		</div>\n		<div>\n			<label for=\"email\">Email:</label>\n			<input name=\"email\" id=\"email\" type=\"email\">\n		</div>\n		<div>\n			<input type=\"submit\" id=\"addUserBtn\" value=\"Save\"/>\n		</div>\n	</form>\n</div>\n\n<a href=\"#\" class=\"return\">Return</a>";
},"useData":true}); });