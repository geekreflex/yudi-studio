<script>
import { fabric } from "fabric";
import { editor, resizeModal, templatesModal, templates } from "../store/store";

const addText = () => {
  const text = new fabric.Textbox("Click to edit");
  $editor.add(text);
};

const addTriangle = () => {
  const triangle = new fabric.Triangle();
  $editor.add(triangle);
};

const addRectangle = () => {
  const square = new fabric.Rect({
    width: 100,
    height: 100,
  });
  $editor.add(square);
};

const addCircle = () => {
  const circle = new fabric.Circle({
    fill: "deepskyblue",
    radius: 50,
    stroke: "red",
    strokeWidth: 3,
  });
  $editor.add(circle);
};

const addLine = () => {
  const line = new fabric.Line([50, 100, 200, 200], {
    left: 170,
    top: 150,
    stroke: "black",
  });
  $editor.add(line);
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
      $editor.setActiveObject(img);
      $editor.centerObject(img);
      $editor.add(img);
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
  <button on:click="{onChooseTemp}">Choose template</button>
  <button on:click="{addText}"> Text </button>
  <button on:click="{addTriangle}"> Triangle </button>
  <button on:click="{addCircle}"> Circle</button>
  <button on:click="{addRectangle}"> Rectangle </button>
  <button on:click="{addPicture}"> Picture </button>
  <button on:click="{addLine}">Line</button>
  <button on:click="{() => resizeModal.update(() => true)}">Resize</button>
</main>

<style>
#image-upload {
  display: none;
}
</style>
