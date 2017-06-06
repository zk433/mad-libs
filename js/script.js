$(document).ready(function(){

	/* Take the value of the input from each field (use the id)
		and save it into a variable.
	*/
	$("#formOne").submit(function(event){
		var person1Input = $('input#person1').val();
		var person2Input = $('input#person2').val();
		var animalInput = $('input#animal').val();
		var exclamationInput = $('input#exclamation').val();
		var verbInput = $('input#verb').val();
		var nounInput = $('input#noun').val();

	/*
		Take the variable and append it to the span 
		class in the story.
	*/
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

}); // document.ready
