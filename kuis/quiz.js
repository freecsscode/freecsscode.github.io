var questions = _.shuffle([{
        question: "CSS merupakan singkatan dari?",
        choices: _.shuffle([{
                choice: "Computer Sheet Style",
                answer: 0
            },
            {
                choice: "Cascading Style Sheet",
                answer: 1
            },
            {
                choice: "Computer Style Sheet",
                answer: 0
            },
            {
                choice: "Cascading Sheet Style",
                answer: 0
            }
        ])
    },
    {
        question: "Bahasa yang digunakan untuk mendesain sebuah website adalah? ",
        choices: _.shuffle([{
                choice: "CSS",
                answer: 1
            },
            {
                choice: "HTML",
                answer: 0
            },
            {
                choice: "JQuery",
                answer: 0
            },
            {
                choice: "XML",
                answer: 0
            }
        ])
    },
    {
        question: "Properti yang digunakan untuk mengatur ukuran besar kecilnya sebuah huruf adalah ?",
        choices: _.shuffle([{
                choice: "Font-Weight",
                answer: 0
            },
            {
                choice: "Font-Size",
                answer: 1
            },
            {
                choice: "Font-Variant",
                answer: 0
            },
            {
                choice: "Font-Color",
                answer: 0
            }
        ])
    },
    {
        question: "Properti yang digunakan untuk mengatur tebal tipisnya sebuah huruf adalah ?",
        choices: _.shuffle([{
                choice: "Font-Weight",
                answer: 1
            },
            {
                choice: "Font-Size",
                answer: 0
            },
            {
                choice: "Font-Color",
                answer: 0
            },
            {
                choice: "Font-variant",
                answer: 0
            }
        ])
    },
    {
        question: "Untuk membuat sebuah garis tepi pada suatu content dibutuhkan sebuah properti ?",
        choices: _.shuffle([{
                choice: "Border-Radius",
                answer: 0
            },
            {
                choice: "Color",
                answer: 0
            },
            {
                choice: "Border",
                answer: 1
            },
            {
                choice: "Font-Style",
                answer: 0
            }
        ])
    },
    {
        question: "Berikut adalah Nilai (Value) yang dibutuhkan untuk membuat sebuah paragraf menjadi rata kanan-kiri pada properti 'text-align' adalah ?",
        choices: _.shuffle([{
                choice: "Center",
                answer: 0
            },
            {
                choice: "Justify",
                answer: 1
            },
            {
                choice: "Right",
                answer: 0
            },
            {
                choice: "Left",
                answer: 0
            }
        ])
    },
    {
        question: "Dimana didalam dokumen html yang menjadi tempat yang tepat untuk merujuk ke style sheet eksternal ? ",
        choices: _.shuffle([{
                choice: "Didalam (body) section ",
                answer: 0
            },
            {
                choice: "Didalam (head) section",
                answer: 1
            },
            {
                choice: "Diawal dokumen html",
                answer: 0
            },
            {
                choice: "Diakhir dokumen html",
                answer: 0
            }
        ])
    },
    {
        question: "Properti mana yang digunakan untuk mengatur warna latar belakang (background) ?",
        choices: _.shuffle([{
                choice: "Background-Position",
                answer: 0
            },
            {
                choice: "Backgorund-Font",
                answer: 0
            },
            {
                choice: "Background-Style",
                answer: 0
            },
            {
                choice: "Background-Color",
                answer: 1
            }
        ])
    },
    {
        question: "Yang bukan bagian dari CSS adalah ?",
        choices: _.shuffle([{
                choice: "Properties",
                answer: 0
            },
            {
                choice: "Selector",
                answer: 0
            },
            {
                choice: "Nilai/values",
                answer: 0
            },
            {
                choice: "Tag",
                answer: 1
            }
        ])
    },
    {
        question: "Bagaimana anda memasukkan komentar dalam file CSS ?",
        choices: _.shuffle([{
                choice: "// ini adalah komentar //",
                answer: 0
            },
            {
                choice: "\\ ini adalah komentar \\",
                answer: 0
            },
            {
                choice: "// ini adalah komentar",
                answer: 0
            },
            {
                choice: "/* ini adalah komentar */",
                answer: 1
            }
        ])
    },
    {
        question: "Selector ID dilambangkan dengan simbol ?",
        choices: _.shuffle([{
                choice: "$",
                answer: 0
            },
            {
                choice: "#",
                answer: 1
            },
            {
                choice: ".",
                answer: 0
            },
            {
                choice: "*",
                answer: 0
            }
        ])
    },
    {
        question: "Selector CLASS dilambangkan dengan simbol ?",
        choices: _.shuffle([{
                choice: "$",
                answer: 0
            },
            {
                choice: "#",
                answer: 0
            },
            {
                choice: ".",
                answer: 1
            },
            {
                choice: "*",
                answer: 0
            }
        ])
    },
    {
        question: "Elemen styling yang tidak termasuk dalam styling CSS adalah ?",
        choices: _.shuffle([{
                choice: "Background-Styling",
                answer: 0
            },
            {
                choice: "Text-Styling",
                answer: 0
            },
            {
                choice: "Font-Styling",
                answer: 0
            },
            {
                choice: "Picture-Styling",
                answer: 1
            }
        ])
    },
    {
        question: ".kotak { Border: solid; } ”.kotak” pada kode tersebut merupakan sebuah ? ",
        choices: _.shuffle([{
                choice: "Selektor Class",
                answer: 1
            },
            {
                choice: "Selektor ID",
                answer: 0
            },
            {
                choice: "Value",
                answer: 0
            },
            {
                choice: "Properties",
                answer: 0
            }
        ])
    },
    {
        question: " #inggris { Font-weight: bold; }  ”Font-weight” pada kode tersebut merupakan sebuah ?",
        choices: _.shuffle([{
                choice: "Selektor Class",
                answer: 0
            },
            {
                choice: "Properties",
                answer: 1
            },
            {
                choice: "Selektor ID",
                answer: 0
            },
            {
                choice: "Value",
                answer: 0
            }
        ])
    }
]);

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

