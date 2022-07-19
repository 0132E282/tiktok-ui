function testName(name){
    var errorName = document.querySelector('.error--name')
    if(name.length < 3|| name.length > 30){
        errorName.innerHTML ='tên bạn không tìm thấy';
        errorName.style.display='block';
    }else if(!isNaN(name)){
        errorName.innerHTML ='không thể thêm số';
        errorName.style.display='block';
    }else{
        errorName.style.display='none';
    }
}
function testCMND(cmnd){
    var testCMND = document.querySelector('.error--cmnd');
    if(cmnd.length > 15||CMND.length < 9){
        testCMND.innerHTML='không tìm thấy';
        testCMND.style.display='block'
    }else if(isNaN(cmnd)){
        testCMND.innerHTML='';
    }else{
        testCMND.style.display='none'
    }
}
function testAll(){
    var testAll = document.querySelectorAll('.testall');
    console.log(testAll)
    var errorAll = document.querySelectorAll('.error') 
    for(var i =0;i<testAll.length;i++){
        if(testAll[i].value.length<1||testAll[i].value==0){
            errorAll[i].innerHTML='chưa nhập thông tinh';
            errorAll[i].style.display='block'
        }else{
            errorAll[i].style.display='none'
        }
    }
}