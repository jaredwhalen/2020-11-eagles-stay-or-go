export function fetchSurveyData(sheetURL, surveryData) {

  $.getJSON(sheetURL, function(data) {
    var entry = data.feed.entry;
    var tr;
    $(entry).each(function() {
      var picks = this.gsx$picks.$t;
      var array = picks.split(',');
      array.map(v => surveryData.push(v))
    })
  })
}
