/* JavaScript file for Activity 3, modified by Jessica Steslow, June 2023 */

//initialize function called when the script loads
function initialize(){
    cities();
};

//Function to create a table with cities and population (defined later)
function cities(){
	
	//Establishing an array of JavaScript objects for city and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//SECTION OF NEW CODE ADDED TO MAIN_WITH_DEBUG
	//IMPORTANT TO CREATE THE TABLE, TABLE HEADERS, CONNECT TO MYDIV, AND CALL LATER FUNCTIONS

	var table = document.createElement("table");    //Create the table element
	var headerRow = document.createElement("tr");   //Creates a header row element
	table.appendChild(headerRow);                   //Appends header row to table

	//Creates the column headers City and Population
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>");

	//Loops over each row of the cityPop array with an anonymous function to create the table
	cityPop.forEach(function(cityObject){

		//Creates strings of data each loop, one for each row, and creates the table
		var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
		table.insertAdjacentHTML("beforeend", rowHtml);    //Adds HTML of the table row
	});

	document.querySelector("#mydiv").appendChild(table);    //Appends the table to the div

	addColumns(cityPop);    //Passes the cityPop array to the addColumns function
	addEvents();            //Calls addEvents which puts events into the table

};

//Establishing a function to associate a citySize category with a city in the array
function addColumns(cityPop){
	
	var row = document.querySelectorAll("tr");    //defines row for which to loop over
    
	//Queries rows of data in the array and passes the row to an anonymous function within a for loop (forEach)
	//querySelectorAll("tr") selects all elements with the tag <tr>, or table row
    document.querySelectorAll("tr").forEach(function(row, i){
		

    	if (i == 0){    //Queries for the first loop
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>'); //Adds "City Size" to the header row

		} else {

    		var citySize;    //Declares the new variable citySize

    		if (cityPop[i-1].population < 100000){    //If,elseif,else clause to assign citySize to rows in the array
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		}

			//Writes the stored citySize var into the array at each row
			row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
    	}
    });
};


//Adds events on mouseover and click, both applied to the table
function addEvents(){

	//Queries for the table and adds the event with addEventListener method
	//Uses anonymous function to create and return a random color in RGB
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";    //Establishes variable for color string with the start of an RGB code

		for (var i=0; i<3; i++){    //Creates a for loop over i 3 times, to generate 3 numbers, one for each RG&B

			//Establishes a variable for a random number using math library and methods
			//Math.random returns a number between 0 and 1, that number is multipied by 255 to vary throughout
			//RGB space, and then Math.round rounds this decimal to a whole number
			var random = Math.round(Math.random() * 255);

			color += random;    //Appends the string form of the generated number to color

			//This section adds commas to the string color as needed to format RGB as readible CSS
			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			}
		};

		document.querySelector("table").style.color = color;    //Applies generated color to table via CSS
	});

	function clickme(){    //Creates a function to show custom code on alert

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)    //Applies the click me alert to the table
};


//call the initialize function when the window has loaded
window.onload = initialize();