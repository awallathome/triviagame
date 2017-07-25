//script all questions


var question1 = {
	"question": "How much wood could a woodchuck chuck...", 
	"rightans": "if a woodchuck could chuck wood?",
	"wrongans1": "if one if one had not eaten for a week?", 
	"wrongans2": "wait, what's a woodchuck?",
	"wrongans3": "1 pound per minute.",
	"wrongans4": 3
};

var question2 = {
	"question": "What 1973 movie staring Yul Brynner was the inspiration behind the HBO series Westworld?",
	"rightans": "Westworld",
	"wrongans1": "The Exorcist",
	"wrongans2": "Enter the Dragon", 
	"wrongans3": "The Dystopian Futuristic Theme Park Created for Rich People's Vacations Out on the West Coast",
	"wrongans4": 17
};

var question3 = {
	"question": "The North...",
	"rightans": "remembers",
	"wrongans1": "beheads",
	"wrongans2": "forgives and forgets",
	"wrongans3": "survives",
	"wrongans4": 52
};

var question4 = {
	"question": "Who or what did Rick Springfield wish to have?",
	"rightans": "Jesse's Girl",
	"wrongans1": "more money",
	"wrongans2": "better hair",
	"wrongans3": "a rap career",
	"wrongans4": 403
};

var	question5 = {
	"question": "Which actress was my highschool crush?",
	"rightans": "Gwyneth Paltrow",
	"wrongans1": "Lena Dunham",
	"wrongans2": "Sissy Spacek",
	"wrongans3": "Juliane Moore",
	"wrongans4": "Christina Hendricks"
};

var question6 = {
	"question": "Who's a good boy, Brutus?",
	"rightans": "You are. Yes you *are* a good boy!",
	"wrongans1": "Me!",
	"wrongans2": "Someone else's dog",
	"wrongans3": "Not you!",
	"wrongans4": "867-5309"
};

//create array of questions
var triviaQ = [
	question1, 
	question2, 
	question3,
	question4, 
	question5, 
	question6
];

// choose a question at random (or not at random)
//var num = Math.floor(Math.random() * triviaQ.length);
var num = 0;

// place answers in an array
var numAns = [
	triviaQ[num].rightans, 
	triviaQ[num].wrongans1,
	triviaQ[num].wrongans2,
	triviaQ[num].wrongans3,
	triviaQ[num].wrongans4
];

//randomize order of answers
function shuffle(numAns) {
	var i = 0
	var j = 0
	var temp = null
  for (i = 4; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = numAns[i]
    numAns[i] = numAns[j]
    numAns[j] = temp
  }
};

//send answers to #option1show, #option2show, #option3show, #option4show, #option5show
function showOptions() { 
  $(".option1Show").text(numAns[0]);
  $(".option2Show").text(numAns[1]);
  $(".option3Show").text(numAns[2]);
  $(".option4Show").text(numAns[3]);
  $(".option5Show").text(numAns[4]);
};

var currentQ = triviaQ[num].question;
	


// listen for the clicks on answers
function makeGuess() {
	
	// listen to all the answer, all of which have class = "option"
	$('.option').click(function() {
		
		//I think this one isn't working		
		if ($(this).text() == triviaQ[num].rightans) {
			
		}
		else {
		
		}
		if (num <= 5) {
			num++;
			alert("onward!");
		}
		else {
			alert("Was that so hard?");
		}
	$("#questionShow").one("click", function() {
		$("#questionShow").text(triviaQ[num].question);
		shuffle(numAns);
		showOptions();
		makeGuess();
	})
		});
};
// On click, place the question in #questionshow
$(document).ready(function() {
	$("#questionShow").one("click", function() {
		$("#questionShow").text(triviaQ[num].question);
		shuffle(numAns);
		showOptions();
		makeGuess();
	})
});

//	$("#questionShow").click(function() {
//  $("#questionShow").html(triviaQ[num].question);
//  shuffle(numAns);
//	});
//});

// listen for the clicks on answers
//$(".option").click(function() {
//	if $(this
//});

//function nextQ() {
//	$("#questionShow").html(triviaQ[num].question);
//};


	// if- clicked on "rightans", show positive feedback

	// else- show correct answer and move to the next question


// start a timer

//display the timer

