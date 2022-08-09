<script>
import Draggable from "../Draggable.svelte";
import { textWidget, selectedObj, editor } from "../../store/store";
import { onTextWidget } from "../../functions/clickFunctions";

const onInputText = (val) => {
  $editor.getActiveObject().set("text", val);
  $editor.renderAll();
};
</script>

<Draggable
  visible="{$textWidget}"
  title="Text Editor"
  close="{() => onTextWidget(false)}">
  <main class:active="{$selectedObj?.text}">
    <div class="top section"></div>
    <div class="textarea">
      <div
        contenteditable="true"
        class="editor"
        on:input="{(e) => onInputText(e.target.textContent)}">
        {$selectedObj?.text}
      </div>
    </div>

    <div class="bottom section"></div>
  </main>
</Draggable>

<style>
main {
  width: 500px;
  opacity: 0.5;
  pointer-events: none;
}

.active {
  opacity: 1;
  pointer-events: visible;
}

.textarea {
  display: flex;
  padding: 0 5px;
}

.section {
  padding: 20px;
}

.textarea .editor {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  min-height: 200px;
  background-color: #333;
  color: #ccc;
  font-size: 16px;
}
</style>
