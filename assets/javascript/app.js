$(document).ready(function () {

    //Object Array that holds the trivia game
    var trivia = [
        {
            question: ["I have a lot of questions. Number one, how dare you?"],
            choice: [Pam, Angela, Kelly, Jan],
            answer: [2],
            message: ["Kelly said this to Ryan on Episode 11 of Season 4."],
            image: [<iframe width="640" height="360" src="https://vlipsy.com/embed/4ozSClCI" frameborder="0"></iframe>],
        },
        {
            question: ["Sorry I annoyed you with my friendship."],
            choice: [Dwight, Michael, Andy, Kevin],
            answer: [2],
            message: ["Andy said this to Michael on Episode 13 of Season 3."],
            image: [<iframe src="https://giphy.com/embed/l3Ucl5pIqSaGa82T6" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/thedannychang-the-office-michael-scott-andy-bernard-l3Ucl5pIqSaGa82T6">via GIPHY</a></p>],
        },
        {
            question: ["And I knew exactly what to do. But in a much more real sense, I had no idea what to do."],
            choice: [Kevin, Jim, Dwight, Michael],
            answer: [3],
            message: ["Michael said this to the camera in regards to Stanley's heart attack on Episode 13 of Season 5."],
            image: [<img src="assets/images/noidea.gif"></img>],
        },
        {
            question: ["I'm Not Superstitious. I'm just a little Stitious."],
            choice: [Erin, Michael, Andy, Kevin],
            answer: [1],
            message: ["Michael talking to the camera about hitting Meredith with his car on Episode 1 of Season 4."],
            image: [<iframe src="https://giphy.com/embed/PMqhzKfuiMLQc" width="480" height="204" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/funny-the-office-tv-show-PMqhzKfuiMLQc">via GIPHY</a></p>],
        },
        {
            question: ["I Wish I Could Menstruate. I'd Be More In Tune With The Moon And The Tides."],
            choice: [Dwight, Michael, Andy, Kevin],
            answer: [0],
            message: ["Dwight Schrute on menstruation on Episode 21 of Season 3."],
            image: [<img src="assets/images/dwight-shrute-i-wish-i-could-menstruate-if-i-could-menstruate-i-wouldn-t-have-to-deal-with-idiotic-calendars-anymore-i-d-just-be-able-to-count-down-from-my-previous-cycle-1484014404.jpg"></img>],
        },
        {
            question: ["I'm always thinking one step ahead, like a carpenter that makes stairs."],
            choice: [Andy, Michael, Kevin, Erin],
            answer: [0],
            message: ["Andy on gaining power in the Scranton branch. Episode 8 of Season 3."],
            image: [<img src="assets/images/carpenter.jpg"></img>],
        },
        {
            question: ["'R' Is One Of The Most Menacing Of Sounds. That’s Why They Call It 'Murder' Not 'Mukduk'."],
            choice: [Jim, Michael, Andy, Dwight],
            answer: [3],
            message: ["Dwight Schrute on mafia family names in Episode 5 of Season 6."],
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

    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var timer = 15;
    var intervalID;

    $("#resetButton").hide();
    $("#startButton").on("click", run);
    $("#startButton").hide();
    function run() {
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 1000);
        function decrement () {
            timer --;
            $("#timerArea").html("<h2>" + timer + "<h2>");
            if (timer === 0) {
                stop();
                unanswered++;
                $("#answerArea").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            };
        };
        function displayquestion() {
            index = math.floor(math.random()*trivia.length);
            pick = options[index];
        };
    };

    

    function stop() {
        clearInterval(intervalID);
    };

    run();

)};