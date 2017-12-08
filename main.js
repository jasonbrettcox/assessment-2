<script
  src="https://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>

  <script>
  $(document).keydown(function(e) {
  	var keycode = e.keyCode || e.which,
  	arrow = {left: 37, up: 38, right: 39, down: 40 };

        switch (keyCode) {

            case arrow.left: 
                $('#block').animate({"left": "-=1px"}, "slow");
            break;

            case arrow.right: 
                $('#block').animate({"left": "+=1px"}, "slow");
            break;
		}
	});	
});
  


  