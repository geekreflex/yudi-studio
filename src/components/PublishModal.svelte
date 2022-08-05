<script>
import Modal from "./Modal.svelte";
import { publishModal } from "../store/store";
import SmallPreview from "./SmallPreview.svelte";

const onClose = () => {
  publishModal.update(() => false);
};
</script>

<Modal visible="{$publishModal}" close="{onClose}" title="Publish Design">
  <main>
    <div class="input-group">
      <div class="input-wrap">
        <label for="name">Design Name</label>
        <input class="input-form" id="name" value="" />
      </div>
      <SmallPreview />
    </div>
    <div class="btn-wrap btn-left">
      <button class="btn-form">Publish</button>
    </div>
  </main>
</Modal>

<style>
main {
  width: 700px;
}
</style>
