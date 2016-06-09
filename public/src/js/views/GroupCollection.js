define(['backbone.marionette', 'jquery', "hbs/GroupCollection", "models/GroupCollection", "views/GroupItem"], function(Marionette, $, GroupCollectionTemplate, GroupCollectionModel, GroupView) {
	
	var GroupCollection = Marionette.CompositeView.extend({
		
		tagName: "div",
		
		template: GroupCollectionTemplate,
		
		childView: GroupView,
		
		initialize: function() {
			this.collection = new GroupCollectionModel();
		},
		
		attachHtml: function(collectionView, itemView){
            collectionView.$("#groupTable").append(itemView.el);
        },
        
        events: {
        	"click a.insertUser": function(event) {
        		this.triggerMethod("groups:insertUser", {group: $(event.target).data("group")});
        	},
        	"click a.return": function(e) {
        		e.preventDefault();
        		this.triggerMethod("return");
        	}
        },
        
        collectionEvents: {
        	"remove": function() {
        		if(this.collection.isEmpty()) {
        			this.triggerMethod("return", "You have no groups left.");
        		}
        	}
        }
		
	});
	
	return GroupCollection;
});