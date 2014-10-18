(document).ready(function () {
    setUpQuiz();
});


var questions = new Array();
function setUpQuiz(){
    questions[0] = new Question("Which is NOT a Software Programming Language?", "HTML5", "JavaScript", "Ruby", "Whitespace", 1);
    questions[1] = new Question("Which IDE do you need to program in JavaScript?", "Chrome", "Visual Studio", "None", "Sublime Text 2", 3);
    questions[2] = new Question("Which of these is NOT a JavaScript framework?", "jQuery", "Angular", "Ruby on Rails", "TypeScript", 3);
    questions[3] = new Question("Who created JavaScript?", "Bill Gates", "Brendan Eich", "The guy who made Java's son", "Elon Musk", 1);
    questions[4] = new Question("What average speed was dial-up internet?", "1Mb/s", "12 kbit/s", "512 kbit/s", " 56 kbit/s", 4);
}

function Question(q, one, two, three, four, a) {
    this.question = q;
    this.one = one;
    this.two = two;
    this.three = three;
    this.four = four;
    this.answer = a;
}