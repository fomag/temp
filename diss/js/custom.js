$(document).ready(function () {
  
  //initialization
  lStore=$.localStorage;


  // button function to toggle show and hide
  
  $.fn.slideFadeToggle  = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
  }; 

  $("#button1next").click(function () {
    
    
    $(".sectionHeading").fadeOut(function() {
      $(this).text("Complaint").fadeIn();
    });
    
    //get and set user input variables
    
    var indfname1 = $("#indfname1").val();
    lStore.set('individualFirstName', indfname1);
    $("#fname1").text(lStore.get('individualFirstName'));
    
    var indlname1 = $("#indlname1").val();
    lStore.set('individualLastName', indlname1);
    $("#lname1").text(lStore.get('individualLastName'));
    
    var indsinnum1 = $("#sinnum1").val();
    lStore.set('individualSIN', indsinnum1);
    $("#sin1").text(lStore.get('individualSIN'));
    
    var indbname1 = $("#busname1").val();
    lStore.set('individualBusinessName', indbname1);
    $("#bname1").text(lStore.get('individualBusinessName'));
    
    var indbnum1 = $("#busnum1").val();
    lStore.set('individualBusinessNumber', indbnum1);
    $("#bnum1").text(lStore.get('individualBusinessNumber'));
    
    var indstreetname1 = $("#indstreet1").val();
    lStore.set('individualStreetName', indstreetname1);
    $("#sname1").text(lStore.get('individualStreetName'));
    
    var indcity1 = $("#indcity1").val();
    lStore.set('individualCity1', indcity1);
    $("#city1").text(lStore.get('individualCity1'));
    
    //Get text or inner html of the selected option
    var indprov1 = $("#indprov1 option:selected").html();
    lStore.set('individualProv1', indprov1);
    $("#prov1").text(lStore.get('individualProv1'));
    
    // checkbox stuff
    
    if($("#defaultCheck1").prop("checked") == true){
      var privacy1 = "Accepted";
      lStore.set('privacyCheck', privacy1);
      $("#choice1").text(lStore.get('privacyCheck'));
    }
    else if($("#defaultCheck1").prop("checked") == false){
      var privacy1 = "Not accepted";
      lStore.set('privacyCheck', privacy1);
      $("#choice1").text(lStore.get('privacyCheck'));
    }
    
    $('#selected1').removeClass('active');
    $('#selected2').addClass('active');
    $('#selected3').removeClass('active');
    
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
    
    $(".sectionHeading").fadeOut(function() {
      $(this).text("Summary").fadeIn();
    });
    
    var indtext1 = $("#indtext1").val();
    lStore.set('individualTextInput', indtext1);
    $("#text1").text(lStore.get('individualTextInput'));
    
    $('#selected1').removeClass('active');
    $('#selected2').removeClass('active');
    $('#selected3').addClass('active');

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
    
    $(".sectionHeading").fadeOut(function() {
      $(this).text("Individual information").fadeIn();
    });
    
    $('#selected1').addClass('active');
    $('#selected2').removeClass('active');
    $('#selected3').removeClass('active');

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
    
    $(".sectionHeading").fadeOut(function() {
      $(this).text("Complaint").fadeIn();
    });
    
    $('#selected1').removeClass('active');
    $('#selected2').addClass('active');
    $('#selected3').removeClass('active');

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
  
  //local storage
  
  //lStore
  
  $("#clearStorage").click(function () {
      lStore.removeAll();
    });
  
  //get values
  
  
  //set values
  

});
