FlowRouter.template('/article/:_id', 'article');



Template.article.helpers({
    //기사 관련
    board: function() {
        var _id = FlowRouter.getParam('_id');
        return DB_ARTICLES.findOne({_id: _id});
    },
    createdAt: function() {
        return this.createdAt.toStringYMDHMS();
    },
    clip_img: function () {

        if(Meteor.user() == null){
            return 'pre_scrap.png';
        }

        var post_id = FlowRouter.getParam('_id');
        var user_id = Meteor.user()._id;

        if(!DB_CLIPS.findOne({post_id : post_id, user_id : user_id})){
            return 'pre_scrap.png';
        }else{
            return 'post_scrap.png';
        }
    },
    clip_users : function(){
        var post_id = FlowRouter.getParam('_id');
        return DB_CLIPS.findAll({post_id:post_id});
    },
    clip_user_nickname : function(){
        var user_id = this.user_id;
        return Meteor.users.findOne({_id : user_id}).profile.nickname;
    },
});

Template.article.events({
    'click #btn-gohome': function() {
    location.href="/";
},
    'click #btn-goquiz': function() {
        location.href = "/quiz";
    },
    'click #btn-clip': function() {
        if(!Meteor.user()){
            alert('로그인해주세요.');
            return;
        }

        var post_id = FlowRouter.getParam('_id');
        var user_id = Meteor.user()._id;
        var clip = DB_CLIPS.findOne({post_id : post_id, user_id : user_id});
        var articles = DB_ARTICLES.findOne({_id : post_id});
        if(!clip){
            DB_CLIPS.insert({   //추천 관계 목록 업데이트
                post_id : post_id,
                user_id : user_id
            });
            DB_ARTICLES.update({_id: post_id}, articles);



            alert('스크랩');
        }else{
            DB_CLIPS.remove({_id : clip._id});     //추천 관계 목록 삭제
            DB_ARTICLES.update({_id: post_id}, articles);
            alert('스크랩 취소');
        }
    },
});