// khoi tao cua mang array
// chua tat ca cac du lieu
var languages = [
    'js',
    'php',
    'ruby',
    'dart'
];
var demo1 = function(){
   // kiem tra kieu du lieu dung typeof
  // cach phan biet object vs array dung array.isArray(new Array (chuyen du lieu))
  console.log(Array.isArray(new Array(languages)));
};
// cac phuong thuc co ban
// keyword :javascript array methods
var demoToString = function(){
   // to string chuyen du lieu array san du lieu tring
   console.log(languages.toString());
};
var demoJoin = function(){
    // join bien array thanh mot chuoi
    console.log(languages.join()); // du lieu trien vao la ki tu ngang cach dua cac chuoi
};
var demoPop= function(){
    //pop xoa element cuoi va tra lai gia tri da xoa
    console.log(languages.pop());
    console.log(languages.pop());
    console.log(languages.pop());
    // khi xoa het cac phan tu xe tra ve undefined 
};
var demoPush = function(){
    // them gia gia tri cuoi mang cha ve do dia moi cua mang
    console.log(languages.push('dart'));// co them nhieu phan tu
};
var demoShift = function(){
    // shift xoa di phan tu dau mang giong nhu pop
    console.log(languages.shift());
};
var demoUnshift = function(){
    // unshift them vao phan tu dau mang giong nhu push
    console.log(languages.unshift('dart','hoang'));
};
var demoSplicing = function(){
     // chuyen vao 3 gia tri
     // 1 vi tri dat con cho chuot
     // 2 vi tri ket thuc khi xoa neu chuyen vao 0 thi se khong xoa phan tu nao
     // 3  tro di la cac phan tu thay the 
    languages.splice(1,2,'hoang');
    console.log(languages);
};
var demoConcat = function(){
    var lastName = [
        'hoang'
    ]
    var firstName =[
        'phuc'
    ]
    // noi 2 array thanh 1
    console.log(lastName.concat(firstName));
};
var demoSlice = function(){
    // cat di gia ti mang chuyen vao 2 gia tri 1 gia bat dau va  gia tri ket thuc
    console.log(languages.slice(1,2));// co the chuyen vao gia tri am cat nguoc lai
}
console.log(demoSlice());