var start;
function date(){
    var date = new Date();
    document.getElementById("clock-hour").innerHTML = date.getHours();
    document.getElementById("clock-minute").innerHTML =date.getMinutes();
    document.getElementById("clock-moment").innerHTML = date.getSeconds();
}
start = setInterval("date()",1000);
function startStopDH(){
    if(start == null){
        start = setInterval("date()",1000);
    }else{
        clearInterval(start);
        start = null
    }
}
function  showContent(){
    var showClock;
    showClock =  document.getElementById('show-clock');
    showClock.className = 'clock show-clock--container';
}
setTimeout(showContent,10000)