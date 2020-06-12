$(document).ready(function () {
  
  //initialization
  


  // button function to toggle show and hide
  
  $.fn.slideFadeToggle  = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
  }; 

  $("#button1next").click(function () {
    
    // fade out
    $("#formPanel1")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#formPanel3")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel1").fadeOut(1);
    $("#buttonPanel3").fadeOut(1);
    
    // fade in
    $("#formPanel2")
      .css('opacity', 0)
      .slideDown('slow')
      .animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel2").fadeIn(1);
    
    $('#but1').removeClass('active');
    $('#but2').addClass('active');
    $('#but3').removeClass('active');

  });
  
  $("#button2next").click(function () {

    // fade out
    $("#formPanel1")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#formPanel2")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel1").fadeOut(1);
    $("#buttonPanel2").fadeOut(1);
    
    // fade in
    $("#formPanel3")
      .css('opacity', 0)
      .slideDown('slow')
      .animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel3").fadeIn(1);
    
    $('#but1').removeClass('active');
    $('#but2').removeClass('active');
    $('#but3').addClass('active');


  });
  
  $("#button2back").click(function () {

    // fade out
    $("#formPanel2")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#formPanel3").fadeOut(1);
    $("#buttonPanel2").fadeOut(1);
    $("#buttonPanel3").fadeOut(1);
    
    // fade in
    $("#formPanel1")
      .css('opacity', 0)
      .slideDown('slow')
      .animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel1").fadeIn(1);
    
    $('#but1').addClass('active');
    $('#but2').removeClass('active');
    $('#but3').removeClass('active');


  });
  
  $("#button3back").click(function () {

    // fade out
    $("#formPanel3")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel3").fadeOut(1);
    
    // fade in
    $("#formPanel2")
      .css('opacity', 0)
      .slideDown('slow')
      .animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel2").fadeIn(1);
    
    $('#but1').removeClass('active');
    $('#but2').addClass('active');
    $('#but3').removeClass('active');


  });
  
  
  //$("#but1:not(.active)").click(function(){
  $("#but1").click(function(){
    // fade out
    $("#formPanel2")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#formPanel3")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel2").fadeOut(1);
    $("#buttonPanel3").fadeOut(1);
    
    // fade in
    $("#formPanel1")
      .css('opacity', 0)
      .slideDown('slow')
      .animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel1").fadeIn(1);
    
    $('#but1').addClass('active');
    $('#but2').removeClass('active');
    $('#but3').removeClass('active');
    
  });

  $("#but2").click(function () {
    
    // fade out
    $("#formPanel1")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#formPanel3")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel1").fadeOut(1);
    $("#buttonPanel3").fadeOut(1);
    
    // fade in
    $("#formPanel2")
      .css('opacity', 0)
      .slideDown('slow')
      .animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel2").fadeIn(1);
    
    $('#but1').removeClass('active');
    $('#but2').addClass('active');
    $('#but3').removeClass('active');

  });
  
  
  $("#but3").click(function () {
    
    // fade out
    $("#formPanel1")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#formPanel2")
      .css('opacity', 1)
      .slideUp('slow')
      .animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel1").fadeOut(1);
    $("#buttonPanel2").fadeOut(1);
    
    // fade in
    $("#formPanel3")
      .css('opacity', 0)
      .slideDown('slow')
      .animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
      );
    $("#buttonPanel3").fadeIn(1);
    
    $('#but1').removeClass('active');
    $('#but2').removeClass('active');
    $('#but3').addClass('active');

  });

});
