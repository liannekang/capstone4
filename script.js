$(document).ready(function(){

//--1--//

   $(function() {var s = skrollr.init();})

$.ready(function(){
  $(window).on('scroll', function(e){
    $('#scroll-container').innerText = $(window).scrollTop();
  });
});


	if ($(window).width() < 1400) {
   alert('Full-screen Please!!');
	
}

$('.container').on("mouseover", function () {
    $('.hover').show();
},200);

$('.container').on("mouseleave", function () {
    $('.hover').hide();
});



$('.container').on("mouseleave", function () {
    $('.hover').hide();
});




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


});