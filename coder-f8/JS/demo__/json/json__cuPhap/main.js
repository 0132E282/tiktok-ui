// json  là một định dạng dữa liệu (chuổi ) 
//  nó có thể viết trên giấy ,mấy tính miễn đúng cú pháp
//  JavaScript Object Notation  
//  json thể hiện được kiểu dữ String,Number ,Boolean,null,Array,object
// 2 thao tác stringify(chuyển đổi nó sang) / parse(chuyển đổi lại ban đầu);

var jsonArray='["javascript","ruby"]';
var jsonObject='{"name":"son dang","age":"18"}';
var jsonNumber ='1';// các định dạn nó làm y trang vậy
var jsonString ='"string123"'
console.log(JSON.parse( jsonString))
console.log(JSON.stringify(typeof true))
