export class Doctor {
  constructor() {

  }

  medicalIssue(query, key){

  }

  doctorSearch(query, key) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${query}&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C122.6765&skip=0&limit=10&user_key=${key}`).then(function(response){
      return response;
    }).fail(function(error){
      return error;
    });
  }
}
