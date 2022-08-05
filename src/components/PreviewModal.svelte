<script>
import { preview, previewModal } from "../store/store";
import Modal from "./Modal.svelte";

const onClose = () => {
  previewModal.update(() => false);
};
</script>

<Modal visible="{$previewModal}" title="Preivew Design" close="{onClose}">
  <main>
    <div class="preview-wrap">
      <img class="preview-img" src="{$preview}" alt="Large Design Preivew" />
    </div>
  </main>
</Modal>

<style>
main {
  width: 800px;
  display: flex;
  justify-content: center;
}
.preview-wrap {
  width: 400px;
}

.preview-img {
  width: 100%;
}
</style>
