//burger menu

burger = document.querySelector(".burger");
burger_wrap = document.querySelector(".burger-wrap");
mobileMenu = document.querySelector(".mobile-menu");

link_menu = document.querySelector(".link-menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

//click link close menu
link_menu.addEventListener("click", function () {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

//scroll to top

var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (!mybutton) return;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var framePath = "./images/";
var nFrames = 94; //Define amount of images. counting starts at 0, to have it count to 400 you would have to ad 401 images.
var fileType = ".jpg";

var nFramesMob = 87;
var fileTypeMob = "-m.jpg";

var pageLengt = 700; // this defines over what distance, in pixels, your image sequence should be displayed. esentally it defines how speady you scroll trough all the individual images. make shure your page has at least this lengt in px aswel.

var framePathTablet = "./imagesTablet/";
var nFramesTablet = 83;


var images = [];
var numberSequence = [];
var numberSequenceMob = [];

var numberSequenceTablet = [];

function pad(number, length) {
  var str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
}

/*----------PRELOADER-------------*/

var frameNumber = 1;

for (var i = 0; i < nFrames; i++) {
  $('.img-seq').append(`<div class="preload-img" id="preload-image-${i}" 
  style="background-image: url('${framePath}${pad(i, 4)}.jpg');"></div>`);

  if (frameNumber >= nFrames) {
    frameNumber = 1;
  } else {
    frameNumber = frameNumber + 1;
  } 

};

/*---------------------------*/

// loop through file type

var width = window.innerWidth;
/*
for (i = 0; i < (nFrames); i++) {
        if (width > 500) {
            images.push(framePath + pad(i, 4) + fileType);
    }
}*/

for (i = 0; i < nFrames; i++) {
  if (width > 1000) {
    images.push(framePath + pad(i, 4) + fileType);
  }
}

for (i = 0; i < nFramesTablet; i++) {
  if (width < 1000 && width > 500) {
    images.push(framePathTablet + pad(i, 4) + fileType);
  }
}

for (i = 0; i < nFramesMob; i++) {
  if (width < 500) {
    images.push(framePath + pad(i, 4) + fileTypeMob);
  }
}

// ad numbers to numbersequence array

for (i = 0; i < nFrames; i++) {
  numberSequence.push(i);
}

for (i = 0; i < nFramesMob; i++) {
  numberSequenceMob.push(i);
}

for (i = 0; i < nFramesTablet; i++) {
  numberSequenceTablet.push(i);
}

// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = { curImg: 0 };

// create tween
var ImageSequenceTween = new TimelineMax().to(obj, 0.5, {
  curImg: images.length - 1, // animate propery curImg to number of images
  roundProps: "curImg", // only integers so it can be used as an array index
  repeat: 0, // repeat 3 times
  immediateRender: true, // load first image automatically
  ease: Linear.easeNone, // show every image the same ammount of time
  onUpdate: function () {
    console.log(numberSequence[obj.curImg]);

    if (numberSequence[obj.curImg] == 93 && width > 1000) {
      //500
      $("#svg-over-image").css("visibility", "visible");
      $("#navigation").css("visibility", "visible");
      $("#message").css("visibility", "visible");

      document.getElementById("stroke-animation").addEventListener(
        "click",
        function (event) {
          console.log("test");
          console.log(event);
        },
        false
      );

      $("#portfolio").click(function () {
        window.open("./pages/portfolio.html", "_self");
      });

      $("#contact").click(function () {
        window.open("./pages/contact.html", "_self");
      });

      $("#skills").click(function () {
        window.open("./pages/skills.html", "_self");
      });

      $("#cv").click(function () {
        window.open("https://www.linkedin.com/in/milan-m-835400236/");
      });
    } else if (numberSequenceTablet[obj.curImg] == 82 && width < 1000) {
      $("#svg-over-image-tablet").css("visibility", "visible");
      $("#navigation").css("visibility", "visible");
      $("#message").css("visibility", "visible");

      document.getElementById("stroke-animation").addEventListener(
        "click",
        function (event) {
          console.log("test");
          console.log(event);
        },
        false
      );

      $("#portfolio-tablet").click(function () {
        window.open("./pages/portfolio.html", "_self");
      });

      $("#contact-tablet").click(function () {
        window.open("./pages/contact.html", "_self");
      });

      $("#skills-tablet").click(function () {
        window.open("./pages/skills.html", "_self");
      });

      $("#cv-tablet").click(function () {
        window.open("https://www.linkedin.com/in/milan-m-835400236/");
      });
    } else if (numberSequenceMob[obj.curImg] == 86 && width < 500) {
      $("#svg-over-image-mob").css("visibility", "visible");
      $("#navigation").css("visibility", "visible");
      $("#message").css("visibility", "visible");

      document.getElementById("stroke-animation").addEventListener(
        "click",
        function (event) {
          console.log("test");
          console.log(event);
        },
        false
      );

      $("#portfolio-mob").click(function () {
        window.open("./pages/portfolio.html", "_self");
      });

      $("#contact-mob").click(function () {
        window.open("./pages/contact.html", "_self");
      });

      $("#skills-mob").click(function () {
        window.open("./pages/skills.html", "_self");
      });

      $("#cv-mob").click(function () {
        window.open("https://www.linkedin.com/in/milan-m-835400236/");
      });
    } else {
      $("#svg-over-image").css("visibility", "hidden");
      $("#navigation").css("visibility", "hidden");
      $("#message").css("visibility", "hidden");
      $("#note").css("visibility", "hidden");
      $("#svg-over-image-mob").css("visibility", "hidden");
      $("#svg-over-image-tablet").css("visibility", "hidden");
    }

    if (numberSequence[obj.curImg] >= 0 && numberSequence[obj.curImg] <= 15) {
      $(".welcome-text").css("visibility", "visible");
    } else {
      $(".welcome-text").css("visibility", "hidden");
    }

    if (numberSequence[obj.curImg] >= 52 && numberSequence[obj.curImg] <= 72) {
      $(".name-text").css("visibility", "visible");
    } else {
      $(".name-text").css("visibility", "hidden");
    }

   $("#imgsequence").attr("src", images[obj.curImg]).attr("loading", "lazy"); // set the image source
  },
});

function changeContent() {
  document.getElementById("note").style.visibility = "visible";
  document.getElementById("message").style.visibility = "hidden";
}

// When the DOM is ready
$(function () {
  // init controller
  var ImageSequenceController = new ScrollMagic.Controller();

  // build scene --> image sequence
  var scene = new ScrollMagic.Scene({
    triggerElement: ".trigger",
    triggerHook: 0,
    offset: 0,
    duration: "130%",
  })

    .setTween(ImageSequenceTween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(ImageSequenceController);
});

/*
$(document).ready(function() {

    $("html").niceScroll({
       scrollspeed: 200,
        // Mousescrollstep : 100,
       //Smoothscroll : true

    });

});*/
