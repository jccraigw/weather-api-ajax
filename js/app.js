console.log("hi!");

var zip = prompt("What Zip would you like to see Weather for?");
var array = ["images/andrej-chudy-16304.jpg", "images/christian-deknock-222409.jpg", "images/david-moum-238279.jpg", "images/mario-calvo-3518.jpg", "images/stephanie-klepacki-222873.jpg"];
var city;
$.ajax({
	method: "GET",
	url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial",
	success: function(response){

		city = response;
		console.log(response);
		$('#location').append("<h1>" + city.name + "</h1>");
		$('#description').append("<h3>" + city.weather[0].description + "</h3");

		// var temp_convert = city.main.temp;
		// temp_convert = temp_convert * (9/5) - 459.67;	
		$('#temp').append(Math.ceil(city.main.temp));

		var d = new Date();
		var day = d.getDay();
		var day_text= "";

		console.log(day);

		

		switch(day){
			case 0:
			day_text="Sunday";
			break;
			case 1:
			day_text="Monday";
			break;
			case 2:
			day_text="Tuesday";
			break;
			case 3:
			day_text="Wednesday";
			break;
			case 4:
			day_text="Thursday";
			break;
			case 5:
			day_text="Friday";
			break;
			case 6:
			day_text="Saturday";
			break;
			default:
			day_text="Friday?";
			break;

		}

		$('#day').append("<h4>" + "<b>"+ day_text +"</b>" + " Today</h4>");
		$('#max').append("<h4>" + Math.ceil(city.main.temp_max) + "</h4>");
		$('#min').append("<h4>" + Math.ceil(city.main.temp_min)+ "</h4>");
		var i = 0;
		var cloud = "cloud";
		var rain = "rain";
		var thunder = "thunder";
		var snow = "snow";
		var mist = "mist"

		if(city.weather[0].description.indexOf(cloud) != -1){

			$('body').css("background-image", "url(" + array[4] +")");

		}else if(city.weather[0].description.indexOf(rain) != -1){

			$('body').css("background-image", "url(" + array[3] +")");
		}else if(city.weather[0].description.indexOf(thunder) != -1){

			$('body').css("background-image", "url(" + array[2] +")");
		}else if(city.weather[0].description.indexOf(snow) != -1){

			$('body').css("background-image", "url(" + array[1] +")");
		}else{

			$('body').css("background-image", "url(" + array[0] +")");
		}



		 
		


	}


})