function randomSome(){
    var a = Math.round( Math.random()*(10+10+1))+-10;
    var b = Math.round( Math.random()*(10+10+1))+-10;
    var c = Math.round( Math.random()*(10+10+1))+-10;
    document.getElementById("a").value=a;
    document.getElementById('b').value = b;
    document.getElementById('c').value = c;
    var btn =document.getElementById("answers");
    btn.disabled= false;
    btn.className = 'button--answers btn';
}
var buttonAnswers = document.querySelector('.button--answers');
buttonAnswers.onclick=function(e){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    pt2Bai1(a,b,c)
}
function pt2Bai1(a,b,c){
    var showResult;
     delta = Math.pow(b,2) - 4*a*c;
    if(delta < 0){
        var heading = 'phương trinh vô nghiệm';
        showResult=`<div class="pt2__container--show-heading">${heading}</div>`;
    }else if(delta == 0){
       var x0 = -b / (2*a);
       var heading= 'phương trinh có nghiệm kép';
       showResult=`<div class="pt2__container--show-heading">${heading}</div>
                       <div class="pt2__container--show-result"> x0 = ${x0.toFixed(2)}</div>`;
    }else{
        var heading='phương trình có 2 nghiệm';
        var  x1 = (-b + Math.sqrt(delta))/(2*a);
        var x2 =  (-b - Math.sqrt(delta))/(2*a);
         showResult=`<div class="pt2__container--show-heading">${heading}</div>
                      <div class="pt2__container--show-result"> x1 = ${x1.toFixed(2)}</div>
                      <div class="pt2__container--show-result"> x2 = ${x2.toFixed(2)}</div>`;
    };
    document.getElementById('result').innerHTML=showResult;
}
var slg = 0;
function showSome(){
    slg ++;
    document.getElementById('slg').innerHTML=slg;
}
function date(){
    var date = new Date();
    var showDate = `thời gian : ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    document.getElementById('date_show').innerHTML = showDate;
}
setInterval("date()",1000);
// bai 2 
var imgs = [
    'background1',
    'background2',
    'background3',
    'background4',
    'background5',
    'background6',
]
var index =0;
function changeImgs (value){
    if(value){
        if(value == '+'){
            index ++;
         }else{
             index --;
         }
    }else{
        index++
    }
    if(index >= imgs.length ){
        index =0;
    }else if(index <0){
        index = imgs.length-1
    }
    var imgBanner = document.querySelector('.bai2__img');
    var imgElement = ` <div class="bai2__img-banner ${imgs[index]}"></div>`
    imgBanner.innerHTML = imgElement;
}
setInterval('changeImgs()', 5000);
// bai3 
bai3T();
function bai3T(){
    var inputCheckBoxs = document.getElementsByClassName('tablter__row-col__input-check-box');
    var inputTexts = document.getElementsByClassName("tablter__input-text");
    var filters = document.getElementsByClassName('body--filter-list');
    var buttonDelete = document.querySelector('.body--filter-detele');
    for(let i = 0 ; i < filters.length;i++){
        filters[i].onchange = function(e){
            filtersProduct(e.target.value,i)
        }
    }
    buttonDelete.onclick = function(e){
        var tabletRowsAll = document.getElementsByClassName('tablter__row');
        for(var i=1;i<tabletRowsAll.length;i++){
            tabletRowsAll[i].style.display='revert'
        }
        errorFiltersAll(true)
    }
     function filtersProduct(info,i){
         var errorFilter = true;
         if(i==0){
            filterPrice(errorFilter,info)
        }else{
            filterProductName(errorFilter,info)
       }
     }
     function filterPrice(errorFilter,price){
        var tabletRow = document.getElementsByClassName('tablter__row');
        var productPrice = document.getElementsByClassName('table__col-price');
        for(var i=0;i< productPrice.length;i++ ){
            if(price.length<2){
                for(var i =0;i<tabletRow.length;i++){
                    tabletRow[i].style.display='revert';
                     errorFilter = true;
                }
            }else if(price=='800-1000' ){
                    if(Number(productPrice[i].innerText) >= 800 && Number(productPrice[i].innerText) <= 1000){
                        tabletRow[i+1].style.display='revert';
                    }else{
                        errorFilter = false;
                    }
            }else if(price=='400-800'&&Number(productPrice[i].innerText) >= 400 && Number(productPrice[i].innerText) <=800){
                if(Number(productPrice[i].innerText) >= 400 && Number(productPrice[i].innerText) <=800){
                    tabletRow[i+1].style.display='revert'
                  }else{
                    errorFilter = false;
                  }
            }else if(price=='200-400'&&Number(productPrice[i].innerText) >= 200 && Number(productPrice[i].innerText) <=400){
                if(Number(productPrice[i].innerText) >= 200 && Number(productPrice[i].innerText) <=400){
                    tabletRow[i+1].style.display='revert'
                  }else{
                    errorFilter = false;
                  }
            }else if(price=='100-200'&& Number(productPrice[i].innerText) <=200){
                if(Number(productPrice[i].innerText) <=200){
                    tabletRow[i+1].style.display='revert'
                  }else{
                    errorFilter = false;
                  }
            }else{
               tabletRow[i+1].style.display='none'
            }
        }
        errorFiltersAll(errorFilter,tabletRow)
     }
     function filterProductName(errorFilter,name){
        errorFilter=false;
        var tabletRow = document.getElementsByClassName('tablter__row');
        var productName = document.getElementsByClassName("table__col--name-product");
        for(var i =0;i<productName.length;i++){
            if(productName[i].value ==' '){
                for(var i =0;i<tabletRow.length;i++){
                    tabletRow[i].style.display='revert';
                }
                errorFilter=true;
            }else if(productName[i].getAttribute('name').search(name)>-1){
                   tabletRow[i+1].style.display='revert';
                   errorFilter=true;
            }else{
                  tabletRow[i+1].style.display='none';
            }
           
        }
       
        errorFiltersAll(errorFilter,tabletRow)
     }
     function errorFiltersAll(boodle,tabletRow){
        if(boodle==false){
            document.querySelector(".bai3__filter--error").textContent='không tìm thấy sản phẩm';
            for(var i =0;i<tabletRow.length;i++){
                tabletRow[i].style.display='revert';
            }
         }else{
          document.querySelector(".bai3__filter--error").innerText=' ';
         }
     }

    for(let  i= 0;i < inputCheckBoxs.length;i++){
        inputCheckBoxs[i].onchange=function(e){
            checkedInputTextDisabled(e.target.checked,inputTexts[i])
        }
        inputTexts[i].onchange = function(e){
            totalMoney(e.target.value,i)
        }
    }
    function checkedInputTextDisabled(value,element){
        if(value){
           element.disabled=false
        }else{
           element.disabled=true
        }
    }
    var totalMoneys = 0
    function totalMoney(inputTexts,i){
        var money = document.getElementsByClassName('table__col-price');
        var tones = document.getElementsByClassName('table__col-tones');
        var errors = document.getElementsByClassName('tablet__col--error');
        if(isNaN(inputTexts)){
            errors[i].innerHTML="thất bại ! "
            inputTexts=0
        }else if(inputTexts<0){
            inputTexts = 0
        }
        totalMoneys = Number(money[i].innerText * inputTexts); 
        console.log(totalMoneys)
        tones[i].innerHTML=totalMoneys
        receipt()
    }
    function receipt(){
        var tonesProduct = document.getElementsByClassName('table__col-tones');
        var tonesReceipt= 0
        for(var i =0 ;i<tonesProduct.length;i++){
            tonesReceipt+=Number(tonesProduct[i].innerText);
        }
        var format = tonesReceipt.toFixed(3).replace(/ (\d)(?=(\d{3})+\.)/g,"1.");
        document.querySelector('.receipt__heading-tones--money').innerHTML=format +' VND';
    }
}
// bài 4
var inputBody = document.querySelector('body')
var lastNames = document.querySelector('.input__name--tile-lastName');
var filterNames = document.querySelector('.input__name--tile-filterName');
var inputID = document.querySelector('.input--text-id');
var inputEmail = document.querySelector('.input__name-email');
var InputNationality =document.querySelector('.nationality--item--input');
// hàm gội họ và tên
lastNames.onchange =function(e){
    var testName = document.querySelector('.input__name--item-test-lastName');
    var inputName = document.querySelector('.input--text-name-last')
    errorsTest(e.target.value,inputName,testName)
}
// hàm gội tên 

filterNames.onchange = function(e){
    var inputName =document.querySelector('.input--text-name-filter');
    var  testName = document.querySelector('.input__name--item-test-filterName');
    errorsTest(e.target.value,inputName,testName)
}
// hàm test tên
function errorsTest(element,inputName,testName){ 
    if(element==' '){
        testName.innerHTML = "không được để chống";
        Object.assign(testName.style,{
            border : '1px solid red',
            display : 'block'
        })
        Object.assign(inputName.style,{
            border : '1px solid red'
        })
        testAll(false)
    }else if(element.length > 30){
        testName.innerHTML = "độ đồ qài vượt giới han !";
        Object.assign(testName.style,{
            border : '1px solid red',
            display : 'block'
        })
        Object.assign(inputName.style,{
            border : '1px solid red'
        })
        testAll(false)
    }else if(!isNaN(element)){
        testName.innerHTML = "không ký tự đặt biệt !";
        Object.assign(testName.style,{
            border : '1px solid red',
            display : 'block'
        })
        Object.assign(inputName.style,{
            border : '1px solid red',
        })
        testAll(false)
    }else {
        testName.innerHTML = "thành công ";
        Object.assign(testName.style,{
            border : '1px solid #7fff00',
            display : 'block'
        })
        Object.assign(inputName.style,{
            border : '1px solid #7fff00',
        })
        success = true;
        console.log( success )
        testAll(true)
    }
    testAll(false)
}
// sự kiện event id
inputID.onchange = function(e){
    var inputStyleId = document.querySelector('.input--text-id')
    var inputTestId = document.querySelector('.input__name--item-test--id')
    errorsTestID(e.target.value,inputStyleId,inputTestId)
}
// hàm test id
function errorsTestID(value,styleInput,error){
    var id = /^ps[1-9]{5}/
    if(value == ""){
        error.innerHTML = 'không để trống';
        Object.assign(error.style,{
            display : 'block',
            border : '1px solid red'
        })
        Object.assign(styleInput.style,{
            display : 'block',
            border : '1px solid red'
        })
        testAll(false)
    }else if(!id.test(value)){
        error.innerHTML = 'không tìm thấy mã sinh viên';
        Object.assign(error.style,{
            display : 'block',
            border : '1px solid red'
        })
        Object.assign(styleInput.style,{
            display : 'block',
            border : '1px solid red'
        })
        testAll(false)
    }else{
        error.innerHTML = 'thành công';
        Object.assign(error.style,{
            display : 'block',
            border : '1px solid  #7fff00'
        })
        Object.assign(styleInput.style,{
            display : 'block',
            border : '1px solid  #7fff00'
        })
        testAll(true)
    }
}

inputEmail.onchange = function(e){
    var inputTestEmail = document.querySelector('.input__name--item-test-gmail');
    var inputEmails = document.querySelector('.input--text__type-email')
    testEmail(e.target.value,inputEmails,inputTestEmail)
}
// hàm test email 
function testEmail(value,styleInput,error){
    var email = /\D+ps[1-9]{5}@fpt.edu.vn/
    if(value == ""){
        error.innerHTML = 'không để trống';
        Object.assign(error.style,{
            display : 'block',
            border : '1px solid red',
        })
        Object.assign(styleInput.style,{
            display : 'block',
            border : '1px solid red'
        })
        testAll(false)
    }else if(!email.test(value)){
        error.innerHTML = 'không tìm thấy email';
        Object.assign(error.style,{
            display : 'block',
            border : '1px solid red'
        })
        Object.assign(styleInput.style,{
            display : 'block',
            border : '1px solid red'
        })
        testAll(false)
    }else{
        error.innerHTML = 'thành công';
        Object.assign(error.style,{
            display : 'block',
            border : '1px solid  #7fff00'
        })
        Object.assign(styleInput.style,{
            display : 'block',
            border : '1px solid  #7fff00'
        })
        testAll(true)
    }
}
// hàm ẩn hiện list quốc tịch 
var buttonIcon = document.querySelector('.nationality--item-icon')
  buttonIcon.onclick= function(e){
   var openIcon =document.querySelector('.input__nationality--list')
    openAndClone(openIcon);
    // ! sai không thể none list 
    // removeListNationality()
}
// function removeListNationality(){
//    inputBody.onclick =function(){
//     var openIcon =document.querySelector('.input__nationality--list')
      
//    }
// }
//? hàm ngăng chặng sự kiện mặt dịnh
var nationalityUl =document.querySelector('.input__nationality--list')
nationalityUl.onmousedown =function(e){
    e.preventDefault();
    addFilterList(e.target.value)
}
var InputNationalityTest = false;
InputNationality.onchange =function(e){
    var nationalityList = document.querySelectorAll('.input__nationality--name');
    filterList  (e.target.value,nationalityList);
    testInputNationalityListItem (e.target.value)
}

function filterList (element,list){
    var inputNationalityListItem = document.querySelectorAll('.input__nationality--list--item');
    // ! chưa tìm được cách search ko phân biệt chữ in hoa và chữ thường
    for(let i =0;i<list.length;i++){
       if(list[i].innerText.search(element)>-1){
          inputNationalityListItem[i].style.display='flex'
       }else{
        inputNationalityListItem[i].style.display='none'
       }
    }
}
function testInputNationalityListItem (boolean){
   inputBody.onclick = function(){
    var inputNationalityListItem = document.querySelectorAll('.input__nationality--list--item');
       for(var i= 0;i< inputNationalityListItem.length;i++){
        inputNationalityListItem[i].style.display ='flex'
       }
   }
}
function addFilterList(value){
    var InputNationality =document.querySelector('.nationality--item--input');
     var nationalityLogo = document.querySelector('.input__text--nationality--logo-img');
     var inputNationalityListImg = document.querySelectorAll('.input__nationality--list--item-img');
     var nationalityList= document.querySelectorAll('.input__nationality--list--item');
     console.log(nationalityList)
     var nationalityContent  = document.querySelectorAll('.input__nationality--name');
     for(let i=0;i<nationalityList.length;i++){
        nationalityList[i].onclick = function(){
            imgs = inputNationalityListImg[i].getAttribute('src');
            nationalityLogo.setAttribute('src',imgs)
            InputNationality.value = nationalityContent[i].innerText
        }
     }

}
var moda = document.querySelector('.moda');
function testAll(success){
    var buttonTest = document.querySelector('.button__test')
    var modaImg = document.querySelector('.moda--background__banner--img')
    buttonTest.disabled = false;
    var modaContent = document.querySelector('.moda__content')
    if(success == true){
        buttonTest.onclick = function(e){
            modaContent.innerText = 'thành công';
            openAndClone(moda)
        }
    }else{
        buttonTest.onclick = function(e){
            modaContent.innerText = 'thất bại ';
            openAndClone(moda)
            modaImg.setAttribute('src','./assets/img/logo/Khók.jpg')
        }
    }
}
var buttonComeBack = document.querySelector('.moda__button--come-back')
buttonComeBack.onclick = function(){
    openAndClone(moda)
}
