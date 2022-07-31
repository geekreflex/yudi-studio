<script>
import { fabric } from "fabric";
import { editor } from "../store/store";

const onCircle = () => {
  const circle = new fabric.Circle({
    fill: "blue",
    radius: 50,
  });
  $editor.add(circle);
  $editor.renderAll();
};
</script>

<main>
  <button on:click="{onCircle}">Add Circle</button>
</main>
