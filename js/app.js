var counter = 0;
var correct = 0;

$(document).ready(function () {
    setUpQuiz();
});


var questions = new Array();
function setUpQuiz(){
    questions[0] = new Question("Which is NOT a Software Programming Language?", "HTML5", "JavaScript", "Ruby", "Whitespace", 1);
    questions[1] = new Question("Which IDE do you need to program in JavaScript?", "Chrome", "Visual Studio", "None", "Sublime Text 2", 3);
    questions[2] = new Question("Which of these is NOT a JavaScript framework?", "jQuery", "Angular", "Ruby on Rails", "TypeScript", 3);
    questions[3] = new Question("Who created JavaScript?", "Bill Gates", "Brendan Eich", "The guy who made Java's son", "Elon Musk", 2);
    questions[4] = new Question("What average speed was dial-up internet?", "1Mb/s", "12 kbit/s", "512 kbit/s", "56 kbit/s", 4);
}

function Question(q, one, two, three, four, a) {
    this.question = q;
    this.one = one;
    this.two = two;
    this.three = three;
    this.four = four;
    this.answer = a;
}

function startQuiz() {
    $("#opening").animate({ opacity: 0.1 }, 1000, function () {
        $(this).addClass('hide');
        $('#questions').fadeTo("slow", 1);
        $('#questions').removeClass('hide');
        populateQuestion();
    });
  
}

function populateQuestion() {
    $('#feedback p').text('');
    $('.questionText p').text(questions[counter].question);
    $('#l1').text(questions[counter].one);
    $('#l2').text(questions[counter].two);
    $('#l3').text(questions[counter].three);
    $('#l4').text(questions[counter].four);

}

function checkAnswer() {

    if (!$("input[name='q']:checked").val()) {
        alert('Please choose an answer!');
        return;
    }

    if ($("input[name='q']:checked").val() == questions[counter].answer) {
        correct++;
        $('#feedback p').text('Correct!');
    }
    else
    {
        $('#feedback p').text('Wrong :(');
    }

    counter++;
    if (counter < questions.length) {
        $("#questions").animate({ opacity: 0.1 }, 2000, function () {
            $(this).addClass('hide');
            $('#questions').fadeTo("slow", 1);
            $('#questions').removeClass('hide');
            populateQuestion();
        });
    }
    else {
        $('#feedback p').fadeTo("slow", 0.5);
        $("#questionsMain").animate({ opacity: 0.1 }, 2000, function () {
            $(this).addClass('hide');
            $('#refresh').removeClass('hide');
            $('#feedback p').text('You scored ' + correct + ' out of ' + questions.length + '!');
            $('#feedback p').fadeTo("slow", 1);
        });
    }
}