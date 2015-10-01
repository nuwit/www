


$(document).ready(function(){
	console.log('hi');

	if(location.hash == ''){$('#content').load('inc/about.html');}
	else{$('#content').load( 'inc/'+location.hash.replace('#','')+'.html')}

	
	// Navigation between pages
	function updateNav(){
		$('#content').load( 'inc/'+location.hash.replace('#','')+'.html');
	}
	window.onhashchange = updateNav;

})