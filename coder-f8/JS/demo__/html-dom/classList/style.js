/**
 * classList chả về đối tượng DOMTokeList
 * quản lí element
 * thuột tính cơ bản
 * add : thêm class vào element
 * contains : kiểm tra class có hây không
 * remove : xóa class khỏi element 
 * toggle : nếu có trong class thì xóa bỏ và không có thì thêm vào
 */
var boxElement = document.querySelector('.box');
// add
boxElement.classList.add('red')
//contains chả về boolean
console.log(boxElement.classList.contains('red'))
// remove
setTimeout(function(){
    boxElement.classList.remove('red')
},3000)
// toggle
 var result = setInterval(() => {
    boxElement.classList.toggle('red')
}, 1000);