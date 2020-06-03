FlowRouter.template('/wordBook', 'wordBook');

Template.wordBook.helpers({
    words1: function () {
        var word_count=DB_SEARCH_COUNT.findAll({user_id:Meteor.user()._id, word:this.word}).count;
        return DB_WORDS.findAll({user_id: Meteor.user()._id,form:1},{sort:{findCount:-1}});

        // var words_list1 = new Array();
        // var listed1 = DB_WORDS.findAll({user_id: Meteor.user()._id,form:1},{});
        // listed1.forEach(function (element) {
        //     words_list1.push(DB_WORDS.findOne({word: element.word}));
        // });
        // return words_list1;
    },
    words2: function () {
        return DB_WORDS.findAll({user_id: Meteor.user()._id,form:2},{sort:{findCount:-1}});
        // var words_list2 = new Array();
        //
        // var listed2 = DB_WORDS.findAll({user_id: Meteor.user()._id,form:2});
        // listed2.forEach(function (element) {
        //     words_list2.push(DB_WORDS.findOne({word: element.word}));
        // });
        // return words_list2;
    },
    titles1:function (titleid) {
        // s = DB_ALL_ARTICLES.findOne({_id:titleid}).title;
        var a = DB_WORDS.findOne({user_id:Meteor.user()._id,word:this.word,form:1});
        var s =  DB_ALL_ARTICLES.findOne({_id:a.article_id[a.article_id.length-1]}).title;

        if(s.length > 31){
            return s.substr(0,30) + "...";
        }
        return s;
    },
    titles2:function (titleid) {
        // s = DB_ALL_ARTICLES.findOne({_id:titleid}).title;
        var a = DB_WORDS.findOne({user_id:Meteor.user()._id,word:this.word,form:2});
        var s =  DB_ALL_ARTICLES.findOne({_id:a.article_id[a.article_id.length-1]}).title;

        if(s.length > 31){
            return s.substr(0,30) + "...";
        }
        return s;
    },
    math: function(lvalue, operator, rvalue) { //index 1부터 시작하게 도와주는 함수
        lvalue = parseInt(lvalue);
        rvalue = parseInt(rvalue);

        return { "+": lvalue + rvalue, "/": lvalue / rvalue }[operator];
    },
    article_title:function () {
        var a = DB_WORDS.findOne({user_id:Meteor.user()._id,word:this.word,form:2});
        return DB_ALL_ARTICLES.findOne({_id:a.article_id[a.article_id.length-1]}).title;




    }
    // article_location:function () {
    //     // var listlist=new Array();
    //     return  DB_WORDS.findAll({word:this.word,user_id: Meteor.user()._id,form:1}).article_id[0];
    //
    //
    // }
});

Template.wordBook.events({
    'click #eachWord1': function(){
        swal("사전뜻 넣어주세용");
    },
    'click #eachWord2': function(){
        swal("사전뜻 넣어주세용");
    },
    'click #remove_word1':function () {
        var word_id = DB_WORDS.findOne({word:this.word,form:1})._id;
        DB_WORDS.remove({_id:word_id});
        //단어장에서 디비에 있는 단어 삭제

    },
    'click #remove_word2':function () {
        var word_id = DB_WORDS.findOne({word:this.word,form:2})._id;
        DB_WORDS.remove({_id:word_id});
        //단어장에서 디비에 있는 단어 삭제

    }


})