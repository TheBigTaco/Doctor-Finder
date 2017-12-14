var apiKey = require('./../.env').apiKey;
export class Doctor {
  constructor() {

  }

  getData(type, query, displayData) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?${type}=${query}&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C122.6765&skip=0&limit=10&user_key=${apiKey}`).then(function(response) {
      displayData(response);
    }).fail(function(error) {
      error(error);
    });
  }
}
