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
var food_weight_meat = 0.25
var food_emission_meat = 17
var food_weight_dairy = 0.7
var food_emission_dairy = 6

// Car conversion factor
var carbon_emission_diesel = 3.32
var carbon_emission_petrol = 2.74
var carbon_emission_electric = 9.5

// Train conversion factor
var train_emission_km = 28.39
var weeks_per_year = 48

// Plane conversion factor
var plane_avg_speed = 907
var plane_emission_km = 175
var plane_avg_capacity = 275

// Clothes conversion factor
var clothes_weight = 0.4
var clothes_emission = 14.42
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
                }//, {
                    //type: "dropdown",
                    //name: "country",
                    //title: "Select your country...",
                    //isRequired: true,
                    //choicesByUrl: {
                        //url: "https://restcountries.eu/rest/v2/all",
                        //valueName: "name"
                //    }
                //}, {
                    //type: "dropdown",
                    //name: "gender",
                    //title: "What is your gender?",
                    //isRequired: true,
                    //colCount: 0,
                    //choices: [
                        //"Female",
                        //"Male",
                        //"Other"
                    //]
                //},
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
                }
            ]
        }, {
            "name": "page3",
            "navigationTitle": "Electricity",
            //"navigationDescription": "Person's info",
            "elements": [
                {
                    type: "dropdown",
                    name: "electricity_type",
                    title: "What kind of electricity do you use?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Green electricity",
                        "Grey electricity"
                    ]
                },{
                    "type": "nouislider",
                    name: "electricity_amount_1",
                    title: "Do you think your household of 1 uses more or less electricity (kWh) than average? The center value is the average for your household size.",
                    isRequired: true,
                    visibleIf: "{household_number}='1'",
                    step: 1,
                    rangeMin: 0,
                    rangeMax: 2*elec_avg_1,
                },{
                    type: "nouislider",
                    name: "electricity_amount_2",
                    title: "Do you think your household of 2 uses more or less electricity than average? The center value is the average for your household size.",
                    isRequired: true,
                    visibleIf: "{household_number}='2'",
                    step: 1,
                    rangeMin: 0,
                    rangeMax: 2*elec_avg_2,
                },{
                    type: "nouislider",
                    name: "electricity_amount_3",
                    title: "Do you think your household of 3 uses more or less electricity than average? The center value is the average for your household size.",
                    isRequired: true,
                    visibleIf: "{household_number}='3'",
                    step: 1,
                    rangeMin: 0,
                    rangeMax: 2*elec_avg_3,
                },{
                    type: "nouislider",
                    name: "electricity_amount_4",
                    title: "Do you think your household of 4 uses more or less electricity than average? The center value is the average for your household size.",
                    isRequired: true,
                    visibleIf: "{household_number}='4'",
                    step: 1,
                    rangeMin: 0,
                    rangeMax: 2*elec_avg_4,
                },{
                    type: "nouislider",
                    name: "electricity_amount_5",
                    title: "Do you think your household of more than 4 people uses more or less electricity than average? The center value is the average for your household size.",
                    isRequired: true,
                    visibleIf: "{household_number}='More'",
                    step: 1,
                    rangeMin: 0,
                    rangeMax: 2*elec_avg_5,
                }
            ]
        }, {
            "name": "page4",
            "navigationTitle": "Food",
            //"navigationDescription": "Patient symptoms",
            "elements": [
                {
                    type: "dropdown",
                    name: "food_meat",
                    title: "How often do you eat meat or fish per week?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Never",
                        "Very seldom, once per week",
                        "Seldom, twice per week",
                        "Sometimes, three times per week",
                        "Sometimes, four times per week",
                        "Regularly, five times per week",
                        "Very regularly, six times per week",
                        "Daily"
                    ]
                }, {
                    type: "dropdown",
                    name: "food_dairy",
                    title: "How often do you eat dairy products (milk, cheese, eggs...)?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Never",
                        "Very seldom, once per week",
                        "Seldom, twice per week",
                        "Sometimes, three times per week",
                        "Sometimes, four times per week",
                        "Regularly, five times per week",
                        "Very regularly, six times per week",
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
            "name": "page5",
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
                    name: "car_type",
                    visibleIf: "{car_have}='Yes'",
                    title: "What type of car?",
                    isRequired: true,
                    choices: [
                        "Electric", "Petrol", "Diesel"
                    ],
                    colCount: 0
                }, {
                    type: "radiogroup",
                    name: "car_share",
                    visibleIf: "{car_have}='Yes'",
                    title: "Do you mostly drive alone or share your car?",
                    isRequired: true,
                    choices: [
                        "Alone", "Share"
                    ],
                    colCount: 0
                }, {
                    type: "bootstrapslider",
                    name: "car_distance",
                    title: "How many km do you travel by car each week (even if you don't own a car)? ",
                    isRequired: true,
                    colCount: 0,
                    step: 1,
                    rangeMin: 0,
                    rangeMax: 500
                }, {
                    type: "bootstrapslider",
                    name: "train_distance",
                    title: "How many km do you travel by train each week?",
                    isRequired: true,
                    colCount: 0,
                    step: 1,
                    rangeMin: 0,
                    rangeMax: 500
                }, {
                    type: "bootstrapslider",
                    name: "plane_distance",
                    title: "How many hours do you travel by plane each year?",
                    isRequired: true,
                    colCount: 0,
                    step: 1,
                    rangeMin: 0,
                    rangeMax: 100
                }
            ]
        }, {
            "name": "page6",
            "navigationTitle": "Clothing",
            //"navigationDescription": "Clinical Course",
            "elements": [
                {
                    type: "dropdown",
                    name: "clothes_amount",
                    title: "How often do you buy clothes per quarter (i.e. 3 months)?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "1 piece per quarter",
                        "2 pieces per quarter",
                        "3 pieces per quarter",
                        "4 pieces per quarter",
                        "5 pieces per quarter",
                        "6 pieces per quarter",
                        "7 pieces per quarter",
                        "8 pieces per quarter",
                        "9 pieces per quarter",
                        "10 pieces per quarter",
                        "More than 10 pieces per quarter"
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
        // Get survey input values
        //var country = result.getValue("country");
        //var gender = result.getValue("gender");
        var household_number = result.getValue("household_number");
        var household_type = result.getValue("household_type");
        var household_heat = result.getValue("household_heat");
        var household_size = result.getValue("household_size");
        var electricity_type = result.getValue("electricity_type");
        var electricity_amount_1 = result.getValue("electricity_amount_1");
        var electricity_amount_2 = result.getValue("electricity_amount_2");
        var electricity_amount_3 = result.getValue("electricity_amount_3");
        var electricity_amount_4 = result.getValue("electricity_amount_4");
        var electricity_amount_5 = result.getValue("electricity_amount_5");
        var food_meat = result.getValue("food_meat");
        var food_dairy = result.getValue("food_dairy");
        var food_vegetables = result.getValue("food_vegetables");
        var car_have = result.getValue("car_have");
        var car_type = result.getValue("car_type");
        var car_share = result.getValue("car_share")
        var car_distance = result.getValue("car_distance");
        var train_distance = result.getValue("train_distance");
        var plane_distance = result.getValue("plane_distance");
        var clothes_amount = result.getValue("clothes_amount");
        var clothes_used = result.getValue("clothes_used");
        calcScore(household_number, household_type, household_heat, household_size, electricity_type,
            electricity_amount_1, electricity_amount_2,electricity_amount_3,electricity_amount_4,electricity_amount_5,
            food_meat, food_dairy, food_vegetables, car_have, car_type, car_share, car_distance, train_distance,
            plane_distance, clothes_amount, clothes_used);
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
            window.location.href = "result.html";

    });

$("#surveyElement").Survey({model: survey});

// Calculate carbon footprint score
function calcScore(household_number, household_type, household_heat, household_size, electricity_type, electricity_amount_1,
                   electricity_amount_2,electricity_amount_3,electricity_amount_4,electricity_amount_5, food_meat, food_dairy,
                   food_vegetables, car_have, car_type, car_share, car_distance, train_distance, plane_distance, clothes_amount,
                   clothes_used){
    var emission_housing
    var emission_electricity
    var emission_meat_dairy
    var emission_vegetables
    var emission_car
    var emission_train
    var emission_plane
    var emission_clothes

    // Calculate household footprint
    var carbon_footprint_household
    if (household_type == "Apartment, before 1975"){
        if (household_heat == "Electricity heating"){
            carbon_footprint_household = apart_before_elec
        } else if (household_heat == "Fuel oil heating"){
            carbon_footprint_household = apart_before_fuel
        } else if (household_heat == "Gas heating"){
            carbon_footprint_household = apart_before_gas
        }
    } else if (household_type == "Apartment, after 1975"){
        if (household_heat == "Electricity heating"){
            carbon_footprint_household = apart_after_elec
        } else if (household_heat == "Fuel oil heating"){
            carbon_footprint_household = apart_after_fuel
        } else if (household_heat == "Gas heating"){
            carbon_footprint_household = apart_after_gas
        }
    } else if (household_type == "House, before 1975"){
        if (household_heat == "Electricity heating"){
            carbon_footprint_household = house_before_elec
        } else if (household_heat == "Fuel oil heating"){
            carbon_footprint_household = house_before_fuel
        } else if (household_heat == "Gas heating"){
            carbon_footprint_household = house_before_gas
        }
    } else if (household_type == "House, after 1975"){
        if (household_heat == "Electricity heating"){
            carbon_footprint_household = house_after_elec
        } else if (household_heat == "Fuel oil heating"){
            carbon_footprint_household = house_after_fuel
        } else if (household_heat == "Gas heating"){
            carbon_footprint_household = house_after_gas
        }
    }
    if (household_number == "More"){
        household_number = 5
    }
        emission_housing = (carbon_footprint_household * household_size)/household_number

    // Calculate electricity footprint
    var carbon_footprint_electricity
    var green_or_grey
    if (household_number == "1"){
        carbon_footprint_electricity = electricity_amount_1
    } else if (household_number == "2"){
        carbon_footprint_electricity = electricity_amount_2
    } else if (household_number == "3"){
        carbon_footprint_electricity = electricity_amount_3
    } else if (household_number == "4"){
        carbon_footprint_electricity = electricity_amount_4
    } else if (household_number == "5"){
        carbon_footprint_electricity = electricity_amount_5
    }
    if (electricity_type == "Green electricity"){
        green_or_grey = 0.4
    } else {
        green_or_grey = 1
    }
    emission_electricity = (carbon_footprint_electricity*elec_emission*(green_or_grey))/household_number

    // Calculate meat and dairy consumption footprint
    var meatfish_days
    var dairy_days
    if (food_meat == "Never"){
        meatfish_days = 0
    } else if (food_meat == "Very seldom, once per week"){
        meatfish_days = 1
    } else if (food_meat == "Seldom, twice per week"){
        meatfish_days = 2
    } else if (food_meat == "Sometimes, three times per week"){
        meatfish_days = 3
    } else if (food_meat == "Sometimes, four times per week"){
        meatfish_days = 4
    } else if (food_meat == "Regularly, five times per week"){
        meatfish_days = 5
    } else if (food_meat == "Very regularly, six times per week"){
        meatfish_days = 6
    } else if (food_meat == "Daily"){
        meatfish_days = 7
    }
    if (food_dairy == "Never"){
        dairy_days = 0
    } else if (food_dairy == "Very seldom, once per week"){
        dairy_days = 1
    } else if (food_dairy == "Seldom, twice per week"){
        dairy_days = 2
    } else if (food_dairy == "Sometimes, three times per week"){
        dairy_days = 3
    } else if (food_dairy == "Sometimes, four times per week"){
        dairy_days = 4
    } else if (food_dairy == "Regularly, five times per week"){
        dairy_days = 5
    } else if (food_dairy == "Very regularly, six times per week"){
        dairy_days = 6
    } else if (food_dairy == "Daily"){
        dairy_days = 7
    }
    emission_meat_dairy = ((food_weight_meat*meatfish_days*food_emission_meat)+(food_weight_dairy*dairy_days*food_emission_dairy))*weeks_per_year

    // Calculate vegetable consumption footprint
    // ...

    // Calculate car travel footprint
    var emission_car
    var car_share_boolean
    if (car_share == "Alone"){
        car_share_boolean = 1
    } else if (car_share == "Share") {
        car_share_boolean = 0.5
    } else {
        car_share_boolean = 0.75
    }
    if (car_type == "Electric"){
        emission_car = (car_distance/100)*carbon_emission_electric*weeks_per_year*car_share_boolean
    } else if (car_type == "Petrol"){
        emission_car = (car_distance*(6.5/100))*carbon_emission_petrol*weeks_per_year*car_share_boolean
    } else if (car_type == "Diesel"){
        emission_car = (car_distance*(5/100))*carbon_emission_diesel*weeks_per_year*car_share_boolean
    } else {
        emission_car = (((car_distance/100)*carbon_emission_electric*weeks_per_year)+((car_distance*(6.5/100))*carbon_emission_petrol*weeks_per_year)+(emission_car = (car_distance*(5/100))*carbon_emission_diesel*weeks_per_year))*(1/3)*car_share_boolean
    }

    // Calculate public transport footprint
    // ...

    // Calculate plane travel footprint
    // ...

    // Calculate clothes footprint
    var clothes_pieces
    if (clothes_amount == "1 piece per quarter"){
        clothes_pieces = 1
    } else if (clothes_amount == "2 pieces per quarter"){
        clothes_pieces = 2
    } else if (clothes_amount == "3 pieces per quarter"){
        clothes_pieces = 3
    } else if (clothes_amount == "4 pieces per quarter"){
        clothes_pieces = 4
    } else if (clothes_amount == "5 pieces per quarter") {
        clothes_pieces = 5
    } else if (clothes_amount == "6 pieces per quarter") {
        clothes_pieces = 6
    } else if (clothes_amount == "7 pieces per quarter") {
        clothes_pieces = 7
    } else if (clothes_amount == "8 pieces per quarter") {
        clothes_pieces = 8
    } else if (clothes_amount == "9 pieces per quarter") {
        clothes_pieces = 9
    } else if (clothes_amount == "10 pieces per quarter") {
        clothes_pieces = 10
    } else if (clothes_amount == "More than 10 pieces per quarter"){
        clothes_pieces = 11
    }
    if (clothes_used == "Usually second-hand clothes"){
        emission_clothes = 0
    } else if (clothes_used == "I buy both equally often"){
        emission_clothes = clothes_weight*clothes_emission*clothes_pieces*clothes_quarter*0.5
    } else if (clothes_used == "Usually new clothes"){
        emission_clothes = clothes_weight*clothes_emission*clothes_pieces*clothes_quarter
    }

    var wnd = window.open("about:blank", "", "_blank");
    wnd.document.write("Your household emission is "+ emission_housing + ". Your " + electricity_type + " emission is " + emission_electricity + " for a household of " + household_number + ". Your clothing emission is " + emission_clothes + ". Your meat and dairy emission is " + emission_meat_dairy + ". Your car travel emission is " + emission_car + ".");
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