$(document).ready(function () {

    //Object Array that holds the trivia game
    var trivia = [
        {
            question: ["I have a lot of questions. Number one, how dare you?"],
            choice: [Pam, Angela, Kelly, Jan],
            answer: [2],
            message: ["Kelly to Ryan, Episode 11 of Season 4."],
            image: [<iframe width="640" height="360" src="https://vlipsy.com/embed/4ozSClCI" frameborder="0"></iframe>],
        },
        {
            question: ["Sorry I annoyed you with my friendship."],
            choice: [Dwight, Michael, Andy, Kevin],
            answer: [2],
            message: ["Andy on his relationship with Michael, Episode 13 of Season 3."],
            image: [<iframe src="https://giphy.com/embed/l3Ucl5pIqSaGa82T6" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/thedannychang-the-office-michael-scott-andy-bernard-l3Ucl5pIqSaGa82T6">via GIPHY</a></p>],
        },
        {
            question: ["And I knew exactly what to do. But in a much more real sense, I had no idea what to do."],
            choice: [Kevin, Jim, Dwight, Michael],
            answer: [3],
            message: ["Michael on Stanley's heart attack, Episode 13 of Season 5."],
            image: [<img src="assets/images/noidea.gif"></img>],
        },
        {
            question: ["I'm Not Superstitious. I'm just a little Stitious."],
            choice: [Erin, Michael, Andy, Kevin],
            answer: [1],
            message: ["Michael on hitting Meredith with his car, Episode 1 of Season 4."],
            image: [<iframe src="https://giphy.com/embed/PMqhzKfuiMLQc" width="480" height="204" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/funny-the-office-tv-show-PMqhzKfuiMLQc">via GIPHY</a></p>],
        },
        {
            question: ["I Wish I Could Menstruate. I'd Be More In Tune With The Moon And The Tides."],
            choice: [Dwight, Michael, Andy, Kevin],
            answer: [0],
            message: ["Dwight Schrute on menstruation, Episode 21 of Season 3."],
            image: [<img src="assets/images/dwight-shrute-i-wish-i-could-menstruate-if-i-could-menstruate-i-wouldn-t-have-to-deal-with-idiotic-calendars-anymore-i-d-just-be-able-to-count-down-from-my-previous-cycle-1484014404.jpg"></img>],
        },
        {
            question: ["I'm always thinking one step ahead, like a carpenter that makes stairs."],
            choice: [Andy, Michael, Kevin, Erin],
            answer: [0],
            message: ["Andy on gaining power in the Scranton branch, Episode 8 of Season 3."],
            image: [<img src="assets/images/carpenter.jpg"></img>],
        },
        {
            question: ["'R' Is One Of The Most Menacing Of Sounds. That’s Why They Call It 'Murder' Not 'Mukduk'."],
            choice: [Jim, Michael, Andy, Dwight],
            answer: [3],
            message: ["Dwight Schrute on mafia family names, Episode 5 of Season 6."],
            image: [<img src="assets/images/mukduk.gif"></img>],
        },
        {
            question: ["Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way."],
            choice: [Pam, Erin, Kelly, Michael],
            answer: [3],
            message: ["Michael Scott on the art of conversation, Episode 11 of Season 5."],
            image: [<img src="assets/images/sentence.gif"></img>],
        },
        {
            question: ["Michael and Jan seem to be playing their own separate game. And it's called 'Let's see how uncomfortable we can make our guests.' And they're both winning."],
            choice: [Pam, Jim, Andy, Dwight],
            answer: [1],
            message: ["Jim on Dinner Parties, Episode 9 of Season 4."],
            image: [<img src="assets/images/guests.png"></img>],
        },
        {
            question: ["I can tell Michael's mood by which comedy routine he chooses to do. The more infantile, the more upset he is. And he just skipped the Ace Ventura talking butt thing. He never skips it. This is bad."],
            choice: [Jim, Pam, Toby, Dwight],
            answer: [1],
            message: ["Pam on Michael's ability to cope with change, Episode 18 of Season 5"],
            image: [<img src="assets/images/pam.gif"></img>],
        },
    ];

    //variable declarations:
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var total = 0;
    var timer = 15;
    var intervalId;

    //Timer of 15 secs displays here. Will reset when moved onto the next question.
    $("#timerArea");
    //Questions and answer choices will display here
    $("#questionArea");
    //When user has selected a choice, the answer will display here. It will show of the trivia array [choice, message, image] and if the user got it correct, wrong or unanswered.
    $("#AnswerArea");
    //Start game button, will hide once clicked
    $("startButton");
    //Submit button, it will be hidden until start game is clicked and will hide again when all of the questions have been asked reached.
    $("submitButton");
    //Allows user to move to the next question once answer has been selected and the results have been displayed.
    $("nextButton");
    //Play again button. Hidden trivia array has completed the loop. Will reset the game in the DOM without reloading the page.
    $("resetButton");


    //Game Function Here:


    $("#resetButton").hide();
    $("submitButton").hide();
    $("nextButton").hide();
    $("#startButton").on("click", start());
    
    for (var i=0; i < trivia.length; i++){
        console.log(trivia[i].question);
        console.log(trivia[i].choice);
        console.log(trivia[i].answer);
        console.log(trivia[i].message);
        console.log(trivia[i].image);
    };

    function start() {
        $("#startButton").hide();
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        function decrement() {
            timer--;
            $("timerArea").html("<h3>" + timer + "</h3>")
            if (timer === 0) {
                clearInterval(intervalID);
                unanswered++;
                $("#answerArea").html("<p>Time is up! The correct answer is: " + trivia[i].answer + "</p>");
                $("#answerArea").append("<p>" + trivia[i].message + "</p>");
                $("#answerArea").append("<img>" + trivia[i].image + "</img>");
                $("#submitButton").show();
            }};
        
        
        $("#questionArea").html(trivia[i].question);
        $("#questionArea").append(trivia[i].choice);
        $("#submitButton").show();
        
        $("#submitButton").on(click);
        //when submit button is clicked, check if answer is correct.
        //if incorrect then wrong++;
        //and display [answer, message, image];
        //if correct then correct ++;
        //and display [answer, message, image];
        //next button will display the next question in the array.
        $("nextButton").show();
        $("nextButton").on(click);
            $("#questionArea").html(trivia[i].question);
            $("#questionArea").append(trivia[i].choice);
            $("#submitButton").show();

        //etc. need to place this in a loop... I think...
    
        
        // this will trigger the end of the game and display the results
        if ((wrong + correct + unanswered) === total) {
            $("#questionArea").empty();
            $("#answerArea").html("<h3>Game Over!  Here's how you did: </h3>");
            $("#answerArea").append("<h4> Correct: " + correct + "</h4>" );
            $("#answerArea").append("<h4> Incorrect: " + wrong + "</h4>" );
            $("#answerArea").append("<h4> Unanswered: " + unanswered + "</h4>" );
            $("#resetButton").show();
        };
    
    };
     
});



