const requestURL = 'templeinfo.json';

console.log(requestURL);
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
      displayBusiness1(temples[0]);
      displayBusiness2(temples[1]);
      
 
       
});