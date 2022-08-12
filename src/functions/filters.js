import { editor } from "../store/store";
import { fabric } from "fabric";

let canvas;
editor.subscribe((val) => (canvas = val));

fabric.filterBackend = fabric.initFilterBackend();
var $ = function (id) {
  return document.getElementById(id);
};

export function applyFilter(index, filter) {
  var obj = canvas.getActiveObject();
  obj.filters[index] = filter;
  obj.applyFilters();
  canvas.renderAll();
}

export function getFilter(index) {
  var obj = canvas.getActiveObject();
  return obj.filters[index];
}

export function applyFilterValue(index, prop, value) {
  var obj = canvas.getActiveObject();
  if (obj.filters[index]) {
    obj.filters[index][prop] = value;
    obj.applyFilters();
    canvas.renderAll();
  }
}
