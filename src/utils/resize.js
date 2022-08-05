// A function is used for dragging and moving
export function dragElement(element, direction, first, second) {
  var md; // remember mouse down info

  element.onmousedown = onMouseDown;

  function onMouseDown(e) {
    //console.log("mouse down: " + e.clientX);
    md = {
      e,
      offsetLeft: element.offsetLeft,
      offsetTop: element.offsetTop,
      firstHeight: first.offsetHeight,
      secondHeight: second.offsetHeight,
      firstWidth: first.offsetWidth,
      secondWidth: second.offsetWidth,
    };

    document.onmousemove = onMouseMove;
    document.onmouseup = () => {
      //console.log("mouse up");
      document.onmousemove = document.onmouseup = null;
    };
  }

  function onMouseMove(e) {
    // console.log("mouse move: " + e.clientX);
    var delta = {
      x: e.clientX - md.e.clientX,
      y: e.clientY - md.e.clientY,
    };

    if (direction === "V") {
      // Vertical
      // Prevent negative-sized elements
      delta.x = Math.min(Math.max(delta.y, -md.firstHeight), md.secondHeight);

      element.style.top = md.offsetTop + delta.x + "px";
      first.style.height = md.firstHeight + delta.x + "px";
      second.style.height = md.secondHeight - delta.x + "px";
    }

    if (direction === "H") {
      // Horizontal
      // Prevent negative-sized elements
      delta.x = Math.min(Math.max(delta.x, -md.firstWidth), md.secondWidth);

      element.style.left = md.offsetLeft + delta.x + "px";
      first.style.width = md.firstWidth + delta.x + "px";
      second.style.width = md.secondWidth - delta.x + "px";
    }
  }
}
