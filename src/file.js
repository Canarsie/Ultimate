// get all the elements on the page
const elements = document.querySelectorAll('*');

// give every element an event listener that removes it on right click plus alt and shift key
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('contextmenu', (event) => {
    // console.log(event);
    if (event.altKey === true && event.shiftKey === true) event.target.remove();
  })
}