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
  let address = document.createElement('p');
  let telephone = document.createElement('p');
  let email = document.createElement('a');
  let services = document.createElement('p');

  let ordinances = document.createElement('p');
  let sessions= document.createElement('p');
  let templeclousure = document.createElement('p');


  image.setAttribute('src', content.imageurl);
  image.setAttribute('alt', ` ${content.name} image `);
  image.setAttribute('loading', 'lazy');

  templeName.textContent = `${content.name}`;
  address.textContent = `Address: ${content.address}`;
  telephone.textContent = `Telephone: ${content.telephone} `;
  email.textContent = `${content.emailmsj} `;
  email.href = `${content.email} `;
  services.textContent = ` Services: ${content.services} `;

  ordinances.textContent = `Ordinances: ${content.ordinanceschedule}` ;
  sessions.textContent = `Sessions: ${content.sessionschedule}` ;
  templeclousure.textContent = `Temple Clousure: ${content.templeclousure}`;

  temple1.appendChild(image);
  temple1.appendChild(templeName);
  temple1.appendChild(address);
  temple1.appendChild(telephone);
  temple1.appendChild(email);
  temple1.appendChild(services);

  temple1.appendChild(ordinances);
  temple1.appendChild(sessions);
  temple1.appendChild(templeclousure);


  document.querySelector('.temple1').appendChild(temple1);

}
