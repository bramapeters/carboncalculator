Survey
    .StylesManager
    .applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = {
    //title: "Carbon Calculators",
    //showProgressBar: "top",
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
                    html: "You are about to take part in an experiment on carbon footprint calculators." +
                        " <br/> Before you proceed, please first fill in the demographic questions on the next page."
                }
            ]
        }, {
            questions: [
                {
                    type: "dropdown",
                    name: "country",
                    title: "Select the country...",
                    isRequired: true,
                    choicesByUrl: {
                        url: "https://restcountries.eu/rest/v2/all",
                        valueName: "name"
                    }
                }, {
                    "name": "birthdate",
                    "type": "text",
                    "inputType": "date",
                    "title": "Your birthdate:",
                    "isRequired": true
                }, {
                    type: "radiogroup",
                    name: "education",
                    title: "Education (highest degree completed)",
                    isRequired: true,
                    colCount: 4,
                    choices: [
                        "Graduated high school",
                        "Some college, no degree",
                        "Associate degree",
                        "Bachelor's degree",
                        "Post-graduate degree",
                        "Post-doctoral degree",
                        "Doctoral degree",
                        "Professorship",
                        "Other"
                    ]
                }
            ]
        }, {
            questions: [
                {
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
                    "name": "question4",
                    "step": 50,
                    "rangeMin": 100,
                    "rangeMax": 1000
                }, {
                    "type": "bootstrapslider",
                    "name": "question5",
                    "step": 50,
                    "rangeMin": 100,
                    "rangeMax": 1000
                }, {
                    "type": "bootstrapslider",
                    "name": "question6",
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
            ]
        }, {
            questions: [
                {
                    "type": "bootstrapslider",
                    "name": "question10",
                    "step": 50,
                    "rangeMin": 100,
                    "rangeMax": 1000
                }, {
                    "type": "bootstrapslider",
                    "name": "question11",
                    "step": 50,
                    "rangeMin": 100,
                    "rangeMax": 1000
                }, {
                    "type": "bootstrapslider",
                    "name": "question12",
                    "step": 50,
                    "rangeMin": 100,
                    "rangeMax": 1000
                },
            ]
        }, {
        var: score = question4,
            questions: [
                {
                    type: "html",
                    html: "<h4>Your level of education is {education}"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
    completedHtml: "<h4>Your level of education is {education}"
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
