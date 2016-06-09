define(['backbone.marionette', "hbs/Body", "models/Body", "views/GroupCollection", "views/UserByGroup", "models/GroupItem",
        "views/BasicOptions", "views/UserList", "models/BasicOptions", "views/User", "views/Group"], 
		function(Marionette, BodyTemplate, BodyModel, GroupCollectionView, UserByGroupView, Group,
				BasicOptionsView, UserListView, BasicOptionsModel, UserView, GroupView) {
	
	var changeState,
		Body = Marionette.LayoutView.extend({
			template: BodyTemplate,
			
			tagName: "div",
			
			regions: {
				content: "#content"
			},
			
			childEvents: {
				"groups:insertUser": function(event, param) {
					this._changeState("insertUser", param);
				},
				"groups:list": function(event, param) {
					this._changeState("listGroups", param);
				},
				"groups:add": function(event, param) {
					this._changeState("addGroup", param);
				},
				"users:list": function(event, param) {
					this._changeState("listUsers", param);
				},
				"users:add": function(event, param) {
					this._changeState("addUser", param);
				},
				"return": function(event, param) {
					this._changeState("", param);
				}
			},
			
			initialize: function() {
				this.model = new BodyModel({"username": "Admin"});
			},
			
			onRender: function() {
				this.getRegion("content").show(this._manageContent());
			},
			
			_manageContent: function() {
				switch (this.state) {
				
				case "listGroups":
					return new GroupCollectionView();
					
				case "insertUser":
					return new UserByGroupView({ model: new Group({ id: this.renderArgs.group })});
					
				case "listUsers":
					return new UserListView();
					
				case "addUser":
					return new UserView();
					
				case "addGroup":
					return new GroupView();
					
				default:
					return new BasicOptionsView({ model: new BasicOptionsModel({globalMessage: this.renderArgs})});
				}
			},
			
			_changeState: function(state, param) {
				this.state = state;
				this.renderArgs = param;
				this.render();
			}
		});
	
	return Body;
});