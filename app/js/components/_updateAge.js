import {getAge} from "./_getAge.js";

export function updateAge() {
  $(".age").each(function() {
    let dob = $(this).data("dob")
    let age = getAge(dob)
    $(this).html(age)
  })
}
