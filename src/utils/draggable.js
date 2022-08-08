export const dragElement = (element, dragzone) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  //MouseUp occurs when the user releases the mouse button
  const dragMouseUp = () => {
    document.onmouseup = null;
    //onmousemove attribute fires when the pointer is moving while it is over an element.
    document.onmousemove = null;

    element.classList.remove("drag");
  };

  const dragMouseMove = (event) => {
    event.preventDefault();
    //clientX property returns the horizontal coordinate of the mouse pointer
    pos1 = pos3 - event.clientX;
    //clientY property returns the vertical coordinate of the mouse pointer
    pos2 = pos4 - event.clientY;
    pos3 = event.clientX;
    pos4 = event.clientY;
    //offsetTop property returns the top position relative to the parent
    element.style.top = `${element.offsetTop - pos2}px`;
    element.style.left = `${element.offsetLeft - pos1}px`;
  };

  const dragMouseDown = (event) => {
    console.log("here");
    event.preventDefault();

    pos3 = event.clientX;
    pos4 = event.clientY;

    element.classList.add("drag");

    document.onmouseup = dragMouseUp;
    document.onmousemove = dragMouseMove;
  };

  dragzone.onmousedown = dragMouseDown;
};
