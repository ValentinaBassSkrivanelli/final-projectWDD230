const requestURL = 'https://valentinabassskrivanelli.github.io/final-projectWDD230/json/templeinfo.json';

console.log(requestURL);
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayBusiness);
});
function displayBusiness(content) {
    // Create elements to add to the document
    let company = document.createElement('section');
    let image = document.createElement('img');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let telephone = document.createElement('p');
    let email = document.createElement('a');
    let services = document.createElement('p');
    let history = document.createElement('a');
    let ordinances = document.createElement('p');
    let sessions= document.createElement('p');
    let templeclousure = document.createElement('p');
    let likebutton = document.createElement('a');
  
    image.setAttribute('src', content.imageurl);
    image.setAttribute('alt', ` ${content.name} image `);
    image.setAttribute('loading', 'lazy');
  
    name.textContent = `${content.name}`;
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
    likebutton.textContent = `${content.likebutton}`;
    likebutton.href= `${content.likebutton}`;

    company.appendChild(image);
    company.appendChild(name);
    company.appendChild(address);
    company.appendChild(telephone);
    company.appendChild(email);
    company.appendChild(services);
    company.appendChild(history);
    company.appendChild(ordinances);
    company.appendChild(sessions);
    company.appendChild(templeclousure);



    document.querySelector('.companys').appendChild(company);
}
// grid and list 
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".companys");
const gridclass = document.querySelector("grid1");
const listclass= document.querySelector("list1");


gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid1");
  display.classList.remove("list1");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
display.classList.add("list1");
display.classList.remove("grid1");
}
