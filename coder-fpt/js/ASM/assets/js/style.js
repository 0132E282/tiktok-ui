var navbarListItems = document.getElementsByClassName('navbar__list-item');
var bai2 = document.querySelector('.bai2');
console.log(bai2)
var pt2 = document.querySelector(".pt2");
var bai3 = document.querySelector(".bai3");
var bai4 = document.querySelector('.bai4');
var banner = document.querySelector('.container__banner');
console.log(banner)
for(var i = 0 ; i in navbarListItems;i++){
   navbarListItems[i].onclick = function(e){
      exercises(e.target.innerText);
      console.log('e')
   }
}
function exercises(value){
   switch(value){
      case 'BÀI TẬP 1':
         openAndClone(pt2);
         removesAll(pt2);
         break;
      case 'BÀI TẬP 2':
         openAndClone(bai2);
         removesAll(bai2);
         break;
      case 'BÀI TẬP 3':
         openAndClone(bai3);
         removesAll(bai3);
         break;
      case 'BÀI TẬP 4':
         openAndClone(bai4);
         removesAll(bai4);
         break;
   }
}
// ham an tat ca
function removesAll(className){
   var removes = document.getElementsByClassName('remove');
   for(var i = 0 ;i < removes.length ; ++i){
      if(removes[i] != className){
         removes[i].classList.remove("open");
      }
   }
}
// ham an va hien
function openAndClone(element){
   if(!element.classList.contains('open')){
     element.classList.add('open')
     banner.classList.add('remove')
   }else{
      element.classList.remove("open")
      banner.classList.remove('remove')
   }
}
