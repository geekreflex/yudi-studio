<script>
import { fabric } from "fabric";
import CircleIcon from "../icons/CircleIcon.svelte";
import PictureIcon from "../icons/PictureIcon.svelte";
import SquareIcon from "../icons/SquareIcon.svelte";
import TriangleIcon from "../icons/TriangleIcon.svelte";
import TextIcon from "../icons/TextIcon.svelte";
import {
  editor,
  templatesModal,
  templates,
  freeDrawingMode,
  resizeWidget,
} from "../store/store";
import StarIcon from "../icons/StarIcon.svelte";
import PolygonIcon from "../icons/PolygonIcon.svelte";
import PainBrushIcon from "../icons/PainBrushIcon.svelte";
import {
  addText,
  addCircle,
  addTriangle,
  addRectangle,
  addPolygon,
  addStar,
  addFreeDrawing,
  remomveFreeDrawing,
} from "../functions/addFunctions";
import ResizeIcon from "../icons/ResizeIcon.svelte";
import { onResizeWidget } from "../functions/clickFunctions";
import MoreTool from "./MoreTool.svelte";

const addPicture = () => {
  remomveFreeDrawing();
  let imgUploader = document.getElementById("image-upload");
  imgUploader.click();
};

const onImgUpload = (e) => {
  const file = e.target.files[0];
  let reader = new FileReader();
  reader.onload = (f) => {
    let data = f.target.result;
    fabric.Image.fromURL(data, (img) => {
      img.set("stroke", "#000");
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
  <div class="tools-wrap">
    <input type="file" id="image-upload" on:change="{onImgUpload}" />
    <MoreTool />
    <button class="add-tool" on:click="{addTriangle}">
      <TriangleIcon />
    </button>
    <button class="add-tool" on:click="{addText}">
      <TextIcon />
    </button>
    <button class="add-tool" on:click="{addCircle}"> <CircleIcon /></button>
    <button class="add-tool" on:click="{addRectangle}"> <SquareIcon /> </button>
    <button class="add-tool" on:click="{addPicture}"> <PictureIcon /> </button>
    <button class="add-tool" on:click="{addStar}"><StarIcon /></button>
    <button class="add-tool" on:click="{addPolygon}"><PolygonIcon /></button>
    <button
      class="add-tool"
      class:active="{$freeDrawingMode}"
      on:click="{addFreeDrawing}"><PainBrushIcon /></button>
    <button
      class="add-tool"
      class:active="{$resizeWidget}"
      on:click="{() => onResizeWidget(true)}"><ResizeIcon /></button>
    <!-- <button class="add-tool"><EraserIcon /></button> -->
  </div>
</main>

<style>
#image-upload {
  display: none;
}

main {
  position: fixed;
  top: 100px;
  left: 20px;
  background-color: #111111;
  padding: 10px 0;
  border-radius: 6px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
  align-items: center;
  max-height: 85vh;
  overflow-y: auto;
  /* overflow-x: hidden; */
}

button {
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  height: 48px;
  width: 50px;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  opacity: 0.5;
}

.tools-wrap {
  width: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.active {
  background-color: #256141;
}
</style>
