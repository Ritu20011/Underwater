var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    speed: 2000,
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});
// Custom text for each pagination bullet
var bulletTexts = [
    '<i class="fa-solid fa-house nav-ico"></i> <span class="nav-text">Home</span>',
    '<i class="fa-solid fa-house nav-ico"></i> <span class="nav-text">Home</span>',
    '<i class="fa-solid fa-house nav-ico"></i> <span class="nav-text">Home</span>',
    '<i class="fa-solid fa-house nav-ico"></i> <span class="nav-text">Home</span>'
];

// Ensure bullets are updated on initial load
swiper.on('paginationUpdate', function () {
    $('.swiper-pagination-bullet').each(function (index) {
        if (index < bulletTexts.length) {
            $(this).html(bulletTexts[index]);
        }
    });
});

// Trigger the pagination update manually to apply custom texts on load
swiper.emit('paginationUpdate');
var aniSwiper = new Swiper(".aniSwiper", {
    speed: 2000,
    slidesPerView: 1,
    mousewheel: true,
    // pagination: {
    //     el: ".ani-swiper-pagination",
    //     clickable: true,
    // },
});
$(document).ready(function () {
    $(".slide").ripples({
        imageUrl: null,
        dropRadius: 20,
        resolution: 200,
        perturbance: 0.04,
        interactive: true,
        crossOrigin: ''
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const customCursor = document.getElementById('custom-cursor');
//     document.addEventListener('mousemove', (e) => {
//         customCursor.style.left = `${e.clientX}px`;
//         customCursor.style.top = `${e.clientY}px`;
//         // alert(`${e.clientY}px`);
//         console.log(`${e.clientX}px`);
//         console.log(`${e.clientY}px`);
//     });
   
// });


// window.addEventListener('wheel', function(event) {
//     if (swiper.activeIndex === 1) {
//         swiper.mousewheel.disable();

//         // Check if aniSwiper is at both the beginning and the end (meaning it has only one slide)
       
//         if (aniSwiper.isEnd || aniSwiper.isBeginning) {
//             alert('hi');
//             swiper.mousewheel.enable();
//         }
//     }
// });


let scrolledAfterTransition = false;
let scrollDirection;
window.addEventListener('wheel', function(event) {
    scrollDirection = event.deltaY > 0 ? 'down' : 'up';
    if (swiper.activeIndex === 1) {
        swiper.mousewheel.disable();
    }
    scrolledAfterTransition = true; 
});
aniSwiper.on('transitionEnd', function() {
    if ((aniSwiper.isEnd && scrollDirection === 'down') || (aniSwiper.isBeginning && scrollDirection === 'up')) {
        if (scrolledAfterTransition) {
            swiper.mousewheel.enable();
        }
    }
    scrolledAfterTransition = false; 
});

