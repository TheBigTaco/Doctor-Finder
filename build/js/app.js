(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "37d0e8276c217954be4c18124cc58e50";

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Doctor = exports.Doctor = function () {
  function Doctor() {
    _classCallCheck(this, Doctor);
  }

  _createClass(Doctor, [{
    key: "medicalIssue",
    value: function medicalIssue(query, key) {}
  }, {
    key: "doctorSearch",
    value: function doctorSearch(query, key) {}
  }]);

  return Doctor;
}();

},{}],3:[function(require,module,exports){
"use strict";

var _Doctor = require("./../js/Doctor.js");

var apiKey = require('./../.env').apiKey;
$(document).ready(function () {
  $("#health-search").click(function () {
    var query = $("#health-problem").val();
    $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + query + "&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C122.6765&skip=0&limit=10&user_key=" + apiKey).then(function (response) {
      console.log(response);
      $("#output").empty();
      if (response.data.length > 0) {
        for (var i = 0; i < response.data.length; i++) {
          $("#output").append("<li><span id=\"doc-name\">Name: " + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</span><br>");
          for (var j = 0; j < response.data[i].practices.length; j++) {
            $("#output").append("<em><b>Practice " + (j + 1) + "<b><em><br>");
            $("#output").append("Address: " + response.data[i].practices[j].visit_address.street + ", " + response.data[i].practices[j].visit_address.city + ", " + response.data[i].practices[j].visit_address.state + "<br>");
            $("#output").append("Phone: " + response.data[i].practices[j].phones[0].number + "<br>");
            if (response.data[i].practices[j].website != undefined) {
              $("#output").append("Website: <a href='" + response.data[i].practices[j].website + "'>" + response.data[i].practices[j].website + "</a><br>");
            } else {
              $("#output").append("Website: None Listed<br>");
            }
            if (response.data[i].practices[j].accepts_new_patients) {
              $("#output").append("Currently Accepting New Patients<br>");
            } else {
              $("#output").append("Not Accepting New Patients Currently<br>");
            }
          }
          $("#output").append("</li>");
        }
      } else {
        $("#output").append("Sorry, nothing matches that search.");
      }
    }).fail(function (error) {
      $("#output").append("" + error.meta.message);
    });
  });
  $("#doctor-search").click(function () {
    var query = $("#doctor-name").val();
    $.get("https://api.betterdoctor.com/2016-03-01/doctors?name=" + query + "&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C122.6765&skip=0&limit=10&user_key=" + apiKey).then(function (response) {
      $("#output").empty();
      if (response.data.length > 0) {
        for (var i = 0; i < response.data.length; i++) {
          $("#output").append("<li><span id=\"doc-name\">Name: " + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</span><br>");
          for (var j = 0; j < response.data[i].practices.length; j++) {
            $("#output").append("<em><b>Practice " + (j + 1) + "<b><em><br>");
            $("#output").append("Address: " + response.data[i].practices[j].visit_address.street + ", " + response.data[i].practices[j].visit_address.city + ", " + response.data[i].practices[j].visit_address.state + "<br>");
            $("#output").append("Phone: " + response.data[i].practices[j].phones[0].number + "<br>");
            if (response.data[i].practices[j].website != undefined) {
              $("#output").append("Website: <a href='" + response.data[i].practices[j].website + "'>" + response.data[i].practices[j].website + "</a><br>");
            } else {
              $("#output").append("Website: None Listed<br>");
            }
            if (response.data[i].practices[j].accepts_new_patients) {
              $("#output").append("Currently Accepting New Patients<br>");
            } else {
              $("#output").append("Not Accepting New Patients Currently<br>");
            }
          }
          $("#output").append("</li>");
        }
      } else {
        $("#output").append("Sorry, nothing matches that search.");
      }
    }).fail(function (error) {
      $("#output").append("" + error.meta.message);
    });
  });
});

},{"./../.env":1,"./../js/Doctor.js":2}]},{},[3]);
