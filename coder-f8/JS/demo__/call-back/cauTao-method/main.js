// demo reduce cau tao cua reduce
var cauTaoReduce = function(){
    var number = [1,1,3,4];
    Array.prototype.reduce2 = function(callback,result){
        let i = 0 ;
        // neu khong co gia tri  chuyen vao thi gia tri khoi tao se lay gia tri dau tien
        
        if(arguments.length < 2){
            i=1;
            result = this[0];
        }
        for(i ; i<this.length;i++){
            //callback tra lai 4 gia tri gia tri duoc luu , vi tri cua function , thu tu cua function va mang;
            result = callback(result,this[i],i,this);
        }
        return result;
    }
    var tong = number.reduce2(function(cos,index){
        console.log("\n"+index);
        console.log(cos);
    
        return cos + index;
    });
    console.log(tong);
}
// demo forEach cau tao 
function cauTaoForEach(){
    var course =[
        'javascript',
        'java',
        'c++'
    ]
    Array.prototype.foreach2 = function(callback){
        for(var index in this){
            if(this.hasOwnProperty(index)){
                callback(this[index],index,this);
            }
        }
    }
    course.foreach2(function(indexItem,index,fun){
        console.log("indexItem :"+indexItem + "\nindex :"+index+"\nfun : "+fun)
    });
}
//Filter cau tao
products = [
    {
        product : 'shirt',
        price : 200
    },
    {
        product : 'pants',
        price : 200
    },
    {
        product : 'dress',
        price : 200
    }
]
function cautaoFilter(){
    Array.prototype.filter2= function(callback){
      var output=[];
        for(var index in this){
            if(this.hasOwnProperty(index)){
              var previousValue =  callback(this[index],index,this)
              if(previousValue){
                output.push(this[index])
              }
            }
        }
        return output;
    }
    var result =  products.filter2(function(indexItem,index,item){
        return indexItem.price > 200;
    })
    console.log(result);
}
// cau tao some method
function cauTaoSome(){
    Array.prototype.some2 = function(callback){
        for(var index in this){
            if(this.hasOwnProperty(index)){
               if( callback(this[index],index,this)){
                   return true;
               }
            }
        }
        return false;   
    }
   var result =  products.some2(function(indexItem,index,item){
        return indexItem.price < 2000;
    })
    console.log(result)
}
// cau tao every
function cauTaoEvery(){
    Array.prototype.every2 = function(callback){
        var output;
        for(var index in this){
            if(this.hasOwnProperty(index)){
              var result = callback(this[index],index,this);
               if(!result){
                   return false;
               }
            }
        }
        return true;   
    }
   var result =  products.every2(function(indexItem,index,item){
        return indexItem.price < 2000;
    })
    console.log(result)
}
// cau tao find method
function cauTaoMethod(){
    Array.prototype.method2 = function(callback){
        var output;
        for(var index in this){
            if(this.hasOwnProperty(index)){
              var result = callback(this[index],index,this);
               if(result){
                   return this[index];
               }
            }
        }
        return true;   
    }
   var result =  products.method2(function(indexItem,index,item){
        return indexItem.product === 'shirt';
    })
    console.log(result)
}
cauTaoMethod()