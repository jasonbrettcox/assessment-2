var arr1 = 0;
var arr2 = 0;

  

  $(document).keydown(function(q) {
  	if(q.keyCode == 90)
  		$('.block1').animate({marginLeft: '+=5%' })
  		arr1 += 1;
  		if ( arr1 === 80) {alert("playa 1 wins" );}
 
  	if(q.keyCode == 191)
  		$('.block2').animate({marginLeft: '+=5%' })
  		arr2 += 1;
  		if ( arr2 === 80) {alert("playa 2 wins" );}

});
 
  
  	
	


// 		case arrow.left:
// 			$('#block1').animate({"right": "+=75px" }, "slow");
// 			break;

// 		case arrow.right:
// 			$('#block2').animate({"right": "+=75px" }, "slow");
// 			break;
// 		}
// 	});	
// };
  


