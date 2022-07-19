
function ngay(){
    for(var i =1;i<=31;i++){
        document.write(`<option value="${i}">${i}</option>`);
    }
}
function thang(){
    for(var i=1;i<=12;i++){
        document.write(`<option value="${i}">${i}</option>`);
    }
}
function nam(){
    var date = new Date();
    for(var i = 1970;i<=date.getFullYear();i++){
        document.write(`<option value="${i}">${i}</option>`);
    }
}