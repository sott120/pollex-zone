const cenIcon = document.querySelectorAll('.icon');
const cenImg = document.querySelectorAll('.cen_img');

cenIcon[0].addEventListener('mouseover',imgOn1);
cenIcon[1].addEventListener('mouseover',imgOn2);
cenIcon[2].addEventListener('mouseover',imgOn3);


function imgOn1(){
    cenImg[0].classList.add('on');
    cenImg[1].classList.remove('on');
    cenImg[2].classList.remove('on');
}
function imgOn2(){
    cenImg[0].classList.remove('on');
    cenImg[1].classList.add('on');
    cenImg[2].classList.remove('on');
}

function imgOn3(){
    cenImg[0].classList.remove('on');
    cenImg[1].classList.remove('on');
    cenImg[2].classList.add('on');
}

// cenIcon[n].addEventListener('mouseover',imgOn);
// function imgOn(n){
//     cenImg[0].classList.remove('on');
//     cenImg[1].classList.remove('on');
//     cenImg[2].classList.remove('on');
//     cenImg[n].classList.add('on');
// }