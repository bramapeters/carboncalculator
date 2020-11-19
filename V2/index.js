// Conversion factors households
var house_after_elec = 20.8
var house_after_fuel = 62.3
var house_after_gas = 48.6
var house_before_elec = 25.2
var house_before_fuel = 78.1
var house_before_gas = 60.4
var apart_after_elec = 18.0
var apart_after_fuel = 49.7
var apart_after_gas = 40.8
var apart_before_elec = 23.2
var apart_before_fuel = 55.9
var apart_before_gas = 54.6

// Average electricity use per household
var elec_avg_1 = 1930
var elec_avg_2 = 3010
var elec_avg_3 = 3610
var elec_avg_4 = 4160
var elec_avg_5 = 4380
var elec_emission = 0.4570

// Food conversion factor
// ....

// Car conversion factor
// ....

// Train conversion factor
var train_emission_km = 28.39
var weeks_per_year = 48

// Plane conversion factor
var plane_avg_speed = 907
var plane_emission_km = 175
var plane_avg_capacity = 275

// Clothes conversion factor
var clothes_weight = 0.4
var clothes_emission = 16.5
var clothes_quarter = 4

// Survey initialization
Survey
    .StylesManager
    .applyTheme("modern");

Survey
    .Serializer
    .addProperty("page", {
        name: "navigationTitle:string",
        isLocalizable: true
    });
Survey
    .Serializer
    .addProperty("page", {
        name: "navigationDescription:string",
        isLocalizable: true
    });

// Survey object
var json = {
    //"title": "Minimum data reporting form – for suspected and probable cases of COVID-19",
    "pages": [
        {
            "name": "page1",
            "navigationTitle": "Introduction",
            //"navigationDescription": "...",
            "elements": [
                {
                    type: "html",
                    html: "You are about to take part in an experiment on carbon footprint calculators." +
                        "<br/> Before you proceed, please first fill in the demographic questions on this page."
                }, {
                    type: "dropdown",
                    name: "country",
                    title: "Select your country...",
                    isRequired: true,
                    choicesByUrl: {
                        url: "https://restcountries.eu/rest/v2/all",
                        valueName: "name"
                    }
                }, {
                    type: "dropdown",
                    name: "gender",
                    title: "What is your gender?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Female",
                        "Male",
                        "Other"
                    ]
                },
            ],
        }, {
            "name": "page2",
            "navigationTitle": "Household",
            //"navigationDescription": "Person's info",
            "elements": [
                {
                    type: "dropdown",
                    name: "household_number",
                    title: "How many people live in your household (including you)?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "More"
                    ]
                }, {
                    type: "dropdown",
                    name: "household_type",
                    title: "What type of house are you living in? When is it built?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Apartment, before 1975",
                        "Apartment, after 1975",
                        "House, before 1975",
                        "House, after 1975",
                    ]
                }, {
                    type: "dropdown",
                    name: "household_heat",
                    title: "How do you heat the house?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Electricity heating",
                        "Fuel oil heating",
                        "Gas heating",
                    ]
                }, {
                    type: "bootstrapslider",
                    name: "household_size",
                    title: "What is the size of your home (in M2)?",
                    isRequired: true,
                    colCount: 0,
                    step: 1,
                    rangeMin: 0,
                    rangeMax: 500,
                }, {
                    type: "dropdown",
                    name: "household_electricity",
                    title: "Do you think you (your household) use more or less electricity than others?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "I use less",
                        "About the same",
                        "I use more",
                    ]
                }
            ]
        }, {
            "name": "page3",
            "navigationTitle": "Food",
            //"navigationDescription": "Patient symptoms",
            "elements": [
                {
                    type: "dropdown",
                    name: "food_meat",
                    title: "How often do you eat meat and fish?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Never",
                        "Seldom, 3 times or less per week",
                        "Sometimes, 4 to 6 times per week",
                        "Daily"
                    ]
                }, {
                    type: "dropdown",
                    name: "foot_dairy",
                    title: "How often do you eat dairy products (milk, cheese, eggs...)?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Never",
                        "Seldom, 3 times or less per week",
                        "Sometimes, 4 to 6 times per week",
                        "Daily"
                    ]
                }, {
                    type: "dropdown",
                    name: "food_vegetables",
                    title: "How often do you eat fruit and vegetables?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Never",
                        "Seldom, 3 times or less per week",
                        "Sometimes, 4 to 6 times per week",
                        "Daily"
                    ]
                },
            ]
        }, {
            "name": "page4",
            "navigationTitle": "Travel",
            //"navigationDescription": "Initial sample",
            "elements": [
                {
                    type: "radiogroup",
                    name: "car_have",
                    title: "Do you have a car?",
                    isRequired: true,
                    choices: [
                        "Yes", "No"
                    ],
                    colCount: 0
                }, {
                    type: "radiogroup",
                    name: "car_electric",
                    visibleIf: "{car_have}='Yes'",
                    title: "Is it an electric car?",
                    isRequired: true,
                    choices: [
                        "Yes", "No"
                    ],
                    colCount: 0
                }, {
                    type: "dropdown",
                    name: "car_distance",
                    title: "How far do you travel by car each week?",
                    visibleIf: "{car_have}='Yes'",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "0km",
                        "< 50km",
                        "50-100km",
                        "100-150km",
                        "150-200km",
                        "200-250km",
                        "250-300km",
                        "> 300km"
                    ]
                }, {
                    type: "dropdown",
                    name: "train_distance",
                    title: "How far do you travel by train each week?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "0km",
                        "< 50km",
                        "50-100km",
                        "100-150km",
                        "150-200km",
                        "200-250km",
                        "250-300km",
                        "> 300km"
                    ]
                }, {
                    type: "dropdown",
                    name: "plane_distance",
                    title: "How many hours do you travel by plane each year?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "0 hours",
                        "Less than 5 hours",
                        "5 to 10 hours",
                        "10 to 15 hours",
                        "15 to 20 hours",
                        "20 to 25 hours",
                        "More than 25 hours"
                    ]
                }
            ]
        }, {
            "name": "page5",
            "navigationTitle": "Clothing",
            //"navigationDescription": "Clinical Course",
            "elements": [
                {
                    type: "dropdown",
                    name: "clothes_amount",
                    title: "How often do you buy clothes?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Only when really in need",
                        "2-3 pieces per quarter",
                        "4-6 pieces per quarter",
                        "More than 6 pieces per quarter"
                    ]
                }, {
                    type: "dropdown",
                    name: "clothes_used",
                    title: "Do you prefer buying new clothes or second-hand?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Usually second-hand clothes",
                        "I buy both equally often",
                        "Usually new clothes"
                    ]
                },
            ]
        }
    ]
};

