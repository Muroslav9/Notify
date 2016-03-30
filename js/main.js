$(document).ready(function(){
	
	$('.avatar a img').mouseover(function(){
		var altHref = $(this).attr('alt');
		
		$('.Jane_hunt').replaceWith('<div class="text-center Jane_hunt">' +altHref + '</div>');
		
		arr = blockQuote.filter(function( n,i ){
			return (n.name===altHref)
		});
		$('blockquote').replaceWith('<blockquote class="text-center animated pulse">"'+ arr[0].body +'"</div>')
	});
});