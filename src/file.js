// goal is to capture all elements in an array
// iterate through that array, removing them from the DOM one by one

const elements = document.querySelectorAll('*');
// will this get all the elements?


// give every element an event listener that removes it on double-click
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', (event) => {
    // console.log(event);
    event.target.remove();
  })
}