// Initialize survey object
window.survey = new Survey.Model(json);

// Do when survey completed
survey
    .onComplete
    .add(function (result) {
        var country = result.getValue("country");
        calcScore(country);
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3) + country;
    });

$("#surveyElement").Survey({model: survey});

// Calculate carbon footprint score
function calcScore(country){
    var wnd = window.open("about:blank", "", "_blank");
    wnd.document.write(country);
}

var navTopEl = document.querySelector("#surveyNavigationTop");
navTopEl.className = "navigationContainer";
var leftImg = document.createElement("img");
leftImg.src = "/Content/Images/examples/covid/Left.svg";
leftImg.style = "width: 16px; height: 16px";
leftImg.className = "navigationProgressbarImage";
navTopEl.appendChild(leftImg);
var navProgBarDiv = document.createElement("div");
navProgBarDiv.className = "navigationProgressbarDiv";
navTopEl.appendChild(navProgBarDiv);
var navProgBar = document.createElement("ul");
navProgBar.className = "navigationProgressbar";
navProgBarDiv.appendChild(navProgBar);
leftImg.onclick = function () {
    navProgBarDiv.scrollLeft -= 70;
};
var liEls = [];
for (var i = 0; i < survey.visiblePageCount; i++) {
    var liEl = document.createElement("li");
    if (survey.currentPageNo == i) {
        liEl
            .classList
            .add("current");
    }
    liEl.onclick = function (index) {
        return function () {
            if (survey['isCompleted'])
                return;
            liEls[survey.currentPageNo]
                .classList
                .remove("current");
            if (index < survey.currentPageNo) {
                survey.currentPageNo = index;
            } else if (index > survey.currentPageNo) {
                var j = survey.currentPageNo;
                for (; j < index; j++) {
                    if (survey.visiblePages[j].hasErrors(true, true))
                        break;
                    if (!liEls[j].classList.contains("completed")) {
                        liEls[j]
                            .classList
                            .add("completed");
                    }
                }
                survey.currentPageNo = j;
            }
            liEls[survey.currentPageNo]
                .classList
                .add("current");
        };
    }(i);
    var pageTitle = document.createElement("span");
    if (!survey.visiblePages[i].navigationTitle) {
        pageTitle.innerText = survey
            .visiblePages[i]
            .name;
    } else
        pageTitle.innerText = survey
            .visiblePages[i]
            .navigationTitle;
    pageTitle.className = "pageTitle";
    liEl.appendChild(pageTitle);
    var br = document.createElement("br");
    liEl.appendChild(br);
    var pageDescription = document.createElement("span");
    if (!!survey.visiblePages[i].navigationDescription) {
        pageDescription.innerText = survey
            .visiblePages[i]
            .navigationDescription;
    }
    pageDescription.className = "pageDescription";
    liEl.appendChild(pageDescription);
    liEls.push(liEl);
    navProgBar.appendChild(liEl);
}
survey
    .onCurrentPageChanged
    .add(function (sender, options) {
        var oldIndex = options.oldCurrentPage.visibleIndex;
        var newIndex = options.newCurrentPage.visibleIndex;
        liEls[oldIndex]
            .classList
            .remove("current");
        if (newIndex > oldIndex) {
            for (var i = oldIndex; i < newIndex; i++) {
                if (sender.visiblePages[i].hasErrors(true, true))
                    break;
                if (!liEls[i].classList.contains("completed")) {
                    liEls[i]
                        .classList
                        .add("completed");
                }
            }
        }
        liEls[newIndex]
            .classList
            .add("current");
    });
survey
    .onComplete
    .add(function (sender, options) {
        liEls[sender.currentPageNo]
            .classList
            .remove("current");
        for (var i = 0; i < sender.visiblePageCount; i++) {
            if (survey.visiblePages[i].hasErrors(true, true))
                break;
            if (!liEls[i].classList.contains("completed")) {
                liEls[i]
                    .classList
                    .add("completed");
            }
        }
    });
var rightImg = document.createElement("img");
rightImg.src = "/Content/Images/examples/covid/Right.svg";
rightImg.style = "width: 16px; height: 16px";
rightImg.className = "navigationProgressbarImage";
rightImg.onclick = function () {
    navProgBarDiv.scrollLeft += 70;
};
navTopEl.appendChild(rightImg);

var updateScroller = setInterval(function () {
    if (navProgBarDiv.scrollWidth <= navProgBarDiv.offsetWidth) {
        leftImg
            .classList
            .add("hidden");
        rightImg
            .classList
            .add("hidden");
    } else {
        leftImg
            .classList
            .remove("hidden");
        rightImg
            .classList
            .remove("hidden");
    }
}, 100);
