var name =prompt('nhap ten');
var date = new Date();
var DateOfDirth = prompt('nhap nam sinh');
if(DateOfDirth > date.getFullYear()){
    confirm('lỗi năm sinh');
}
var age = date.getFullYear(2) - DateOfDirth;
document.getElementById('name').innerHTML=name;
document.getElementById('Date-of-birth').innerHTML=DateOfDirth;
document.getElementById('age').innerHTML=age;