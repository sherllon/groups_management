define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<div class=\"alert\">"
    + container.escapeExpression(((helper = (helper = helpers.globalMessage || (depth0 != null ? depth0.globalMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"globalMessage","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},"globalMessage",{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<ul>\n	<li>Users</li>\n	<ul>\n		<li><a href=\"#\" id=\"listUsers\">List</a></li>\n		<li><a href=\"#\" id=\"addUser\">Add</a></li>\n	</ul>\n	<li>Groups</li>\n	<ul>\n		<li><a href=\"#\" id=\"listGroups\">List</a></li>\n		<li><a href=\"#\" id=\"addGroup\">Add</a></li>\n	</ul>\n</ul>";
},"useData":true}); });