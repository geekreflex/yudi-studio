<script>
import { fabric } from "fabric";
import CircleIcon from "../icons/CircleIcon.svelte";
import PictureIcon from "../icons/PictureIcon.svelte";
import SquareIcon from "../icons/SquareIcon.svelte";
import TriangleIcon from "../icons/TriangleIcon.svelte";
import TextIcon from "../icons/TextIcon.svelte";
import { editor, resizeModal, templatesModal, templates } from "../store/store";
import LabelsIcon from "../icons/LabelsIcon.svelte";
import StarIcon from "../icons/StarIcon.svelte";
import PictureIcon2 from "../icons/PictureIcon2.svelte";
import PolygonIcon from "../icons/PolygonIcon.svelte";
import {
  regularPolygonPoints,
  starPolygonPoints,
} from "../utils/polygonPoints";

const addText = () => {
  const text = new fabric.Textbox("Click to edit", {
    width: 200,
  });
  $editor.centerObject(text).add(text).setActiveObject(text);
};

const addTriangle = () => {
  const triangle = new fabric.Triangle();
  $editor.centerObject(triangle).add(triangle).setActiveObject(triangle);
};

const addRectangle = () => {
  const rect = new fabric.Rect({
    width: 100,
    height: 100,
  });
  $editor.centerObject(rect).add(rect).setActiveObject(rect);
  $editor.calcOffset();
};

const addCircle = () => {
  const circle = new fabric.Circle({
    radius: 50,
  });
  $editor.centerObject(circle).add(circle).setActiveObject(circle);
};

const addLine = () => {
  const line = new fabric.Line([50, 100, 200, 200], {
    left: 170,
    top: 150,
    stroke: "000000",
  });

  $editor.centerObject(line).add(line).setActiveObject(line);
};

const addPicture = () => {
  let imgUploader = document.getElementById("image-upload");
  imgUploader.click();
};

const onImgUpload = (e) => {
  const file = e.target.files[0];
  let reader = new FileReader();
  reader.onload = (f) => {
    let data = f.target.result;
    fabric.Image.fromURL(data, (img) => {
      img.scaleToWidth(200);
      $editor.setActiveObject(img).centerObject(img).add(img);
    });
  };
  reader.readAsDataURL(file);
};

const polyPoints = regularPolygonPoints(6, 100);
const addPolygon = () => {
  const polygon = new fabric.Polygon(polyPoints);
  $editor.centerObject(polygon).add(polygon).setActiveObject(polygon);
};

const starPoints = starPolygonPoints(5, 50, 100);
const addStar = () => {
  const star = new fabric.Polygon(starPoints);
  $editor.centerObject(star).add(star).setActiveObject(star);
};

const onChooseTemp = () => {
  templatesModal.update(() => true);
  fetch("http://localhost:8400/api/templates")
    .then((res) => res.json())
    .then((data) => {
      $templates = data.payload;
    });
};
</script>

<main>
  <input type="file" id="image-upload" on:change="{onImgUpload}" />
  <!-- <button on:click="{onChooseTemp}">Choose template</button> -->
  <button><LabelsIcon /></button>
  <button on:click="{addTriangle}"> <TriangleIcon /> </button>
  <button on:click="{addText}">
    <TextIcon />
  </button>
  <button on:click="{addCircle}"> <CircleIcon /></button>
  <button on:click="{addRectangle}"> <SquareIcon /> </button>
  <button on:click="{addPicture}"> <PictureIcon /> </button>
  <button on:click="{addPicture}"> <PictureIcon2 /> </button>
  <!-- <button on:click="{addLine}">Line</button> -->
  <!-- <button on:click="{() => resizeModal.update(() => true)}">Resize</button> -->
  <button on:click="{addStar}"><StarIcon /></button>
  <button on:click="{addPolygon}"><PolygonIcon /></button>
</main>

<style>
#image-upload {
  display: none;
}

main {
  position: fixed;
  top: 100px;
  display: flex;
  flex-direction: column;
  width: 60px;
  left: 20px;
  background-color: #111111;
  padding: 10px 0;
  border-radius: 6px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
}

button {
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  height: 50px;
  cursor: pointer;
}

button:hover {
  opacity: 0.5;
}
</style>