var numQuestions = questions.length - 5;

var userAnswer = [];

var currentQuestionText = [];

var teste = [];

$(document).ready(function () {

    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Pilih Terlebih Dahulu");
                $(document).find(".quizMessage").show();
            } else {

                userAnswer.push(questions[currentQuestion].choices[value].choice);

                currentQuestionText.push(questions[currentQuestion].question);

                teste.push(questions[currentQuestion].choices[value].answer);


                $(document).find(".quizMessage").hide();


                if (questions[currentQuestion].choices[value].answer === 1) {
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < numQuestions) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Kembali Ke Bagian Kuis");
                    quizOver = true;
                }
            }
        } else {
            startScreen();
        }
    });
});



function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;


    $(questionClass).text((currentQuestion + 1) + '. ' + question);


    $(choiceList).find("li").remove();

    var choice;
    var answer;
    for (i = 0; i < numChoices; i++) {

        choice = questions[currentQuestion].choices[i].choice;
        $('<li><input type="radio" id="item' + i + '" value=' + i + ' name="dynradio" /><label for="item' + i + '">' + choice + '</label></li>').appendTo(choiceList);
    }
}

function startScreen() {
    quizOver = false;
    $(document).find(".nextButton");
    resetQuiz();
    hideScore();
    window.location.href = "../index.html#quiz-space";
}


function resetQuiz() {
    location.reload();
    currentQuestion = 0;
    correctAnswers = 0;
    userAnswer = [];
    currentQuestionText = [];
    hideScore();
}


function displayScore() {


    console.log("Teste: " + teste);

    var feedback = $(document).find(".quizContainer > .result");

    $(document).find(".question").hide();
    $(document).find(".choiceList").hide();
    $(document).find(".quizContainer > .result").text("Jumlah Skor Anda " + correctAnswers + " / " + numQuestions);



    if (correctAnswers >= 3) {
        $('').appendTo(feedback);
    } else {
        $('').appendTo(feedback);
    }


    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}