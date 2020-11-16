Survey
    .StylesManager
    .applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = {
    title: "Carbon Calculators",
    showProgressBar: "bottom",
    //showTimerPanel: "top",
    //maxTimeToFinishPage: 10,
    //maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Next",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to take part in an experiment on carbon footprint calculators. <br/> Before you proceed, please first fill in the demographic questions on the next page."
                }
            ]
        }, {
          "questions": [
              {
                  "name": "name",
                  "type": "text",
                  "title": "Please enter your name:",
                  "placeHolder": "name",
                  "isRequired": true
              }, {
                  "name": "birthdate",
                  "type": "text",
                  "inputType": "date",
                  "title": "Your birthdate:",
                  "isRequired": true
              }, {
                  "name": "email",
                  "type": "text",
                  "inputType": "email",
                  "title": "Your e-mail:",
                  "placeHolder": "jon.snow@nightwatch.org",
                  "isRequired": true,
                  "validators": [
                      {
                          "type": "email"
                      }
                  ]
              }
          ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "civilwar",
                    title: "When was the Civil War?",
                    choices: [
                        "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"
                    ],
                    correctAnswer: "1850-1900"
                }
            ]
        }, {
            questions: [
                {
<<<<<<< HEAD
                    type: "rating",
                    name: "question1",
                    title: "Question 1",
                    minRateDescription: "Not at all",
                    maxRateDescription: "Completely"
                }, {
                    type: "rating",
                    name: "question2",
                    title: "Question 2",
                    minRateDescription: "Not at all",
                    maxRateDescription: "Completely"
                },
                {
                    type: "rating",
                    name: "question3",
                    title: "Question 3",
                    minRateDescription: "Not at all",
                    maxRateDescription: "Completely"
                },
            ]
        }, {
            questions: [
                {
                    "type": "bootstrapslider",
                    "name": "Question 4",
                    "step": 50,
                    "rangeMin": 100,
                    "rangeMax": 1000
                }, {
                    "type": "bootstrapslider",
                    "name": "Question 5",
                    "step": 50,
                    "rangeMin": 100,
                    "rangeMax": 1000
                }, {
                    "type": "bootstrapslider",
                    "name": "Question 6",
                    "step": 50,
                    "rangeMin": 100,
                    "rangeMax": 1000
                },
            ]
        }, {
            questions: [
                {
                    type: "rating",
                    name: "question1",
                    title: "Question 7",
                    minRateDescription: "Not at all",
                    maxRateDescription: "Completely"
                }, {
                    type: "rating",
                    name: "question7",
                    title: "Question 8",
                    minRateDescription: "Not at all",
                    maxRateDescription: "Completely"
                },
                {
                    type: "rating",
                    name: "question3",
                    title: "Question 9",
                    minRateDescription: "Not at all",
                    maxRateDescription: "Completely"
                },
=======
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "Who said 'Give me liberty or give me death?'",
                    choicesOrder: "random",
                    choices: [
                        "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                    ],
                    correctAnswer: "Patrick Henry"
                }
>>>>>>> parent of a5fb99f... First set of 4 questions and final page with HTML image
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
<<<<<<< HEAD
                    "type": "bootstrapslider",
                    "name": "Question 10",
                    "step": 50,
                    "rangeMin": 100,
                    "rangeMax": 1000
                }, {
                    "type": "bootstrapslider",
                    "name": "Question 11",
                    "step": 50,
                    "rangeMin": 100,
                    "rangeMax": 1000
                }, {
                    "type": "bootstrapslider",
                    "name": "Question 12",
                    "step": 50,
                    "rangeMin": 100,
                    "rangeMax": 1000
                },
            ]
        }, {
            "elements": [
                {
<<<<<<< HEAD
                    type: "html",
                    html: "<h4>Your level of education is {education}"
=======
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "What is the Magna Carta?",
                    choicesOrder: "random",
                    choices: [
                        "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                    ],
                    correctAnswer: "The foundation of the British parliamentary system"
>>>>>>> parent of a5fb99f... First set of 4 questions and final page with HTML image
=======
                    "type": "image",
                    "name": "banner",
                    "imageLink": "https://c.files.bbci.co.uk/1305E/production/_112381977_carbon_footprint_640-nc.png",
                    "position": "center",
                    "imageWidth": "500px",
                    "imageHeight": "300px"
>>>>>>> parent of 7f488b7... Revert change
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
