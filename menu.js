<!DOCTYPE html>
<html>
<head>
	<title>Menu Example</title>
</head>
<body>
	<h1>Menu</h1>
	<ul id="menu">
		<li><a href="#">Taxi!</a></li>
		<li><a href="#">Settings</a></li>
	</ul>

	<script>
		const menu = document.getElementById("menu");
		menu.addEventListener("click", (event) => {
			event.preventDefault(); // prevent default link behavior
			const target = event.target;
			if (target.tagName === "A") {
				console.log(target.innerText + " clicked!"); // or do something else
			}
		});
	</script>
</body>
</html>