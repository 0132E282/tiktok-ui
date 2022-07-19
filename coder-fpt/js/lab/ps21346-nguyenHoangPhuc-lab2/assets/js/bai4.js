
var slx =sessionStorage.getItem('luotxem');
if(slx==null)slx = 0;
slx++;
sessionStorage.setItem('luotxem',slx);
document.getElementById('slx').innerHTML=slx;