
function openWindow(){
    w = window.open("thongTin.html","tt","width=400px,height=200px,top=50,right=0")
    w.focus();
}
function closeWindow(){
    w.close();
    w.focus();
}
function diChuyen1chut(){
    w.moveBy(250,10);
    w.focus();
}
function diChuyen(){
    var x = prompt("nhập x");
    var y = prompt("nhập y");
    w.moveBy(x,y);
    w.focus();
}
function fover(){
    var h = document.getElementById("img-itme");
    h.src="./assets/img/images.jpg"
}
function fout(){
    var h = document.getElementById("img-itme");
    h.src="./assets/img/tải xuống.jpg";
}