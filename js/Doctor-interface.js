import { Doctor } from "./../js/Doctor.js";
var apiKey = require('./../.env').apiKey;
$(document).ready(function(){
  $("#health-search").click(function(){
    let query = $("#health-problem").val();
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C122.6765&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
      console.log(response);
      $("#output").empty();
      if(response.data.length > 0) {
        for (var i = 0; i < response.data.length; i++) {
          $("#output").append(`<li><span id="doc-name">Name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</span><br>`);
          for (var j = 0; j < response.data[i].practices.length; j++) {
            $("#output").append(`<em><b>Practice ${j+1}<b><em><br>`);
            $("#output").append(`Address: ${response.data[i].practices[j].visit_address.street}, ${response.data[i].practices[j].visit_address.city}, ${response.data[i].practices[j].visit_address.state}<br>`);
            $("#output").append(`Phone: ${response.data[i].practices[j].phones[0].number}<br>`);
            if(response.data[i].practices[j].website != undefined) {
              $("#output").append(`Website: <a href='${response.data[i].practices[j].website}'>${response.data[i].practices[j].website}</a><br>`);
            } else {
              $("#output").append(`Website: None Listed<br>`);
            }
            if(response.data[i].practices[j].accepts_new_patients) {
              $("#output").append(`Currently Accepting New Patients<br>`);
            } else {
              $("#output").append(`Not Accepting New Patients Currently<br>`);
            }
          }
          $("#output").append(`</li>`);
        }
      } else {
        $("#output").append(`Sorry, nothing matches that search.`);
      }
    }).fail(function(error){
      $("#output").append(`${error.meta.message}`);
    });
  });
  $("#doctor-search").click(function(){
    let query = $("#doctor-name").val();
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${query}&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C122.6765&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
      $("#output").empty();
      if(response.data.length > 0) {
        for (var i = 0; i < response.data.length; i++) {
          $("#output").append(`<li><span id="doc-name">Name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</span><br>`);
          for (var j = 0; j < response.data[i].practices.length; j++) {
            $("#output").append(`<em><b>Practice ${j+1}<b><em><br>`);
            $("#output").append(`Address: ${response.data[i].practices[j].visit_address.street}, ${response.data[i].practices[j].visit_address.city}, ${response.data[i].practices[j].visit_address.state}<br>`);
            $("#output").append(`Phone: ${response.data[i].practices[j].phones[0].number}<br>`);
            if(response.data[i].practices[j].website != undefined) {
              $("#output").append(`Website: <a href='${response.data[i].practices[j].website}'>${response.data[i].practices[j].website}</a><br>`);
            } else {
              $("#output").append(`Website: None Listed<br>`);
            }
            if(response.data[i].practices[j].accepts_new_patients) {
              $("#output").append(`Currently Accepting New Patients<br>`);
            } else {
              $("#output").append(`Not Accepting New Patients Currently<br>`);
            }
          }
          $("#output").append(`</li>`);
        }
      } else {
        $("#output").append(`Sorry, nothing matches that search.`);
      }
    }).fail(function(error){
      $("#output").append(`${error.meta.message}`);
    });
  });
});
