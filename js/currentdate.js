const options = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric' };

const option = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

document.getElementById('current').textContent = new Date().toLocaleDateString('en-US', option);
const yearSpan = new Date()


const currentYear = yearSpan.getFullYear();
document.getElementById("currentYear").textContent = currentYear

