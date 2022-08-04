<script>
import { editor, resizeModal } from "../store/store";
import Modal from "./Modal.svelte";

let width;
let height;

const onResize = (e) => {
  $editor.setDimensions({ width, height });
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
    <div class="input-wrap">
      <input
        name="width"
        value="{$editor?.getWidth()}"
        type="number"
        on:input="{(e) => onWidth(e.target)}" />
      <input
        name="height"
        value="{$editor?.getHeight()}"
        type="number"
        on:input="{(e) => onHeight(e.target)}" />
    </div>
    <button style="button" on:click="{onResize}">Resize</button>
  </main>
</Modal>

<style>
main {
  width: 500px;
  color: white;
}

.input-wrap {
  display: flex;
  flex-direction: column;
  width: 350px;
}

input {
  height: 40px;
  margin-bottom: 10px;
  padding: 0 20px;
  background-color: #111;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: #444;
  border: 1px solid #555;
}

button {
  border: none;
  outline: none;
  padding: 10px 30px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
}
</style>
