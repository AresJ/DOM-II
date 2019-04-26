// Your code goes here
function addEventListenerByClass(className, event, func()){
    var list = document.getElementsByClassName(className);
    for(var i = 0, len = list.length; i < len; i++){
        list[i].addEventListener(event, func, false);
    }
}
$(document).getElementsByClassName('nav-link').addEventListenerByClass(this, "mouseover", function(){
    
})
