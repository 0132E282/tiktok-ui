var users = [
    {
        id : 1,
        name : 'nguyễn hoàng phúc'
    },
    {
        id : 2,
        name : 'lê thị trúc'
    },
    {
        id : 2,
        name : 'huỳnh thị thu thảo'
    }
];
var comments = [
    {
        id : 1,
        user__id: 2,
        content : "e ! tảo nói mầy nghe "
    },
    {
        id : 2,
        user__id: 1,
        content : "nói gì ? nói đi tao nghe"
    },
    {
        id : 3,
        user__id: 2,
        content : "tao thích mầy đấy ! mầy làm người yêu tao nhe"
    },
    {
        id : 4,
        user__id: 1,
        content : "..."
    }
]
function getComment(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments)
        },1000)
    })
}
function getUsersById(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        })
        setTimeout(function(){
            resolve(result)
        },1000)
    })
}
getComment()
           .then(
               function(comments){
                   var userIDs  = comments.map(function(comments){
                       return comments.user__id
                   })
                  return getUsersById(userIDs)
                        .then(function(users){
                            return {
                                user : users,
                                Comment : comments
                            }
                        })
               })
            .then(function(data){
                var commentBlock = document.getElementById("comment-block");
                var html ='';
                data.Comment.forEach(function(comment){
                    var user = data.user.find(function(user){
                        return user.id === comment.user__id;
                    })
                    console.log(comment)
                    html+=`<li>${user.name} : ${comment.content} </li>`;
                });
                commentBlock.innerHTML = html
            })
            