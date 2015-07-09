var main = function() {
	$('.dropdown img').click(function(){

	$('.dropdown-menu').toggle();
	});
	// Another way to write the above:
	$('.dropdown img').on('click',function(){

	$('.dropdown-menu').toggle();
	});
  
}
 
$(document).ready(main);