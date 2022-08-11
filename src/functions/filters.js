import { editor } from "../store/store";
import { fabric } from "fabric";

export default function () {
  let canvas;
  editor.subscribe((val) => (canvas = val));

  var webglBackend;

  try {
    webglBackend = new fabric.WebglFilterBackend();
  } catch (e) {
    console.log(e);
  }

  var canvas2dBackend = new fabric.Canvas2dFilterBackend();

  fabric.filterBackend = fabric.initFilterBackend();
  var $ = function (id) {
    return document.getElementById(id);
  };

  function applyFilter(index, filter) {
    var obj = canvas.getActiveObject();
    obj.filters[index] = filter;
    obj.applyFilters();
    canvas.renderAll();
  }

  function getFilter(index) {
    var obj = canvas.getActiveObject();
    return obj.filters[index];
  }

  function applyFilterValue(index, prop, value) {
    var obj = canvas.getActiveObject();
    if (obj.filters[index]) {
      obj.filters[index][prop] = value;
      obj.applyFilters();
      canvas.renderAll();
    }
  }

  var f = fabric.Image.filters;

  fabric.filterBackend = webglBackend;

  canvas.on({
    "selection:created": function () {
      fabric.util
        .toArray(document.getElementsByTagName("input"))
        .forEach(function (el) {
          el.disabled = false;
        });

      var filters = ["invert", "blur", "saturation"];

      if (canvas.getActiveObject().type !== "image") {
        return;
      }

      for (var i = 0; i < filters.length; i++) {
        $(filters[i]) &&
          ($(filters[i]).checked = !!canvas.getActiveObject().filters[i]);
      }
    },
    "selection:cleared": function () {
      fabric.util
        .toArray(document.getElementsByTagName("input"))
        .forEach(function (el) {
          el.disabled = true;
        });
    },
  });

  $("invert").onclick = function () {
    applyFilter(1, this.checked && new f.Invert());
  };
  $("blur").onclick = function () {
    applyFilter(
      11,
      this.checked &&
        new f.Blur({
          value: parseFloat($("blur-value").value),
        })
    );
  };
  $("blur-value").oninput = function () {
    applyFilterValue(11, "blur", parseFloat(this.value, 10));
  };
  $("saturation").onclick = function () {
    applyFilter(
      7,
      this.checked &&
        new f.Saturation({
          saturation: parseFloat($("saturation-value").value),
        })
    );
  };
  $("saturation-value").oninput = function () {
    applyFilterValue(7, "saturation", parseFloat(this.value));
  };
}
