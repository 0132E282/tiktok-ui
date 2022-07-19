// khoi tao object
// co 2 gia tri 1 key va value
var myInfo= {
    fullName :'hoang phuc',
    age :21,
    address : 'long an '
};
// constructor 
function demoConstructor(){
    function user (firstName,lastName,avatar){
        this.lastName = lastName;
        this.firstName = firstName;
        this.avatar = avatar;
        this.getName = function(){
            return `${this.firstName} ${this.lastName}`;
        };
    }
    var teacher = new user('nguyen','phuc','avatar');
    var student = new user('ngoc','thach','avatar');
    console.log(teacher);
    // prototype them thuoc tinh ben ngoai ham tao
    user.prototype.Age = 11;
    user.prototype.getAge = function(){
        return this.Age;
    }
}
// date 