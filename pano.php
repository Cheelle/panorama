<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Panolens Sample</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

	<script src="https://code.createjs.com/1.0.0/preloadjs.min.js"></script>
	<script src="https://pchen66.github.io/js/three/three.min.js"></script>
	<script src="https://pchen66.github.io/js/panolens/panolens.min.js"></script>

	<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

	<link rel="stylesheet" href="pano.css">
	

</head>

<body>
	

	<div class="cal">

		<button class="close hideCal" type="button" onclick="cal_hide_show()" aria-label="Close">
			<span aria-hidden="true" >&times;</span>
		</button>

		</br>
		<iframe class="calendar" src="https://calendar.google.com/calendar/embed?src=c_uotbhmnoju3n86b7cflf6jbis8%40group.calendar.google.com&ctz=Asia%2FManila" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
	</div>
	

	

	<div class="pano_image">
	</div>


	<a class="navbar-brand" href="https://www.teamasia.com/">
		<img src="TeamAsia.png" alt="Logo" style="width:120px;">
	</a>




	<script src="pano.js"></script>
</body>

</html>