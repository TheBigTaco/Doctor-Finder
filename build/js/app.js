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
    value: function doctorSearch(query, key) {
      $.get("https://api.betterdoctor.com/2016-03-01/doctors?name=" + query + "&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C122.6765&skip=0&limit=10&user_key=" + key).then(function (response) {
        return response;
      }).fail(function (error) {
        return error;
      });
    }
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
      $("#output").append("<li>Name: " + response.data[0].profile.first_name + " " + response.data[0].profile.last_name);
    }).fail(function (error) {
      console.log(error);
    });
  });
});

},{"./../.env":1,"./../js/Doctor.js":2}]},{},[3]);
