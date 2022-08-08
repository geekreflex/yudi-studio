/*****
 *
 * Group object
 */
var canvas = new fabric.Canvas("c");
canvas.backgroundColor = "yellow";

//create circle object
var circle = new fabric.Circle({
  radius: 20,
  fill: "red",
  left: 100,
  top: 100,
});
canvas.add(circle);

//create square object
var square = new fabric.Rect({
  left: 130,
  top: 140,
  fill: "green",
  width: 40,
  height: 80,
});
canvas.add(square);

canvas.renderAll();

$("#groupthem").on("click", function (event) {
  groupthem();
});

var site_url = "http://fabricjs.com/assets/1.svg";

fabric.loadSVGFromURL(site_url, function (objects) {
  var group = new fabric.PathGroup(objects, {
    left: 165,
    top: 100,
    width: 295,
    height: 211,
  });
  canvas.add(group);
  canvas.renderAll();
});

function groupthem() {
  var objs = [];
  //get all the objects into an array
  objs = canvas._objects.filter(function (obj) {
    return obj;
  });

  //group all the objects
  var alltogetherObj = new fabric.Group(objs, {
    top: 200,
    left: 250,
    originX: "center",
    originY: "center",
  });

  //clear previous objects
  canvas._objects.forEach(function (obj) {
    obj.remove();
  });

  canvas.add(alltogetherObj);
  alltogether.setCoords();
  canvas.renderAll();
}
