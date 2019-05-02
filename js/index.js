// Your code goes here
/* function addEventListenerByClass(className, event, function()){
    var list = document.getElementsByClassName(className);
    for(var i = 0, len = list.length; i < len; i++){
        list[i].addEventListener(event, func, false);
    }
} 
$(document).getElementsByClassName('nav-link').addEventListenerByClass(this, "mouseover", function("black", "white"){
    event.target.style.backgroundColor = this.e;
    event.target.style.textColor = this.g;
});*/            

// Log Window has fully loaded.
window.addEventListener('load', (event) => {
    console.log('Page is fully loaded.');
});

// Log Document's state. 
document.addEventListener('readystatechange', (event) => {
    console.log(`readystate: ${document.readyState}. \n`);
});

// Log Document has fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    console.log(`DOMContentLoaded`);
});

// Log when user copies an item with what has been copied
document.addEventListener('copy', (event) => {
    var selection = window.getSelection().toString();
    console.log("You've copied: " + event.clipboardData.setData('text/data`', selection));
});

// Cycle through nav HTMLCollection list and add an DIV element and an event listener to each one.
var navList = document.getElementsByClassName('nav');
navList[0].style.padding = "1.5em 0 1em"
var navLinks = document.getElementsByClassName('nav-link');
for (var i = 0, len = navLinks.length; i < len; i++){
    navLinks[i].style.width = "";  
    var wrapper = document.createElement('div');
    wrapper.className = "nav-div";
    wrapper.style.padding = "3%";
    navLinks[i].parentNode.insertBefore(wrapper, navLinks[i]);
    wrapper.appendChild(navLinks[i]);
    wrapper.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor = "#F4989C";
        var x = e.target.getElementsByClassName('nav-link');
        x[0].style.color = "white";
    });
    wrapper.addEventListener('mouseleave', function(e){
        e.target.style.backgroundColor = "";
        var x = e.target.getElementsByClassName('nav-link');
        x[0].style.color = "black";
    });
}

/* function scrollIt(destination, duration = 200, easing = 'linear', callback) {

    const easings = {
      linear(t) {
        return t;
      },
      easeInQuad(t) {
        return t * t;
      },
      easeOutQuad(t) {
        return t * (2 - t);
      },
      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic(t) {
        return (--t) * t * t + 1;
      },
      easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
      },
      easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
      },
      easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t;
      },
      easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
      }
    };
  
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  
    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }
  
    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / duration));
      const timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
  
      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }
        return;
      }
  
      requestAnimationFrame(scroll);
    }
  
    scroll();
  } */

/*  document.querySelector('.js-btn1').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-section1'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });
 */