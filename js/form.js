


function submitbutton() { 

	console.log( "ready! 2" );

	var cityimage = $( "#cityimage" ).val();
	var cityname = $( "#cityname" ).val();
	var textinput = $( "#textinput" ).val();
	var reviewone = $( "#reviewone" ).val();
	var reviewtwo = $( "#reviewtwo" ).val();


	var data = {
		cityimage: cityimage, 
		cityname: cityname, 
		textinput: textinput, 
		reviewone: reviewone, 
		reviewtwo: reviewtwo
	};

	console.log(data);

	$.ajax({
		type:"POST",
		url:"https://www.pushlaundry.com/hack/test.php",
		success: function(data) {
			console.log(data);
		},
		data: data,
		dataType: 'text',
	});

}


var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}
function updateFirst(event) {
  var p = document.querySelector("p");

  if (p) {
    p.style.color = event.target.value;
  }
}function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}





// A $( document ).ready() block.
$( document ).ready(function() {

	$( "#submitbutton").click(submitbutton)

});






