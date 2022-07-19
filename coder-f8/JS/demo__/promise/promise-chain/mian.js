function demo1(){
    var promise = new Promise(function(resolve,reject){
        resolve()
    })
    // tính chất chuổi có thể nhiều chuổi 
    promise 
            .then(function(){
                return 1
                // neu ko return chả về undefined
            })
            // chuyen giá trịnh vào date 
            .then(function(date){
                console.log(date);
                return date + 3;
            })
            .then(function(date){
                console.log(date)
            })
}
function demo2(){
    var promise = new Promise(function(resolve){
        resolve()
    })
    promise
           .then(function(){
               // chả về promise 
               return new Promise(function (resolve){
                   setTimeout(resolve,1000) //1
               })
           })
           // this .the chính là .the của promise 1
           .then(function(data){
               console.log(data);
           })
}
demo2()