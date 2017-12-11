var arr1 = 0;
var arr2 = 0;
// each keystroke adds 1 to the array, and when the array reaches a certain length, the game announces a winner
  $(document).keydown(function(q) { 
	//    when you press the key down. the .animate function is fired, which here moves the car to the right
  	if(q.keyCode == 90){
  		$('.block1').animate({marginLeft: '+=40px' })
  		arr1 += 1;
  		if ( arr1 === 75) {alert("playa 1 wins" );}
	//   after much experimentation, an array length of 75 and a movement value of 40 px seems to work best at least on a laptop. 
	  }else if(q.keyCode == 191){
  		$('.block2').animate({marginLeft: '+=40px' })
  		arr2 += 1;
  		if ( arr2 === 75) {alert("playa 2 wins" );}
		// had to research keycode, which is how you tell it what keystroke to look for. 
}});
 
  
  	
	



  


