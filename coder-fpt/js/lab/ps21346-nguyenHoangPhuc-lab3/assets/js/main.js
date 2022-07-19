var a =Number( prompt("nhập số a "));
var b =Number( prompt("nhập số b"));
var phepTinh = prompt("nhập phép tính ");
switch(phepTinh){
        case '+':
            var tong =(Number)(a + b);
            document.write(`<div id= "calculation">  tong a + b =${tong} </div>`);      
            break;
        case '-':
            var hieu = a - b;
            document.write(`<div id="calculation">hieu a + b =${hieu}</div>`);
            break;
        case '*':
            var thuong = a*b;
            document.write(`<div id="calculation">thuong a * b = ${thuong}</div>`);
            break;
        default:
            document.write("không phải là phép tính thích hộp")
        break;
    };