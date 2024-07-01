var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    speed: 1000,
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
    '<i class="fa-solid fa-user nav-ico"></i> <span class="nav-text">About Us</span>',
    '<i class="fa-solid fa-book nav-ico"></i> <span class="nav-text">Training</span>',
    '<i class="fa-solid fa-location-dot nav-ico"></i> <span class="nav-text">Contact</span>'
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
    // mousewheel: true,
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

// let scrolledAfterTransition = false;
// let scrollDirection;
// window.addEventListener('wheel', function(event) {
//     scrollDirection = event.deltaY > 0 ? 'down' : 'up';
//     if (swiper.activeIndex === 1) {
//         swiper.mousewheel.disable();
//     }
//     scrolledAfterTransition = true; 
// });
// aniSwiper.on('transitionEnd', function() {
//     if ((aniSwiper.isEnd && scrollDirection === 'down') || (aniSwiper.isBeginning && scrollDirection === 'up')) {
//         if (scrolledAfterTransition) {
//             swiper.mousewheel.enable();
//         }
//     }
//     scrolledAfterTransition = false; 
// });

$(document).ready(function () {
    $(document).on('mousemove', function (event) {
        let bubble = $('.custCur');
        let bubble2 = $('.custCur2');

        if (bubble.length === 0) {
            bubble = $('<div class="custCur"></div>').appendTo('body');
        }

        if (bubble2.length === 0) {
            bubble2 = $('<div class="custCur2"></div>').appendTo('body');
        }

        const mouseX = event.pageX;
        const mouseY = event.pageY;

        bubble.css({
            left: mouseX - bubble.width() / 2 + 'px',
            top: mouseY - bubble.height() / 2 + 'px'
        });
        bubble2.css({
            left: mouseX - bubble2.width() / 2 + 'px',
            top: mouseY - bubble2.height() / 2 + 'px'
        });
    });

    function createBubble() {
        const $bubble = $('<div class="clickBubb"></div>');
        const containerWidth = $('#bubble-container').width();
        const posX = Math.random() * (containerWidth - 50); // Adjust for bubble width
        $bubble.css('left', `${posX}px`);
        $bubble.css('animation-duration', `${Math.random() * 2 + 3}s`);
        $('#bubble-container').append($bubble);
  
        // Remove bubble from DOM after animation ends
        $bubble.on('animationend', function() {
          $(this).remove();
        });
      }
  
      // Create bubbles periodically
      setInterval(createBubble, 1000); // Adjust interval as needed
});
