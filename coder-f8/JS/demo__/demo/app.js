function a (){
    let counter = 0
    function a1 (){
        b = ++counter
        return  b;
    }
   
    return a1;
}
var q = a();
console.log('result :'+ a())
console.log('result :'+ a())