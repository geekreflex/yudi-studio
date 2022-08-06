<script>
import { selectedObj, editor } from "../../store/store";
import PostionSizeWidget from "./PostionSizeWidget.svelte";

const onFillChange = (e) => {
  $editor.getActiveObject().set({ fill: e.target.value });
  $editor.renderAll();
};
</script>

<main>
  <div>
    <div class="item">
      <div class="item-name">Color</div>
      <div>
        <input
          type="color"
          value="{$selectedObj?.fill}"
          on:input="{onFillChange}" />
      </div>
    </div>
    <PostionSizeWidget />
  </div>
</main>

<style>
</style>
