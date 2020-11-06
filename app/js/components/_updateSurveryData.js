import {
  onlyUnique
} from "./_onlyUnique.js";
import {
  displaySurveyData
} from "./_displaySurveyData.js"

export function updateSurveyData(surveryData, answer, numbers, surveyGrouped, json) {
  answer.map(l => surveryData.push(l))
  surveryData.map(function(d) {
    let vote = d.split(':');
    numbers.push(vote[0])
    surveyGrouped.push({
      'number': vote[0],
      "vote": vote[1]
    });
  })
  let players = numbers.filter(onlyUnique)
  const groupedByNumber = surveyGrouped.groupBy('number')
  players.map(function(x) {
    let stay = 0;
    let go = 0;
    groupedByNumber[x].map(function(q) {
      if (q.vote == "stay") {
        stay++
      }
      if (q.vote == "go") {
        go++
      }
    })
    json.push({
      'number': x,
      'stay': stay,
      'go': go
    });
  })
  displaySurveyData(json, players)
}
