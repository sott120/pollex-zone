//호버시 이미지,텍스트 변경
const cenIcon = document.querySelectorAll('.icon');
const cenImg = document.querySelectorAll('.cen_img');
const cenTxt = document.querySelectorAll('.centxt');
const iconTxt = document.querySelectorAll('.icon_txt');

cenIcon.forEach(function (li) {
    li.addEventListener('mouseover', function (e) {
        let num = e.currentTarget.dataset.num;
        imgOn(num);
    });
});

function imgOn(n) {
    cenImg[0].classList.remove('on');
    cenImg[1].classList.remove('on');
    cenImg[2].classList.remove('on');
    cenImg[n].classList.add('on');
    cenTxt[0].classList.remove('on');
    cenTxt[1].classList.remove('on');
    cenTxt[2].classList.remove('on');
    cenTxt[n].classList.add('on');
    iconTxt[0].classList.remove('on');
    iconTxt[1].classList.remove('on');
    iconTxt[2].classList.remove('on');
    iconTxt[n].classList.add('on');
}

//스크롤시 네모배너 애니메이션
const squareWrap = document.getElementById('squareWrap');
const aniBox = document.querySelectorAll('.aniBox');

function squareCont() {
    for (i = 0; i < aniBox.length; i++) {
        if (window.innerHeight > aniBox[i].getBoundingClientRect().top + 100) {
            aniBox[i].classList.add('gogo');
        }
    }
}

window.addEventListener('scroll', squareCont);

//햄버거메뉴 클릭
const ham = document.getElementById('ham');
const hamChild = ham.childNodes;
const logoColor = document.getElementsByClassName('logo_color')[0];
const logoWhite = document.getElementsByClassName('logo_white')[0];
const menuWrap = document.getElementsByClassName('allMenuWrap')[0];

ham.addEventListener('click', hamClick);

function hamClick() {
    if (ham.classList.contains('active') === true) {
        ham.classList.remove('active');
        logoColor.style.opacity = 1;
        logoWhite.style.opacity = 0;
        menuWrap.style.display = 'none';
    } else {
        ham.classList.add('active');
        logoColor.style.opacity = 0;
        logoWhite.style.opacity = 1;
        menuWrap.style.display = 'block';
    }
}

//네비게이션 리스트 클릭
const test = document.querySelectorAll('.mTitle');

let i;
// test[0].addEventListener('click', function () {
//     mToggle[0].classList.toggle('active');
// });

for (i = 0; i < test.length; i++) {
    test[i].addEventListener('click', function () {
        const mToggle = document.querySelectorAll('.mToggle');
        mToggle[0].classList.add('active');
        console.log(mToggle[0]);
        if (mToggle[0].style.maxHeight) {
            mToggle[0].style.maxHeight = null;
        } else {
            mToggle[0].style.maxHeight = mToggle[0].scrollHeight + 'px';
        }
    });
}
