// goal is to capture all elements in an array
// iterate through that array, removing them from the DOM one by one

const elements = document.querySelectorAll('*');
// will this get all the elements?

for (let i = 0; i < elements.length; i++) {
  elements[i].remove();
}