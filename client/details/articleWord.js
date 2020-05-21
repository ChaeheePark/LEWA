Template.articleWord.onRendered(function() {
    Session.set('searchWord', "");
});

Template.articleWord.helpers({
    searchWord: function(){ //검색한 단어 반환
        var searchWord = Session.get('searchWord');
        if (!searchWord) {
            return '';
        } else {
            return searchWord;
        }
    },
    wordSave: function(){   //단어를 단어장에 추가했는지 여부
        var word = Session.get('searchWord');
        // var user_id = Meteor.user()._id;   //유저 _id
        var article_id = FlowRouter.getParam('_id'); //기사 _id

        // findOne selector : 단어, 유저, 기사
        if(!DB_WORDS.findOne({word: word, article_id: article_id},)){    //null일 경우 - DB에 저장되지 않은 단어
            return '☆';
        }else{
            return '★';
        }
    },
    wordList: function(){   //이 기사에 추가된 단어 목록
        var article_id = FlowRouter.getParam('_id');
        return DB_WORDS.findAll({article_id:article_id});
    },



});

Template.articleWord.events({

    //단어 검색했을때 단어 띄우는 함수 (임시 사전)
    'click #btn-wordSearch': function(){
        var searchWord = $('#inp-wordSearch').val();
        Session.set('searchWord', searchWord);
    },

    //즐겨찾기 버튼에 대한 함수
    'click #btn-wordSave': function(){  //단어장에 추가(저장)하는 버튼
        var searchWord = Session.get('searchWord');   //현재 검색된 단어 가져오기
        var user_id = Meteor.user()._id;//유저의 _id 가져오기
        var article_id = FlowRouter.getParam('_id');   //기사의 _id 가져오기

        //단어를 아직 검색하지 않았을 경우 예외처리
        if(!searchWord){  //단어를 검색하지 않았을때 즐겨찾기 버튼 안보이게하는 작업 필요.
            alert("X")
            return;
        }

        // findOne selector : 단어, 유저, 기사
        var word = DB_WORDS.findOne({word: searchWord, article_id: article_id});
        // 현재 단어가 DB에 저장되있는지 확인
        // word에는 null 또는 해당 단어의 object가 들어간다 (key, value의 묶음 배열)

        function getToday(){
            var date = new Date();
            return (date.getMonth()+1).toString()+"."+date.getDate().toString();
        }

        if(!word){   //null인 경우 - 단어가 저장되지 않았을경우
            DB_WORDS.insert({
                word: searchWord,
                date: getToday().toString(),
                createdAt : new Date(),
                user_id : user_id,
                article_id: article_id,
            });
            alert("저장");
        }else{  //DB에 이미 있는 경우 - 삭제
            DB_WORDS.remove({_id: word._id}); //remove는 selector가 무조건 _id여야 함
            alert("삭제");
        }


    },

    //단어목록에 삭제버튼에 대한 함수
    'click #word_delete': function(){



    }
});