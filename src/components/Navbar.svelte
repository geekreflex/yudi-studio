<script>
import { editor } from "../store/store";
import { fabric } from "fabric";
import { text } from "svelte/internal";
import { Hurray } from "../utils/imageFile";
import { toDataURL } from "../utils/toDataUrl";
import Canvas from "./Canvas.svelte";
import Toolbar from "./Toolbar.svelte";

const templates = {
  temp1: {
    backgroundColor: "gold",
    width: 400,
    height: 400,
    objects: [
      { url: Hurray, type: "image" },
      {
        content: "Text content one",
        left: 100,
        top: 50,
        fontSize: 20,
        width: 150,
        type: "text",
      },
      {
        content: "Text content two",
        left: 100,
        top: 100,
        fontSize: 20,
        width: 150,
        type: "text",
      },
    ],
  },
};

const renderTemplate = (temp) => {
  $editor.clear();
  let items = templates[temp];
  const { backgroundColor, width, height, objects } = items;
  $editor.setDimensions({ width, height });
  $editor.set({ backgroundColor });
  renderObjects(objects);
};

const renderObjects = (objs) => {
  objs.map((ob) => {
    if (ob.type === "text") {
      renderTexts(ob);
    }

    if (ob.type === "image") {
      renderImages(ob);
    }
  });
};

const renderTexts = (text) => {
  const t = new fabric.Textbox(text.content, { ...text });
  $editor.add(t);
};

const renderImages = (image) => {
  toDataURL(image.url).then((dataUrl) => {
    fabric.Image.fromURL(dataUrl, (img) => {
      img.scaleToWidth(200);
      $editor.add(img);
    });
  });
};
</script>

<main>
  <button on:click="{() => renderTemplate('temp1')}">Template one</button>
  <Toolbar />
</main>

<style>
main {
  width: 100%;
  height: 50px;
  background-color: #111;
  border-bottom: 1px solid #333;
}
</style>
