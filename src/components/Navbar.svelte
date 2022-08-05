<script>
import { publishModal, preview, editor, previewModal } from "../store/store";

import Toolbar from "./Toolbar.svelte";

const onPreview = () => {
  preview.set($editor.toDataURL("png"));
  previewModal.update(() => true);
};
const onPublish = () => {
  publishModal.update(() => true);
  preview.set($editor.toDataURL("png"));
};
</script>

<main>
  <div class="left">
    <Toolbar />
  </div>
  <div class="right">
    <button on:click="{onPreview}">Preview</button>
    <button on:click="{onPublish}">Publish</button>
  </div>
</main>

<style>
main {
  width: 100%;
  height: 50px;
  background-color: #111;
  border-bottom: 1px solid #333;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
