var isOpenMenu = false;
function toggleMenu(){
	$(".navbar-toggle").click(function() {
	  if(isOpenMenu){
		$(".navbar-toggle").removeClass('open');
	  }else{
		$(".navbar-toggle").addClass('open');
	  }
	  isOpenMenu = !isOpenMenu;
	});
	
	
}
$( document ).ready(function() {
    toggleMenu();
});