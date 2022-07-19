
function showPt2(){
    var showResult;
    var mark1 , mark2,so1,so2;
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
   if(b < 0){
       mark1 = '-';
       so1 = Math.abs(b);
   }else{
       mark1 ='+'
       so1 = Math.abs(b);
   }
   if(c < 0){
       mark2= '-';
       so2 = Math.abs(c);
   }else{
       mark2 ='+';
       so2 = Math.abs(c);
   }
   var showPt2 = `${a}x<sup>2</sup> ${mark1} ${so1}x ${mark2} ${so2} =0`;
   document.getElementById('show-container-heading').innerHTML = showPt2 ;
    var delta = Math.pow(b,2) - 4*a*c;
    
    if(delta < 0){
        var heading = 'phương trình vô nghiệm';
        showResult=`<div class="pt2__container--show-heading">${heading}</div>`;
    }else if(delta == 0){
       var x0 = -b / (2*a);
       var heading= 'phương tình có nghiệm kép';
       showResult=`<div class="pt2__container--show-heading">${heading}</div>
                       <div class="pt2__container--show-result"> x0 = ${x0.toFixed(2)}</div>`;
    }else{
        var heading='phương trình có 2 nghiệm';
        var  x1 = (-b + Math.sqrt(delta))/(2*a);
        var x2 =  (-b - Math.sqrt(delta))/(2*a);
         showResult=`<div class="pt2__container--show-heading">${heading}</div>
                      <div class="pt2__container--show-result"> x1 = ${x1.toFixed(2)}</div>
                      <div class="pt2__container--show-result"> x2 = ${x2.toFixed(2)}</div>`;
    };
    var input = document.getElementById('pt2--container-has--result');
    input.className = 'pt2--container-show'
    document.getElementById('pt2--container--result').innerHTML=showResult;
}
function inputPt2(){
    var input = document.getElementById('pt2--container-has--result');
    input.className = 'pt2--container-input pt2--container-show'
}
var user = {
    name : null,
    scores : null,
}
function student (){
    do{
        user.name = prompt('nhập tên ');
        if(!isNaN(user.name)){
            confirm('nhập sai nhập lại')
        }
    }while(!isNaN(user.name));
    do{
        user.scores = prompt('nhập điểm')
        if(isNaN(user.scores)){
            confirm("nhập sai nhập lại");
        }
    }while(isNaN(user.scores));
    
        var evaluate;
        if(user.scores < 5 ){
            evaluate = `yếu`
        }else if(user.scores < 6){
            evaluate = `trung bình`
        }else if(user.scores < 8){
            evaluate = `khá`
        }else {
            evaluate =`giỏi`
        }
    document.getElementById('info-container--item-name').innerHTML=user.name;
    document.getElementById('info-container--item-scores').innerHTML=user.scores;
    document.getElementById('info-container--item-evaluate').innerHTML = evaluate;
    
}

