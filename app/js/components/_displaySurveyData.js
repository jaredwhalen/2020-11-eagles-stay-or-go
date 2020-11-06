export function displaySurveyData(json, players) {
  console.log(json)

  $(".staygo").each(function() {
    let player = $(this).data("number").toString();
    var name = $(this).data("name");
    var content;
    console.log(player)
    if (players.includes(player)) {
      let info = json.filter(n => n.number == player)[0]
      let total = info.stay + info.go;
      let stay = info.stay / total * 100;
      let go = info.go / total * 100;
      // console.log(info)
      content = `<div class="results">Voters think that <span class="p-name">${name}</span> should:
      <div class="stayrow row"><span class="bars stay" style="width: ${stay}%"></span>&nbsp;&nbsp;Stay: <strong>${stay.toFixed(1)}%</strong></div>
      <div class="gorow row"><span class="bars go" style="width: ${go}%"></span>&nbsp;&nbsp;Go: <strong>${go.toFixed(1)}%</strong></div>
      </div>`
    } else {
      content = `<div class="results"><strong>Not enough people have voted for ${name} to show results.</strong></div>`
    }

    $(this).html(content)
  })

  $(".g-card").addClass("post")
  $(".ourCall").show()
};
