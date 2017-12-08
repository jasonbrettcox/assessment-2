<script
  src="https://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>

  <script>
  $(document).keydown(function(e) {
  	var keycode = e.keyCode || e.which,
  	arrow = {left: 65, right: 76 };
	
	switch (keyCode) {

		case arrow.left:
			$('#block1').animate({"right": "+=75px" }, "slow");
			break;

		case arrow.right:
			$('#block2').animate({"right": "+=75px" }, "slow");
			break
		}
	});	
});
  