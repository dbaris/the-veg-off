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

	var chosenVeggie = veggieJSON["vegetables"][getRandomInt(0, veggieJSON["vegetables"].length)];

	/* will actually get via get request & parse */
	var adjectiveJSON = {"adjectives": ["little", "young", "big", "political", "bad", "social",  "free", "strong", "hard", "late", "cold", "heavy", "serious", "single", "beautiful", "happy", "afraid", "rich", "quiet", "concerned", "lonely",  "bright", "basic", "sick", "soft", "tall",  "popular", "tiny",  "powerful", "silent", "religious", "quick", "crazy", "angry", "perfect", "tired", "wild", "dangerous", "famous", "married", "terrible", "successful", "fair", "professional", "obvious", "proper", "sharp", "growing", "traditional", "slow", "surprised", "busy", "funny", "scientific", "ancient", "sweet", "secret", "tough", "careful", "domestic", "enormous", "sexy", "nervous", "critical", "proud", "complex", "guilty", "sad", "sleepy", "cool", "presidential", "weak", "unusual"]};
	var chosenAdj = adjectiveJSON["adjectives"][getRandomInt(0, adjectiveJSON["adjectives"].length)];

	var veggieElem = document.getElementById("noun");
	veggieElem.innerHTML = chosenVeggie;

	var adjElem = document.getElementById("adjective");
	adjElem.innerHTML = chosenAdj;

}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min)) + min;
}
