var userChoice = "veggie";

function setToCSProf() {
	userChoice = "prof";
}

function setToVeg() {
	userChoice = "veggie";
}


function makeOff() {
	console.log(userChoice);
	if (userChoice === "veggie") {
		getVeggies();
	} else if (userChoice === "prof") {
		getProf();
	} 
}

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
        "artichoke",
        "arugula",
        "asparagus",
        "aubergine",
        "azuki bean",
        "banana squash",
        "basil",
        "bean sprout",
        "beet",
        "black bean",
        "black-eyed pea",
        "bok choy",
        "borlotti bean",
        "broad beans",
        "broccoflower",
        "broccoli",
        "brussels sprout",
        "butternut squash",
        "cabbage",
        "calabrese",
        "caraway",
        "carrot",
        "cauliflower",
        "cayenne pepper",
        "celeriac",
        "celery",
        "chamomile",
        "chard",
        "chayote",
        "chickpea",
        "chives",
        "cilantro",
        "collard green",
        "corn",
        "corn salad",
        "courgette",
        "cucumber",
        "daikon",
        "delicata",
        "dill",
        "eggplant",
        "endive",
        "fennel",
        "fiddlehead",
        "frisee",
        "garlic",
        "gem squash",
        "ginger",
        "green bean",
        "green pepper",
        "habanero",
        "herbs and spice",
        "horseradish",
        "hubbard squash",
        "jalapeno",
        "jerusalem artichoke",
        "jicama",
        "kale",
        "kidney bean",
        "kohlrabi",
        "lavender",
        "leek ",
        "legume",
        "lemon grass",
        "lentils",
        "lettuce",
        "lima bean",
        "mamey",
        "mangetout",
        "marjoram",
        "mung bean",
        "mushrooms",
        "mustard green",
        "navy bean",
        "nettles",
        "new zealand spinach",
        "nopale",
        "okra",
        "onion",
        "oregano",
        "paprika",
        "parsley",
        "parsnip",
        "patty pan",
        "peas",
        "pinto bean",
        "potato",
        "pumpkin",
        "radicchio",
        "radish",
        "rhubarb",
        "rosemary",
        "runner bean",
        "rutabaga",
        "sage",
        "scallion",
        "shallot",
        "skirret",
        "snap pea",
        "soy bean",
        "spaghetti squash",
        "spinach",
        "squash ",
        "sweet potato",
        "tabasco pepper",
        "taro",
        "tat soi",
        "thyme",
        "tomato",
        "topinambur",
        "tubers",
        "turnip",
        "wasabi",
        "water chestnut",
        "watercress",
        "white radish",
        "yam",
        "zucchini"
    ]};	

	chosenVeggie = veggieJSON["vegetables"][getRandomInt(0, veggieJSON["vegetables"].length)];

	/* will actually get via get request & parse */
	var adjectiveJSON = {"adjectives": ["little", "young", "big", "political", "bad", "social",  "free", "strong", "hard", "late", "cold", "heavy", "serious", "single", "beautiful", "happy", "afraid", "rich", "quiet", "concerned", "lonely",  "bright", "basic", "sick", "soft", "tall",  "popular", "tiny",  "powerful", "silent", "religious", "quick", "crazy", "angry", "perfect", "tired", "wild", "dangerous", "famous", "married", "terrible", "successful", "fair", "professional", "obvious", "proper", "sharp", "growing", "traditional", "slow", "surprised", "busy", "funny", "scientific", "ancient", "sweet", "secret", "tough", "careful", "domestic", "enormous", "sexy", "nervous", "critical", "proud", "complex", "guilty", "sad", "sleepy", "cool", "presidential", "weak", "unusual"]};
	chosenAdj = adjectiveJSON["adjectives"][getRandomInt(0, adjectiveJSON["adjectives"].length)];


	/* get image according to chosen veggie */
	var bingAPIUrl = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + chosenAdj + "%20" + chosenVeggie + "&mkt=en-us";

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", bingAPIUrl, false ); 
	xmlHttp.setRequestHeader('Ocp-Apim-Subscription-Key', 'f16a5984b2c8426bbff51af75ea5f8e6');
	
    var vegUrl;
    xmlHttp.onreadystatechange = function() {
    	var data = JSON.parse(xmlHttp.responseText);
 		vegUrl = data["value"][0]["contentUrl"];
    };

    xmlHttp.send( null );
    //return xmlHttp.responseText;


	// var vegUrl = "https://pbs.twimg.com/profile_images/445251204222685184/6gIRUjqY.jpeg";

	var veggieElem = document.getElementById("noun");
	veggieElem.innerHTML = "<p>" + chosenVeggie + "</p> <img src="+ vegUrl+"/>";

	var adjElem = document.getElementById("adjective");
	adjElem.innerHTML = chosenAdj;


}

function getProf() {

	/* choose random */
	var chosenProf = "Ming Chow"

	/* get image according to chosen veggie */
	var bingAPIUrl = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + chosenProf + "&mkt=en-us";

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", bingAPIUrl, false ); 
	xmlHttp.setRequestHeader('Ocp-Apim-Subscription-Key', 'f16a5984b2c8426bbff51af75ea5f8e6');
	
    var profUrl;
    xmlHttp.onreadystatechange = function() {
    	var data = JSON.parse(xmlHttp.responseText);
 		profUrl = data["value"][0]["contentUrl"];
    };

    xmlHttp.send( null );

	var profElem = document.getElementById("noun");
	profElem.innerHTML = "<p>" + chosenProf + "</p> <img src="+ profUrl+"/>";

	var adjElem = document.getElementById("adjective");
	adjElem.innerHTML = chosenAdj;	


}


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min)) + min;
}
