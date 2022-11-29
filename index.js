// Write your code here!
const main = document.getElementById('main');
document.body.removeChild(main);

let newHeader = document.createElement('h1');

newHeader.setAttribute('id','victory');
newHeader.innerHTML = 'Wenjia is the champion';
document.body.append(newHeader);
