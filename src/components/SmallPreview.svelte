<script>
import { preview, previewModal } from "../store/store";

const onClick = () => {
  previewModal.update(() => true);
};
</script>

<main>
  <label for="preview">Preview</label>
  <div id="preview" class="preview" on:click="{onClick}">
    <img class="preview-img" src="{$preview}" alt="Preivew" />
  </div>
</main>

<style>
.preview {
  width: 200px;
  border: 1px solid #555;
  border-radius: 6px;
  min-height: 100px;
  cursor: pointer;
  display: flex;
  overflow: hidden;
}

.preview-img {
  width: 100%;
}
</style>
