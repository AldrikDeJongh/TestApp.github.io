


<!DOCTYPE html>
<html>
<head>
	<title>Call Taxi</title>
</head>
<body>
	<script>
		// create the form element
		const form = document.createElement("form");

		// create the label element for the Destination text field
		const destinationLabel = document.createElement("label");
		destinationLabel.textContent = "Destination:";
		form.appendChild(destinationLabel);

		// create the text field element for the Destination input
		const destinationInput = document.createElement("input");
		destinationInput.type = "text";
		destinationInput.name = "destination";
		form.appendChild(destinationInput);

		// create the button element
		const button = document.createElement("button");
		button.type = "submit";
		button.name = "taxi";
		button.textContent = "Taxi!";
		form.appendChild(button);

		// append the form to the document body
		document.body.appendChild(form);
	</script>
</body>
</html>