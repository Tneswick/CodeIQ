// questions object array
var questions = [
    {
        id:0,
        q: "What CSS property allows you to change the color of the background?",
        options: ["color", "set-background", "background-color"],
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
var count = 60;
var questionIdNum = 0;

// variables for dom elements
var timerEl = document.getElementById("timer");
var resultTextEl = document.getElementById("result-text");
var resultDivEl = document.getElementById("result");
var btn1El = document.getElementById("btn1");
var btn2El = document.getElementById("btn2");
var btn3El = document.getElementById("btn3");
var questionEl = document.getElementById("question-text");

// game start
var startGame = function() {
    // unhide question and answer divs
}