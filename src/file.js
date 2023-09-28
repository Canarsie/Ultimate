// get all the elements on the page
const elements = document.querySelectorAll('*');
console.log('cheese');

//creating a function that will replace an element with a picture
function replaceWithPicture(el){
  const image = document.createElement (`img`);
  image.src = 'https://patch.com/img/cdn20/shutterstock/24346758/20210210/015045/styles/patch_image/public/shutterstock-521147707___10134728239.jpg'
  image.style.width = '50 px'
  el.parentNode.replaceChild(image, el)
}

// give every element an event listener that removes it on right click plus alt and shift key
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('contextmenu', (event) => {
    // console.log(event);
    if (event.altKey === true && event.shiftKey === true) {
      event.preventDefault();
      replaceWithPicture(event.target);
    }
  })
}
