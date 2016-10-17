// Thanks to http://stackoverflow.com/questions/6989584/change-background-color-css-with-timer-jquery
function backgroundColourChange(division, colourCode){
	colourCode ++;

	if (colourCode > 10){
		colourCode = 1;
	}

	division.addClass('color' + colorCode, 1000);

	division.attr('class', 'color' + curNumber);

	setTimeout(function(){
		changeColor(division, colourCode)
	}, 2000);  
}

changeColor($("body"), 0);