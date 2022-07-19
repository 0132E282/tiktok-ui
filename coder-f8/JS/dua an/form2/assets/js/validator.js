const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function validator(formSelector){
    var _this = this;
    /// handle when get parent 
    function getParent(element,selector){
     
        while(element.parentElement){
            
            if(element.parentElement.matches(selector)){
               
                return element.parentElement;
            }
           element =  element.parentElement;
        }
    }
    // create object formRules
    const formRules = {}
    /**
     * quy ước  rule
     * -nếu lỗi thì return 'error message';
     * -nếu không có thì return 'undefined'
     */

    var validatorRules ={
        required : function(value){
            return value? undefined : 'vui lòng nhập trường nầy';
        },
        email : function(value){
            const regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'email nhập không chín sát';
        },
        min : function(min ){
            // use function in function
            return function(value){
                return value.length >= min ? undefined : 'độ dài ký tự không đủ ' ;
            }
        },
        max : function(max ){
            // use function in function
            return function(value){
                return value.length <= max ? undefined : 'độ dài ký tự không đủ' ;
            }
        }
    }
    // get id form in dom ~formSelector~
    const formElement =$(formSelector);
    // if has formElement exam handle formELement else return null
    if(formElement){
        var ruleInfo;
        var inputs = $$('[name][rules]');
        for(var input of inputs){
            // get properties rules if have  split sting becomes object 
            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules ){
                // includes kiểm tra chuổi chả về boodle
                let isRuleHasValue =rule.includes(':');

              if(isRuleHasValue){
                   ruleInfo = rule.split(":")
                  rule= ruleInfo[0]
              }
              var ruleFunc = validatorRules[rule];
              if(isRuleHasValue){
                ruleFunc = ruleFunc(ruleInfo[1])
              }
              /**
               * trạng thai mặt định formRule không phải là array nên nó lọt vào đk 2
               * nếu formRule là một array thì  validatorRules[rule] được thêm vào
               *  và ngược lại nó trở thành một array
               */
              if(Array.isArray(formRules[input.name])){
                formRules[input.name].push(ruleFunc);
              }else{
                formRules[input.name] = [ruleFunc];
              }
            }
            // lắng nghe các sự kiện để validator
            input.onblur = handleValidate
            input.oninput = handleClearError;
        }  
        function handleValidate(event){
            var rules = formRules[event.target.name]
            for(var rule of rules ){
                errorMessage = rule(event.target.value)
                if(errorMessage){
                    break
                }
            }
            if(errorMessage){
               var formGround =  getParent(event.target,'.from--ground');
             
               if(formGround){
                formGround.classList.add('invalid')
                   var formMessage = formGround.querySelector('.form--ground__error')
                   if(formMessage){
                       formMessage.innerText = errorMessage;
                       
                   }
               }
            }
            return errorMessage
        }
        function handleClearError (event){
            var formGround =  getParent(event.target,'.from--ground');
            if(formGround.classList.contains('invalid')){
                formGround.classList.remove('invalid');
                var formMessage = formGround.querySelector('.form--ground__error')
                if(formMessage){
                    formMessage.innerText = ' ';
                    
                }
            }
            // handle event submit
            formElement.onsubmit = function (event){
                
                event.preventDefault();
                var isValid = true;
                var inputs = $$('[name][rules]');
                for(var input of inputs){
                    if(handleValidate({target : input})){
                        isValid = false;
                    }
                }
                if(isValid ){
                   if(typeof _this.onsubmit === 'function'){
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
                        _this.onsubmit(formValues)              
                   }else{
                       formElement.onSubmit()
                   }
                }
            }
        }
    }
}