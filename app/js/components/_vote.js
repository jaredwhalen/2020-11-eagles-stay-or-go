export function vote(el) {
  let vote = $(el).data("vote")
  let number = $(el).parent().data("number")
  console.log(number)
  $(el).parent().attr("data-vote", number + ":" + vote)
  $(el).siblings().removeClass("active")
  $(el).addClass("active")
}
