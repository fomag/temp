$(document).ready(function () {


  // button function to toggle show and hide
  
  $.fn.slideFadeToggle  = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
  }; 

  $("#button1").click(function () {
    
    // fade out
    $("#formPanel1").slideFadeToggle();
    $("#buttonPanel1").fadeToggle(1);
    
    // fade in
    $("#formPanel2").slideFadeToggle();
    $("#buttonPanel2").fadeToggle(1);

  });
  
  $("#button2").click(function () {

    // fade out
    $("#formPanel2").slideFadeToggle();
    $("#buttonPanel2").fadeToggle(1);
    
    // fade in
    $("#formPanel1").slideFadeToggle();
    $("#buttonPanel1").fadeToggle(1);


  });
  
  

});
