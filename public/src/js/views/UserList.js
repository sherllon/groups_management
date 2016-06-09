define(['backbone.marionette', 'jquery', "hbs/UserList", "models/UserList", "views/UserItem"], function(Marionette, $, UserListTemplate, UserListModel, UserItemView) {
	
	var UserList = Marionette.CompositeView.extend({
		
		template: UserListTemplate,
		
		childView: UserItemView,
		
		initialize: function() {
			this.collection = new UserListModel();
		},
		
		attachHtml: function(collectionView, itemView){
            collectionView.$("#userTable").append(itemView.el);
        },
        
        collectionEvents: {
        	"remove": function() {
        		if(this.collection.isEmpty()) {
        			this.triggerMethod("return", "You have no user left.");
        		}
        	}
        },
        
        events: {
        	"click a.return": function(e) {
        		e.preventDefault();
        		this.triggerMethod("return");
        	}
        }
		
	});
	
	return UserList;
});