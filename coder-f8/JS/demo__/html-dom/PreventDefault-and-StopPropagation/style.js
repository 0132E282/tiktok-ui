// preventDefault : loai bo hanh vi mat dinh html
var aElements = document.querySelectorAll('a');
for(var i = 0 ; i < aElements.length;++i){
    aElements[i].onclick = function(e){
        if(!e.target.href.startsWith('https://google.com.vn')){
            e.preventDefault()
        }
    }
}
// stopPropagation gang chan su kien noi bot
var divElements = document.querySelector('div')
divElements.onclick = function(){
   console.log('a')
}
var buttonElement = document.querySelector('button');
buttonElement.onclick = function (e){
    e.stopPropagation();
    console.log('nut')
}