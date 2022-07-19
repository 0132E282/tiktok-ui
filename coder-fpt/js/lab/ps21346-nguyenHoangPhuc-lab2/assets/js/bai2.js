var h = new Date();
var name = 'nguyễn hoàng phúc';
var email = 'hoc@gmail.com';
var hello;
var hours = h.getHours();
if(hours < 12){
    hello = 'chào buổi sáng';
}else{
    hello = 'chào buổi chiều';
}
document.getElementById('name').innerHTML=name;
document.getElementById('email').innerHTML=email;
document.getElementById('hello').innerHTML=hello;