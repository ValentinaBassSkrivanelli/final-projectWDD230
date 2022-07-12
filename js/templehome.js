const requestURL = 'https://valentinabassskrivanelli.github.io/final-projectWDD230/json/templeinfo.json';

console.log(requestURL);
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
      temple1(temples[0]);
      //temple2(temples[1]);
     // temple3(temples[2]);
      
});

function temple1(content) {
  // Create elements to add to the document
  let temple1 = document.createElement('div');
  let image = document.createElement('img');
  let templeName = document.createElement('h2');
  let telephone = document.createElement('p');
  let email = document.createElement('a');

  image.setAttribute('src', content.imageurl);
  image.setAttribute('alt', ` ${content.name} image `);
  image.setAttribute('loading', 'lazy');

  templeName.textContent = `${content.name}`;
  telephone.textContent = `${content.telephone} `;
  email.textContent = `${content.email} `;
  email.href = `${content.email} `;
 

  temple1.appendChild(image);
  temple1.appendChild(templeName);
  temple1.appendChild(telephone);
  temple1.appendChild(email);

  document.querySelector('.temple1').appendChild(temple1);

}
