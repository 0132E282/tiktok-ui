function validator(options){
    var selectorRules ={};
    // 
    function getParent(element,selector){
        while(element.parentElement) {
            //element test  has alike(như nhâu ) with selector 
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
   const formElement = document.querySelector(options.form);
  let isInput = false;
   formElement.onsubmit = function(e){
    // remove behavior default
        e.preventDefault();
        let isFormValid = true;
        options.rules.forEach(function(rule){
            const inputElement = formElement.querySelector(rule.selector)
            var isValidate = validate(inputElement,rule,options.errorSelector,isInput);
            if(!isValidate) isFormValid = false 
        });
    //  
        var textHeader =formElement.parentElement.querySelector('.header__text')
        if(isFormValid){
            if(typeof options.onSubmit === 'function' ){
               var enableInput = formElement.querySelectorAll('[name]:not([disabled])');
               const formValues = Array.from(enableInput).reduce(function(values,input){
                  switch(input.type){
                      case 'radio' :
                          // get value input have class name is input.name contains checked 
                        values[input.name] = 
                        formElement.querySelector(`input[name ="${input.name}"]:checked`
                        ).value;
                        break;
                      case 'checkbox':
                          if(!input.matches(':checked')) {
                              values[input.name] = ' ';
                              return values
                          };
                            if(!Array.isArray(values[input.name])){
                                values[input.name] = [];
                            }
                           values[input.name].push(input.value) 
                        break;
                    case 'file':
                        values[input.name] = input.files;
                        break; 
                    default:
                        values[input.name] = input.value
                  }
                return  values;
               },{})
                options.onSubmit(formValues)
            }
        }else{
            textHeader.innerText ='ban da nhap sai'
        }
   }
   options.rules.forEach((rule) => {
       if(Array.isArray(selectorRules[rule.selector])){
        selectorRules[rule.selector].push(rule.test)
       }else{
         selectorRules[rule.selector] = [rule.test];
       }
       const inputElements = formElement.querySelectorAll(rule.selector);
       // change not-list become array and filter each array
       Array.from(inputElements).forEach(function(inputElement){
            // handle rule
            inputElement.onblur =function(){
                this.isInput = false
                validate(inputElement,rule,options.errorSelector,isInput)
            }
            inputElement.oninput = function(){
                this.isInput = true
                validate(inputElement,rule,options.errorSelector,isInput)
            }
            inputElement.onchange = function(){
                this.isInput = true
                validate(inputElement,rule,options.errorSelector,isInput)
            }
       })
   });
  function validate(inputElement,rule,errorSelector,isInput){
    const errorElement = getParent(inputElement,options.formGroupSelector).querySelector(errorSelector);
    let errorTest ;
    const rules = selectorRules[rule.selector];
    for(var i= 0;i<rules.length;++i){
        switch(inputElement.type){
            case 'radio':
            case 'checkbox':
                errorTest= rules[i](
                    formElement.querySelector(rule.selector + ':checked')
                );
              break;
            default :
                errorTest= rules[i](inputElement.value);
        }
         
        if(errorTest){
            break
        }
    }
    if(!isInput){
        if(errorTest){
            errorElement.innerText= errorTest
           getParent(inputElement,options.formGroupSelector).classList.add('invalid')
        }else{
            errorElement.innerText = ' ';
           getParent(inputElement,options.formGroupSelector).classList.remove('invalid')
        }
    }else{
        errorElement.innerText = ' ';
       getParent(inputElement,options.formGroupSelector).classList.remove('invalid')
    }
    return !errorTest;
  }
}
// định nghĩ các rules
// khi có lỗi = > tra ra messae
// không có lội = >  undefined
validator.isRequired =function (selector,message){
    return {
        selector : selector,
        test : function(value){
            return value ? undefined :message|| 'vui lòng nhập vào trường này'
        }
    }
}
validator.isEmail = function(selector,message){
    return {
        selector : selector,
        test : function(value){
            const regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined :message|| 'bạn nhập không chính xác'
        }
    }
}
validator.isMinLength= function(selector,min,message){
    return{
        selector : selector,
        test : function (value){
            return value.length > min ? undefined :message|| `độ dài mật khâu không đủ bảo mật ích nhất ${min}` ;
        }
    }
}
validator.isConfirmValue = function(selector,getConfirmValue,message){
    return {
        selector : selector ,
        test : function(value){
            return value === getConfirmValue()? undefined :message|| 'password nhập không khớp'
        }
    }
}