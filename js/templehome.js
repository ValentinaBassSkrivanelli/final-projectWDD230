const requestURL = 'https://valentinabassskrivanelli.github.io/wdd230/chamber/json/data.json';

console.log(requestURL);
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
      displayBusiness1(business[0]);
      displayBusiness2(business[1]);
      
 
       
});