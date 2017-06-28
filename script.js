var mousedown = false;
var colorOn = false;
$(document).ready(function(){
	drawGrid(16);

	$(document).mousedown(function(){
		mousedown = true;
	});

	$(document).mouseup(function(){
		mousedown = false;
	});	

	$('#setSize').click(function(){
		var size = prompt("Please enter grid size (max of 64):");
		if (isNaN(size) || size < 16 || size > 64) {
			alert("Please enter a number between 16 and 64");
		}
		else {
			clearGrid();
			drawGrid(size);
		}
	});
	$('#special').click(function(){
		$('#special').toggleClass("blkWhite color");
			$('#special').text(function(first, second){
				return second === 'Let There Be Color!' ? 'Black and White' : 'Let There Be Color!';
			})
			colorOn = !colorOn;
		console.log("clicked blk white");
	});

	$('#clear').click(function(){
		clearGrid();
	});	

	$(document).mousedown(function() {
		$(".etch-cell").on('mouseover',function(){
			if (colorOn == false) {
				$(this).css("background-color", "black");
			}
			else {
				$(this).css("background-color", color);	
			}
		});
	})

	.mouseup(function() {
		$(".etch-cell").off('mouseover');
		});
		$('.etch-cell').mousedown(function() {
			if (colorOn == false) {
				$(this).css("background-color", "black");
			}
			else {
				$(this).css("background-color", color);	
			}
	});		
});
function drawGrid(size) {
	$('.etch-row').remove();
	$('.etch-cell').remove();	
	for (var i = 0; i < size; i++) {
		$('.table').append('<div class="etch-row"></div>');
		console.log("Created row!");
	}
	for (var j = 0; j < size; j++) {
		$('.etch-row').append('<div class="etch-cell"></div>');
		console.log("Created cell!");
	}
}
function clearGrid() {
	$('.etch-cell').css("background-color", "#f2f2f2");
}

function color() {
	var rainbow = ["#ff0000", "#ffac00", "#fff100", "#0bff00", "#00f6ff", "#bf00ff", "#ff00ff"];
	var randomColor = rainbow[Math.floor(Math.random() * rainbow.length)];
	return randomColor;
}