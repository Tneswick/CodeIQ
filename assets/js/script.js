// questions object array
var questions = [
    {
        id:0,
        q: "What CSS property allows you to change the color of the background?",
        options: ["color", "set-background", "background-color:"],
        a: "background-color:"
    },
    {
        id:1,
        q: "What does the acronym 'HTML' stand for?",
        options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hypertext Markdown Launcher"],
        a: "Hypertext Markup Language"
    },
    {
        id:2,
        q: "What vanilla JavaScript function will return a number in the range of 0 to 1, including 0 but not including 1?",
        options: ["math.Random()", "Math.random()", "Math.Random()"],
        a: "Math.random()"
    },
    {
        id:3,
        q: "What HTML element will display it's text onto the tab of your browser?",
        options: ["<title>", "<header>", "<tab>"],
        a: "<title>"
    },
    {
        id:4,
        q: "What is the name of a series of items collected within brackets '[]' in JavaScript?",
        options: ["An Object", "A Variable", "An Array"],
        a: "An Array"
    },
    {
        id:5,
        q: "What HTML attribute is used on an anchor element to open that specific link in a new tab if clicked?",
        options: ["open='new-tab'", "click='blank'", "target='blank'"],
        a: "target='blank'"
    }
]

// variables
var count = 600;
var questionIdNum = 0;
var score = 0;

// variables for dom elements
var timerEl = document.getElementById("timer");
var resultTextEl = document.getElementById("result-text");
var resultDivEl = document.getElementById("result");
var btn1El = document.getElementById("btn1");
var btn2El = document.getElementById("btn2");
var btn3El = document.getElementById("btn3");
var questionEl = document.getElementById("question-text");
var startButtonEl = document.getElementById("start-button");
var questionDivEl = document.getElementById("question");
var instructionsEl = document.getElementById("instructions");
var optionsEl = document.getElementById("options");
var listEl = document.getElementById("list");
var containerEl = document.getElementById("container");
var highScoresDivEl = document.getElementById("high-scores");
var highScoresListEl = document.getElementById("high-scores-list");
var inputFieldEl = document.getElementById("initials-box");
var inputSubmitEl = document.getElementById("initials-submit");


// game start
var startGame = function(stopper) {
    // hide start button and instructions
    startButtonEl.className = instructionsEl.className = "hidden";
    
    // unhide question div, answer div, and timer
    questionDivEl.className = optionsEl.className = listEl.className = timerEl.className = containerEl.className = "";

    if (stopper === 2) {
        count = 50;
        questionIdNum = 0;
        score = 0;

        // timer logic
        var startTimer = setInterval(function(){
            count--;
            timerEl.textContent = "Timer: " + count;
            if (count <= 0) {
                timerEl.textContent = "Time's Up!";
                clearInterval(startTimer);
                // pass count of 1 to endgame
                endGame(1);
            }; 
        }, 1000);
    };

    

    if (stopper === 1) {
        clearInterval(startTimer);
        timerEl.textContent = "Time left: " + count;
        endGame(count);
    } else {
        // send to questions handler
        questionsHandler();
    }
}

var questionsHandler = function() {
    // build question
    questionEl.textContent = questions[questionIdNum].q;
    btn1El.textContent = questions[questionIdNum].options[0];
    btn2El.textContent = questions[questionIdNum].options[1];
    btn3El.textContent = questions[questionIdNum].options[2];
};

// functions for button presses, pass 'answer' into checkAnswer
var option1 = function() {
    checkAnswer(0);
};
var option2 = function() {
    checkAnswer(1);
};
var option3 = function() {
    checkAnswer(2);
};

var checkAnswer = function(answer) {    
    if (questions[questionIdNum].a === questions[questionIdNum].options[answer]) {
        score= score + 3;
        resultTextEl.className = "";
        resultTextEl.textContent = "Correct!";
        questionIdNum++;
    } else {
        score = score - 2;
        resultTextEl.className = "";
        resultTextEl.textContent = "Incorrect! -10 Seconds";
        questionIdNum++;
        count = count - 10;
    };

    if (questionIdNum >= questions.length) {
        debugger;
        startGame(1);
    } else {
        questionsHandler();
    }
};

// endGame logic
var endGame = function(finalCount) {
    // calculate score
    score = finalCount * score;
    console.log(score);

    questionEl.textContent = "Well done! Your final score is " + "'" + score + "'" + "! Please save your initials below if you'd like.";

    // hide btns
    btn1El.className = btn2El.className = btn3El.className = "hidden";

    // unhide high-score page
    highScoresDivEl.className = "";

}

//start button click
startButtonEl.addEventListener("click", startGame(2));

// options clicks
btn1El.addEventListener("click", option1);
btn2El.addEventListener("click", option2);
btn3El.addEventListener("click", option3);

// high score submit and screen
inputSubmitEl.addEventListener("click", function() {
    // pull down high scores from local storage
    var highScores = localStorage.getItem("high-scores");
    if (!highScores) {
        highScores = []
    } else {
        var highScores = JSON.parse(highScores);
    };
    // pull user's input into a variable
    var initials = inputFieldEl.value;

    // add this score to array of high-scores
    var userScore = {
        name: initials,
        score: score
    }
    highScores.push(userScore);

    var storageString = JSON.stringify(highScores);
    localStorage.setItem("high-scores", storageString);
    highScoreScreen();

    // unhide elements
    highScoresDivEl.className = "";

    for (var i = 0; i < highScores.length; i++) {
        var listItemEl = document.createElement("li");
        

    }
})
