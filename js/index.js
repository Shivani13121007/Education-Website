// $(document).ready(function(){
//     window.onscroll = function() {scrollFunction()};
//     function scrollFunction(){
//         if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
//             $('header').addClass('.header-activee');
//         }else{
//             $('header').removeClass('.header-activee');
//         }
//     };
// });


let header = document.getElementById("header");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        header.classList.add('header-active');
    }
    else{
        header.classList.remove('header-active');
    }
}
