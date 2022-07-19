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