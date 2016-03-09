// Your JavaScript goes here...

 function parse(){
		request = new XMLHttpRequest();
		// Step 1: Make request
		request.open("GET", "data.json", true);
		// Step 2: Handle the response
		request.onreadystatechange = function() {
			// Step 3: Data is ready --there is a response!
			if (request.readyState == 4) {
				// message = "";
				raw = request.responseText;
				messageData = JSON.parse(raw);
				elem = document.getElementById("messages");
			 for (i = 0; i < messageData.length; i++) {
				
				elem.innerHTML += "<p>" + messageData[i]["username"] + " said " + messageData[i]["content"] + "</p>";
				//result += "<p>Next Red Line train to " + theScheduleData["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", " + theScheduleData["TripList"]["Trips"][i]["Destination"] + " bound, will come in " + theScheduleData["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds</p>";
			}
			// elem.innerHTML = message;
			}
		};
		//Step 3: Fire off the request
		request.send(null); // null means no data nec to send
}
