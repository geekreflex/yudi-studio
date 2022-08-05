<script>
import { editor, resizeModal } from "../store/store";
import Modal from "./Modal.svelte";

let width;
let height;

const onResize = () => {
  width = width || $editor.getWidth();
  height = height || $editor.getHeight();
  $editor.setDimensions({ width, height });
  $editor.set({ backgroundColor: "blue" });
  $editor.renderAll();
  onClose();
};

const onWidth = (val) => {
  width = val.value;
};

const onHeight = (val) => {
  height = val.value;
};

const onClose = () => {
  resizeModal.update(() => false);
};
</script>

<Modal visible="{$resizeModal}" close="{onClose}" title="Resize Canvas">
  <main>
    <div class="input-group">
      <div class="input-wrap">
        <label for="width">Width</label>
        <input
          class="input-form"
          id="width"
          value="{$editor?.getWidth()}"
          type="number"
          on:input="{(e) => onWidth(e.target)}" />
      </div>
      <div class="input-wrap">
        <label for="height">Height</label>
        <input
          class="input-form"
          id="height"
          value="{$editor?.getHeight()}"
          type="number"
          on:input="{(e) => onHeight(e.target)}" />
      </div>
    </div>
    <button class="btn-form" type="button" on:click="{onResize}">Resize</button>
  </main>
</Modal>

<style>
main {
  width: 500px;
  color: white;
}
</style>
