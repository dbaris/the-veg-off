function getVeggies() {
	/* Make get request to json*/
	// JSON.parse()


	/* will actually get via get request & parse */
	var veggieJSON = {
    	"description": "A list of vegetables.",
    	"vegetables": [
        	"acorn squash",
        	"alfalfa sprout",
        	"amaranth",
        	"anise",
        	"artichoke"]};	

	var chosenVeggie = veggieJSON["vegetables"][getRandomInt(0, veggieJSON["vegetables"].length)];

	/* will actually get via get request & parse */
	var adjectiveJSON = {"adjectives": ["little", "young", "big"]};
	var chosenAdj = adjectiveJSON["adjectives"][getRandomInt(0, adjectiveJSON["adjectives"].length)];

	var veggieElem = document.getElementById("noun");
	veggieElem.innerHTML(chosenVeggie);

	var adjElem = document.getElementById("adjective");
	adjElem.innerHTML(chosenAdj);

}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min)) + min;
}
