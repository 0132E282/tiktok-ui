var r;
do{
    r=prompt("nhap ban kinh");
    if(isNaN(r)== true){
        alert('nhap sai nhap lai');
    }
}while(isNaN(r)==true);
var pi = 3.14;
dienTich = r*r * pi;
document.getElementById('dt').innerHTML=dienTich;