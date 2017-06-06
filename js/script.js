$(document).ready(function(){



	/* Take the value of the input from each field (use the id)
		and save it into a variable.
	
	$("#blanks form").submit(function(event){
		var person1Input = $('input#person1').val();
		var person2Input = $('input#person2').val();
		var animalInput = $('input#animal').val();
		var exclamationInput = $('input#exclamation').val();
		var verbInput = $('input#verb').val();
		var nounInput = $('input#noun').val();

	/*
		Take the variable and append it to the span 
		class in the story.
	
		$(".person1").text(person1Input);
		$(".person2").text(person2Input);
    	$(".animal").text(animalInput);
    	$(".exclamation").text(exclamationInput);
    	$(".verb").text(verbInput);
    	$(".noun").text(nounInput);

    	$("#story").show();

    	// This is needed to stop jQ sending the data away,
    	// hence refreshing our browser and loosing the data
	    	
	    	event.preventDefault();
	}); // formOne

	*/

	$("#blanks form").submit(function(event) {
		// create an array with all the input id names
		var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

		// run a forEach loop for each of the array item
		blanks.forEach(function(blank) {
			// create a general variable userInput that will
			// take the value from the input + id name
			// for each of the array elements
			// something like: var person1Input = $('#person1').val();
			var userInput = $("#" + blank).val();
			// and take that value and append it with text()
			// to the class in the story
			$("." + blank).text(userInput);
			// The loop will do this for every element of the array

		});

		$("#story").show();

		event.preventDefault();
	});


}); // document.ready
