<script>
import { fabric } from "fabric";
import { editor, create } from "../store/store";
import TextIcon from "../icons/TextIcon.svelte";
import ShapesIcon from "../icons/ShapesIcon.svelte";

const onText = () => {
  const text = new fabric.Textbox("Click to edit", {
    fill: "white",
    width: 200,
  });
  $editor.add(text).centerObject(text);
  $editor.renderAll();
};

const onRect = () => {
  const rect = new fabric.Rect({
    width: 200,
    height: 200,
    fill: "blue",
  });

  $editor.add(rect).centerObject(rect);
  $editor.renderAll();
};
</script>

<main>
  <button on:click="{onText}">
    <TextIcon />
  </button>
  <button on:click="{onRect}">
    <ShapesIcon />
  </button>
</main>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

button {
  border: none;
  outline: none;
  background: transparent;
  fill: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 50px;
}
</style>
