var f0 = Number(prompt("nhap min"));
var f1 =Number(prompt("nhap max"));
function showFibonacy(){
    for(var i =0 ;i<10;i++){
        var f = f0 + f1;
        f0 = f1;
        f1 = f;
    document.write(`<li class="fibonacy-list-item">${f}</li>`);
    };
}