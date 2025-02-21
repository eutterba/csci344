let currentPosition = 0;
let gap = 10;
const slideWidth = 400;

/*takes in a selector to determine the direction the carousel
 is going*/
//function called on click of either the forward or back button
//to move the carousel. gives direction based on what button
//was clicked
function moveCarousel(direction) {
  const items = document.querySelectorAll(".carousel-item");
  //checks if div can be shifted to the left
  if (direction == "forward") {
    // minus 2 b/c first 2 slides already showing
    //does nothing if the div cant shift over anymore
    //because there are not more items to the right
    if (currentPosition >= items.length - 2) {
      return false;
    }
    //updates div position
    currentPosition++;
    //checks if div can be shifted to the right
  } else {
    //does nothing if the div cant shift over anymore
    //because there are not items to the left
    if (currentPosition == 0) {
      return false;
    }
    //update div position
    currentPosition--;
  }
  //updates how much the div should be offset based on
  //div position
  const offset = (slideWidth + gap) * currentPosition;
  //applies the offset to the the div on the website
  for (const item of items) {
    item.style.transform = `translateX(-${offset}px)`;
  }
}
