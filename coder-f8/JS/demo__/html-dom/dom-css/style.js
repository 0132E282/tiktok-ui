

// dom style
var boxElement =document.querySelector ('.box');
boxElement.style.width = '300px';
boxElement.style.height = '300px';
boxElement.style.backgroundColor= 'red';
Object.assign(boxElement.style,{
    width : '200px',
    height : '200px',
    backgroundColor:'yellow'
})