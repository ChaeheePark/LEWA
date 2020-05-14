FlowRouter.template('/article/:_id', 'article');

Template.article.helpers({
    board: function() {
        var _id = FlowRouter.getParam('_id');
        return DB_ARTICLES.findOne({_id: _id});
    },
    createdAt: function() {
        return this.createdAt.toStringYMDHMS();
    }

});