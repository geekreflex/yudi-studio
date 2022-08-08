<script>
import { fabric } from "fabric";
import CircleIcon from "../icons/CircleIcon.svelte";
import PictureIcon from "../icons/PictureIcon.svelte";
import SquareIcon from "../icons/SquareIcon.svelte";
import TriangleIcon from "../icons/TriangleIcon.svelte";
import TextIcon from "../icons/TextIcon.svelte";
import {
  editor,
  resizeModal,
  templatesModal,
  templates,
  freeDrawingMode,
} from "../store/store";
import LabelsIcon from "../icons/LabelsIcon.svelte";
import StarIcon from "../icons/StarIcon.svelte";
import PictureIcon2 from "../icons/PictureIcon2.svelte";
import PolygonIcon from "../icons/PolygonIcon.svelte";
import PainBrushIcon from "../icons/PainBrushIcon.svelte";
import {
  addText,
  addCircle,
  addTriangle,
  addRectangle,
  addLine,
  addPolygon,
  addStar,
  addFreeDrawing,
} from "../functions/addFunctions";

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
  <button class:active="{$freeDrawingMode}" on:click="{addFreeDrawing}"
    ><PainBrushIcon /></button>
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
  align-items: center;
}

button {
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  height: 50px;
  width: 50px;
  cursor: pointer;
  border-radius: 8px;
}

button:hover {
  opacity: 0.5;
}

.active {
  background-color: #08080a;
}
</style>
