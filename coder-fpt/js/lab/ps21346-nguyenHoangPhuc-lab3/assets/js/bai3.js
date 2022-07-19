var so1 =null;
var so2 = null;
var kq = null;
var pt = null;
function ganSo(x){
    if( so1 == null){
        so1 = x;
        document.getElementById('so1').innerHTML = so1;
    }else if(pt !=null){
         so2 = x;
         document.getElementById('so2').innerHTML = so2;
    }
};
function ganPT(x){
    if(x == 'x'&& so1 !=null)
    pt = 'x';
    if(x == '-'&& so1 !=null)
    pt = '-';
    if(x == '+'&& so1 !=null)
    pt = '+';
    if(x == '/'&& so1 !=null)
    pt = '/';
    document.getElementById("pt").innerHTML = pt;
}
function giaipt(){
    if(pt  == 'x')kq = so1 * so2;
    if(pt  == '-')kq = so1 - so2;
    if(pt  == '+')kq = so1 + so2;
    if(pt  == '/')kq = so1 / so2;
    document.getElementById('kq').innerHTML = '= '+kq;
    console.log(kq);
}
function clean(){
    so1 = null;
    document.getElementById('so1').innerHTML = so1;
    so2 = null;
    document.getElementById('so2').innerHTML = so2;
     kq = null;
    document.getElementById("kq").innerHTML = kq;
     pt = null;
    document.getElementById("pt").innerHTML = pt;
}
