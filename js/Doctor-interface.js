import { Doctor } from "./../js/Doctor.js";
var apiKey = require('./../.env').apiKey;
$(document).ready(function(){
  $("#health-search").click(function(){
    let query = $("#health-problem").val();
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C122.6765&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
      $("#output").append(`<li>Name: ${response.data[0].profile.first_name} ${response.data[0].profile.last_name}`);
    }).fail(function(error){
      console.log(error);
    });
  });
});
