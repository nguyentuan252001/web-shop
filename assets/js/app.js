
var zoomElement = document.querySelectorAll('.icon__zoom');
var modalElement = document.querySelector('#modal');
var closeElement = document.querySelectorAll('.close')
var zzProduct = document.querySelectorAll('.product__img');
for (let index = 0; index < zoomElement.length; index++) {
    zoomElement[index].onclick = function() {
        modalElement.classList.remove('display');
        zzProduct[index].classList.remove('display-none')
    }

}

for (let index = 0; index < closeElement.length; index++) {
    closeElement[index].onclick = function() {
        modalElement.classList.add('display');
    }
}



var secondsElement = document.querySelector('.seconds').innerHTML;
var minElement = document.querySelector('.min').innerHTML;
var hourElement = document.querySelector('.hour').innerHTML;

var seconds = parseInt(secondsElement);
var minutes = parseInt(minElement);
var hour = parseInt(hourElement);



var countdown = setInterval(() => {
    seconds--;
    document.querySelector('.seconds').innerHTML = seconds;
    if(seconds == 0) {
        seconds = 60;
        minutes--;
        document.querySelector('.min').innerHTML = minutes;
        if(minutes == 0) {
            seconds = 60;
            minutes = 60;
            hour--;
            document.querySelector('.hour').innerHTML = hour;
            clearInterval(countdown);
        }
    }   
}, 1000);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var womenMenu = $$('.women');
var menMenu = $$('.men');
var kidMenu = $$('.kid');
var accMenu = $$('.accsessories');
var acosMenu = $$('.cosmetic');

var menuItemElement = $$('.text-listmenu');

// console.log($$('.men'))
for (let index = 0; index < menuItemElement.length; index++) {

    menuItemElement[index].onclick = function () {

    if(menuItemElement[index].innerHTML == 'All') {
            $('.text-listmenu.active').classList.remove('active');
            menuItemElement[index].classList.add('active');
            $$('.products-item').forEach(element => {
                element.classList.remove('display');
            });
        }   
    // women
    if(menuItemElement[index].innerHTML == "Women’s") {
            
            $('.text-listmenu.active').classList.remove('active');
            menuItemElement[index].classList.add('active');

            womenMenu.forEach(women => {
                women.classList.remove('display');
            });
            
            menMenu.forEach(men => {
                men.classList.add('display');
            });
            kidMenu.forEach(kid => {
                kid.classList.add('display');
            });
            accMenu.forEach(acc => {
                acc.classList.add('display');
            });
            acosMenu.forEach(aco => {
                aco.classList.add('display');
            });
            $('.products-item.men.women.kid').classList.remove('display');
            $('.products-item.men.women.accsessories').classList.remove('display');
            $('.products-item.kid.women.cosmetic').classList.remove('display');
        }
    // men
    if(menuItemElement[index].innerHTML == "Men’s") {
            $('.text-listmenu.active').classList.remove('active');
            menuItemElement[index].classList.add('active');
        
            menMenu.forEach(men => {
                men.classList.remove('display');
            });

            womenMenu.forEach(women => {
                women.classList.add('display');
            });
            kidMenu.forEach(kid => {
                kid.classList.add('display');
            });
            accMenu.forEach(acc => {
                acc.classList.add('display');
            });
            acosMenu.forEach(aco => {
                aco.classList.add('display');
            });
            
            $('.products-item.men.women.kid').classList.remove('display');
            $('.products-item.men.women.accsessories').classList.remove('display');
        
            
        }
        // kid
        if(menuItemElement[index].innerHTML == "Kid’s") {
            $('.text-listmenu.active').classList.remove('active');
            menuItemElement[index].classList.add('active');
           
            kidMenu.forEach(kid => {
                kid.classList.remove('display');
            });

            womenMenu.forEach(women => {
                women.classList.add('display');
            });
            menMenu.forEach(men => {
                men.classList.add('display');
            });
            accMenu.forEach(acc => {
                acc.classList.add('display');
            });
            acosMenu.forEach(aco => {
                aco.classList.add('display');
            });

            $('.products-item.men.women.kid').classList.remove('display');
            $('.products-item.kid.women.cosmetic').classList.remove('display');
        }
        // acc
        if(menuItemElement[index].innerHTML == "Accessories") {
            $('.text-listmenu.active').classList.remove('active');
            menuItemElement[index].classList.add('active');
            accMenu.forEach(acc => {
                acc.classList.remove('display');
            });

            womenMenu.forEach(women => {
                women.classList.add('display');
            });
            menMenu.forEach(men => {
                men.classList.add('display');
            });
            kidMenu.forEach(kid => {
                kid.classList.add('display');
            });
            acosMenu.forEach(aco => {
                aco.classList.add('display');
            });

            $('.products-item.men.women.accsessories').classList.remove('display');

        }     
        // cos  
    if(menuItemElement[index].innerHTML == 'Cosmetics') {
            $('.text-listmenu.active').classList.remove('active');
            menuItemElement[index].classList.add('active');
            acosMenu.forEach(aco => {
                aco.classList.remove('display');
            });

            womenMenu.forEach(women => {
                women.classList.add('display');
            });
            menMenu.forEach(men => {
                men.classList.add('display');
            });
            kidMenu.forEach(kid => {
                kid.classList.add('display');
            });
            accMenu.forEach(acc => {
                acc.classList.add('display');
            });

            $('.products-item.kid.women.cosmetic').classList.remove('display');


        } 

    }
}



// Mobile
$('.fas.fa-align-justify').onclick = function() {
    $('#overlay-mobile').classList.remove('active-mobile');
    $('.right').style.animation = 'rightInside ease 0.3s';
}
$('.close-mobile').onclick = function() {
    $('.right').style.animation = 'fade ease 0.5s';
    setTimeout(() => {
        $('#overlay-mobile').classList.add('active-mobile');
    }, 500);
}




for (let index = 0; index < $$('.icon').length; index++) {
    var count = 0;
    $$('.icon')[index].onclick = function() {
    
        if(count == 0) {
            $('.sub-page').classList.remove('active-page')
            $('.page-right').classList.add('active-page');
            $('.page-down').classList.remove('active-page');
            count++;
            console.log(count)
        }else {
            $('.sub-page').classList.add('active-page')
            $('.page-right').classList.remove('active-page');
            $('.page-down').classList.add('active-page');
            count--;
            console.log(count)
    
        }
    }
    
    
}
