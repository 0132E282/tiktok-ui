// kiểm tra sản phẩm
function testProduct(value){
    var errorProduct = document.querySelector('.sp__error')
    if(!isNaN(value.value)){
       errorProduct.innerText = 'bạn nhập sai nhập lai';
       errorProduct.style.display='block';
       value.value = ''
    }else{
        errorProduct.style.display='none'
    }
 }
//  test list product
function testListProduct(date){
    var listProduct = document.querySelector('.lsp-error');
    console.log(listProduct)
    if(date.value.length){
        if(date.value.length == 1){
            listProduct.innerText ='chưa chọn sản phẩm'
            listProduct.style.display='block';
        }else{
            listProduct.style.display='none'
        }
    }
}
// test product price 
function testPrice(price){
    var errorPrice = document.querySelector('.price--error')
    if(isNaN(price.value)){
        price.value = ''
        errorPrice.style.display='block'
    }else if(price.value < 0){
        price.value = ''
        errorPrice.style.display='none'
    }
}
// test checkbox
function testRadio(boolean){
   var priceShipper = document.getElementById('vc')
   if(boolean.checked){
     priceShipper.style.display='block'
   }else{
     priceShipper.style.display='none'
   }
}
// test all 
function testAll(){
    var inputs = document.getElementsByClassName('input--text');
    var errors = document.getElementsByClassName('error');
    var checkbox = document.querySelectorAll('.input--checkbox');
    var test = false;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value.length<1){
            errors[i].innerHTML='chưa nhập thông tinh'
            errors[i].style.display='block'
            test = false;
        }else{
            errors[i].style.display='none'
            test =true;
        }
    }
    var inputRadio = document.querySelectorAll('.input--checkbox');
    var testError = document.querySelector('.error__radio')
   for(var i =0;i<inputRadio.length;i++){
       if(inputRadio[i].checked){
           testError.style.display='none'
           break
       }else{
          testError.innerText ='chưa nhập thông tin';
          testError.style.display='block'
       }
   }
    return test
}