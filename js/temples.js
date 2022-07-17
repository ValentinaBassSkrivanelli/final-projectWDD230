const requestURL = 'https://valentinabassskrivanelli.github.io/final-projectWDD230/json/templeinfo.json';

console.log(requestURL);
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(temple1temple);
   
      
});

function temple1temple(content) {
  // Create elements to add to the document
  let temple1temple = document.createElement('div');
  let image = document.createElement('img');
  let templeName = document.createElement('h2');
  let address = document.createElement('p');
  let telephone = document.createElement('p');
  let email = document.createElement('a');
  let services = document.createElement('p');
  let history = document.createElement('a');
  let ordinances = document.createElement('p');
  let sessions= document.createElement('p');
  let templeclousure = document.createElement('p');
  let seetemple = document.createElement('a');

  image.setAttribute('src', content.imageurl);
  image.setAttribute('alt', ` ${content.name} image `);
  image.setAttribute('loading', 'lazy');

  templeName.textContent = `${content.name}`;
  address.textContent = `Address: ${content.address}`;
  telephone.textContent = `Telephone: ${content.telephone} `;
  email.textContent = `${content.emailmsj} `;
  email.href = `${content.email} `;
  services.textContent = ` Services: ${content.services} `;
  history.textContent = ` ${content.historytext} `;
  history.href = `${content.history}` ;
  ordinances.textContent = `Ordinances: ${content.ordinanceschedule}` ;
  sessions.textContent = `Sessions: ${content.sessionschedule}` ;
  templeclousure.textContent = `Temple Clousure: ${content.templeclousure}`;
  seetemple.textContent = ` ${content.seetemplemsj}`;
  seetemple.href = ` ${content.seetemple}`;



  temple1temple.appendChild(image);
  temple1temple.appendChild(templeName);
  temple1temple.appendChild(address);
  temple1temple.appendChild(telephone);
  temple1temple.appendChild(email);
  temple1temple.appendChild(services);
  temple1temple.appendChild(history);
  temple1temple.appendChild(ordinances);
  temple1temple.appendChild(sessions);
  temple1temple.appendChild(templeclousure);


  document.querySelector('.temple1temple').appendChild(temple1temple);
}