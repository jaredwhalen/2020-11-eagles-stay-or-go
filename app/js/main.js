var data = require("../data/data.json");





import {updateAge} from "./components/_updateAge.js";
import {onlyUnique} from "./components/_onlyUnique.js";
import {fetchSurveyData} from "./components/_fetchSurveyData.js";
import {vote} from "./components/_vote.js";
import {submitVotes} from "./components/_submitVotes.js";
import {updateSurveyData} from "./components/_updateSurveryData.js";
import {displaySurveyData} from "./components/_displaySurveyData.js";


Array.prototype.groupBy = function(prop) {
  return this.reduce(function(groups, item) {
    const val = item[prop]

    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
}


// ID of the Google Spreadsheet web app
var scriptURL = 'https://script.google.com/macros/s/AKfycbw1WIXixupBpvwV6_N-wdUaDS9h5d2BsM0WW51BmC9T0MMVET8/exec';
// ID of the Google Spreadsheet
var spreadsheetID = "1AGJGch873uGl2WjiAKdzdmE8BLxZ5qRJMYNHQg9iexc";
var sheetURL = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

console.log(sheetURL)
// Variable to hold request
var request;
var userVotes = []
var surveryData = [];
var numbers = [];
var surveyGrouped = [];
var json = [];






updateAge()
fetchSurveyData(sheetURL, surveryData)


$(".votebutton").click(function() {
  vote(this)
})

$("#submit").click(function() {
  let answer = []
  $(".staygo").each(function(i, el) {
    let vote = $(el).data("vote");
    if (vote != "empty") {
      answer.push(vote)
    }
  })
  submitVotes(request, answer, scriptURL)

  updateSurveyData(surveryData, answer, numbers, surveyGrouped, json)

  $(this).hide();

  $('html, body').animate({
        scrollTop: $("#g-main").offset().top - 4
    }, 500);
})
