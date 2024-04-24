const divApp = document.getElementById('list-app');

const llistaElements = document.createElement('ul');
divApp.appendChild(llistaElements);

// TEXT INPUT ===
const inputText = document.createElement('input');
divApp.appendChild(inputText);
// ===

// BUTTON ===
const button = document.createElement('button');
button.innerHTML = 'Add Element';

button.addEventListener('click', createElement);

function createElement() {
  const newElement = document.createElement('li');

  newElement.addEventListener('click', function () {
    newElement.innerHTML = inputText.value;
  });

  newElement.innerHTML = inputText.value;

  llistaElements.appendChild(newElement);
}

divApp.appendChild(button);
// ===
