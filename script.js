jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
     
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 2
      },
  
      1366: {
        items: 1
      }
    }
  });


  jQuery("#carouse").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });


  


  let testimonialIndex = 0;
let pauseSlide = false;
let testimonialsInterval = null;
const $testimonialsElement = $(".testimonials");
let testimonialsDelay =
    Number($testimonialsElement.data("delay")) || 24000;
const $testimonialsBadgeElement = $(".testimonials-badge");
const $testimonialsNoStartElement = $(".testimonials.no-start");
const $slideItemsElement = $(".testimonials-text");
const $dataItems = Number($('.testimonials').data('items'));

if ($testimonialsElement && $testimonialsNoStartElement.length === 0)
  carousel();

if (
  $testimonialsNoStartElement &&
  $testimonialsNoStartElement.length === 1
) {
  $testimonialsBadgeElement.each((index, element) => {
    $($testimonialsBadgeElement[index]).css("display", "none");
  });
  document.getElementsByClassName(
    "testimonials-text"
  )[0].style.display = "block";
}

function showSlideItem(
$slideItemsElement,
 testimonialIndex,
 $,
 $testimonialsBadgeElement
) {
  if (!$slideItemsElement) return;
  $slideItemsElement[testimonialIndex - 1].style.display = "block";
  $($testimonialsBadgeElement[testimonialIndex - 1]).attr(
    "style",
    "background: #DDD6CC !important"
  );
}

function stopAutoLoad() {
  clearInterval(testimonialsInterval);
  testimonialsInterval = null;
}

function carousel() {
  let i;

  
  let slideItemsLength = $slideItemsElement.length;
  for (i = 0; i < slideItemsLength; i++) {
    $slideItemsElement[i].style.display = "none";
    $($testimonialsBadgeElement[i]).attr(
      "style",
      "background: transparent !important"
    );
  }

  if (!$slideItemsElement) return;
  if (!pauseSlide) {
    if (testimonialIndex < $dataItems) {
      testimonialIndex++;
      showSlideItem($slideItemsElement, testimonialIndex, $, $testimonialsBadgeElement);
    } else {
      testimonialIndex = 1;
      showSlideItem($slideItemsElement, testimonialIndex, $, $testimonialsBadgeElement);
    }
  } else {
    showSlideItem($slideItemsElement, testimonialIndex, $, $testimonialsBadgeElement);
  }
  if (testimonialsInterval !== null) return;
  testimonialsInterval = setInterval(carousel, testimonialsDelay);
}

$testimonialsBadgeElement.on("click", function(e) {
  e.preventDefault();

  const n = $(this).data("index");
  

  stopAutoLoad();

  testimonialIndex = n;

  $($slideItemsElement[n])
    .attr("style", "display: block !important")
    .siblings()
    .attr("style", "display: none !important");

  $(this)
    .attr("style", "background: #DDD6CC !important")
    .siblings()
    .attr("style", "background: #fff; !important");
});

$(".testimonials-control").on("mouseleave", function() {
  if (
    testimonialsInterval == null &&
    $testimonialsNoStartElement.length === 0
  ) {
    pauseSlide = false;
    carousel();
  }
});







jQuery("#carouse").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 4
    },

    600: {
      items: 8
    },

    1024: {
      items: 8
    },

    1366: {
      items: 8
    }
  }
});


// ------------------script----------------------------------
function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}