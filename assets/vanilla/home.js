require ("../vanilla/home.css");

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            console.log("swipe left")
            closebar();
        } else {
            console.log("swipe right")
            closebar();
        }                       
    } else {
        if ( yDiff > 0 ) {
            console.log("swipe up")
           closebar();
        } else { 
            console.log("swipe down")
            closebar();
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

window.closeiklan = function() {
    closebar()
}

const  closewelcome =()=>{
  closebar()
}

//close modal
function closebar() {
document.querySelector(".email-model").style.backgroundColor = "rgb(0,0,0,0)";
document.getElementById("close").style.display = "none";
var x = document.querySelector(".content-model")
//document.querySelector(".midd").style.display = "none";
x.style.height =  "0px";
x.style.width =  "0px";
x.style.top = "50px";
x.style.left = "20px";
setTimeout(() => {
    document.querySelector(".email-model").style.display = "none";
    enableScroll()
}, 500);
}



//disable scroll

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
 
  var expires = "expires=" + d.toGMTString(); // session
  document.cookie = cname + "=" + cvalue + ";" + ";path=/" + ";SameSite=Lax" + "; Secure";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var sameperson = false;
function checkCookie() {
  var uniq = 'id' + (new Date()).getTime();
  var user=getCookie("iklantime");
  if (user != "") {
    sameperson = true;
  } else {
     user = uniq;
     if (user != "" && user != null) {
       setCookie("iklantime", user, 30);
     }
  }
}

window.onload = function bitch(params) {

    checkCookie();
    showiklan();

    
}


function showiklan (){
  if(sameperson){
    document.querySelector(".email-model").style.display = "none";
      return;
    }
    disableScroll();
    document.querySelector(".email-model").style.display = "flex";
    
  

    document.querySelector(".email-model").classList.toggle("open-content-model"); 
     var element = document.querySelector(".content-model");
    element.classList.toggle("open-model");
}