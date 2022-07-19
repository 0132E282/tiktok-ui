const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.header__navbar--item');
const tabPane = $$('.table-ul__body--pane-item');
const tabActive =$('.header__navbar--item.active');
const line = $('.line');
line.style.left=tabActive.offsetLeft + 'px';
line.style.width=tabActive.offsetWidth +'px';
console.log([tabActive])
tabs.forEach((tab,index) => {
   const pane = tabPane[index]
    tab.onclick=function(){
        $('.table-ul__body--pane-item.active').classList.remove('active');
        $('.header__navbar--item.active').classList.remove('active');
        line.style.left=this.offsetLeft + 'px';
        line.style.width=this.offsetWidth +'px';
        this.classList.add('active');
        pane.classList.add('active')
    }
});
