var amount = 1;
var price = document.querySelector('.product__price-buy').getAttribute('data-price');
var amounts= document.querySelector('.amount__input--input-text');
var i=0 ;
function inputAmount(inputAmount){
    if(inputAmount=='+'){
        i++
    }else {
        i--;
        if (i < 0) {
            i = 0
        }
    }
    amount =+ i;
    amounts.value=amount;
    tolePrice(price *  amounts.value)
}
amounts.value=amount;
inputText = document.querySelector('input[class="amount__input--input-text"]')
inputText.oninput = function (e){
    tolePrice(e.target.value*price)
}
function tolePrice(price){
    var tole = document.querySelector('.payment__total-price--money');
     tole.innerHTML =price+'₫'
}
// bài 2 
function them(button){
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnDate= row.getElementsByTagName('button')[0];
    btnDate.innerHTML='xóa';
    btnDate.setAttribute('onclick','removed(this)')
    document.getElementById('cart').appendChild(row);
    tong()
}
function removed(button){
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row)
    tong()
}

function tong(){
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("tr");
    var tong = 0;
    for (var i=0;i< rows.length;i++){
        var price = rows[i].children[2].innerText;
        price=parseInt(price);
        tong+= price;
        console.log(tong)
    }
    document.getElementById("total-money").innerHTML = tong
}
function datt(obj){
    var row = obj.parentElement.parentElement;
    var btn = row.getElementsByTagName("button")[0];
    btn.disabled =! btn.disabled
}
// bài 3 
var flag = true;
var count = 0;
function mark(index){
    var button = document.getElementsByClassName("caro__body-box")[index];
    button.innerText = flag ? "x":"o";
    button.style.background= flag? "aqua":"yellow";
    button.setAttribute("disabled","true");
    flag = ! flag; 
    this.count ++;
    console.log(count)
}
// bai 4
function check(){
    arr=document.getElementsByName("name");
    var kq = document.querySelector("button");
    var dem = 0;
    kq.innerHTML =""
    for(i=0;i<arr.length;i++){
        if(arr[i].checked){
            var v = arr[i].value;
            var chu = document.createTextNode(v);
            var tagp = document.createElement("p");
                tagp.appendChild(chu);
                kq.appendChild(tagp)
                dem++;
        }
    }
    if(dem>0) kq.className="abc"
    else kq.innerHTML="bạn chưa chọn mục nào";
    kq.className='xzy';
}
