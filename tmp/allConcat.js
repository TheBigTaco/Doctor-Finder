import { Doctor } from "./../js/Doctor.js";

let displayData = function(response) {
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
}
let error = function(){
  $("#output").append(`${error.meta.message}`);
};
$(document).ready(function(){
  let finder = new Doctor();
  $("#health-search").click(function(){
    let query = $("#health-problem").val();
    finder.getData("query", query, displayData);
  });
  $("#doctor-search").click(function(){
    let query = $("#doctor-name").val();
    finder.getData("name", query, displayData);
  });
});
