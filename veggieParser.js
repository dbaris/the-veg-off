

function getVeggies() {
	/* Make get request to json*/
	// JSON.parse()

	var veggie = {
    	"description": "A list of vegetables.",
    	"vegetables": [
        	"acorn squash",
        	"alfalfa sprout",
        	"amaranth",
        	"anise",
        	"artichoke"]};	

	var vegList = veggie["vegetables"];	

	var chosenVeggie = veggie["vegetables"][getRandomInt(0, veggie["vegetables"].length)];


}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min)) + min;
}