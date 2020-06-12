$(document).ready(function () {


  // button function to toggle show and hide
  
  $.fn.slideFadeToggle  = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
  }; 
  
  
  $('#myDiv')
        .stop(true, true)
        .animate({
            height:"toggle",
            opacity:"toggle"
        },slideDuration);

  $("#button1").click(function () {
    
    // fade out
    $("#formPanel1")
        .animate({
            height:"toggle",
            opacity:"toggle"
        },slideDuration);
    $("#buttonPanel1").fadeToggle(1);
    
    // fade in
    $("#formPanel2")
        .stop(true, true)
        .animate({
            height:"toggle",
            opacity:"toggle"
        },slideDuration);
    $("#buttonPanel2").fadeToggle(1);

  });
  
  $("#button2").click(function () {

    // fade out
    $("#formPanel2")
        .animate({
            height:"toggle",
            opacity:"toggle"
        },slideDuration);
    $("#buttonPanel2").fadeToggle(1);
    
    // fade in
    $("#formPanel1")
        .stop(true, true)
        .animate({
            height:"toggle",
            opacity:"toggle"
        },slideDuration);
    $("#buttonPanel1").fadeToggle(1);


  });
  
  

});
