$(document).ready(
	function() {
		i = 0;
		j = 1;
		while(i <= 100){
			$('.grid').append('<div class="square"></div>');
			i++;
		}
		$('.square').hover(
 		function() {
 			if (j == 1) {
 			$(this).css('background', 'grey');
 			j++;
 		}
 		else if(j == 2) {
 			$(this).css('background', 'green');
 			j = 1;
 		}
 	}
 			);
	}
	);