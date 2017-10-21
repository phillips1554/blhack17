




function submitbutton() { 

	console.log( "ready! 2" );


	var firstname = $( "#firstname" ).val();
	var lastname = $( "#lastname" ).val();
	var companyname = $( "#companyname" ).val();
	var domainname = $( "#domainname" ).val();
	console.log(firstname, lastname, companyname, domainname);

	$.ajax({
		type:"POST",
		url:"https://www.pushlaundry.com/test.php",
		success: function(data) {
			console.log(data);
		},
		dataType: 'text',
	});

}




// A $( document ).ready() block.
$( document ).ready(function() {

	$( "#submitbutton").click(submitbutton)

});


