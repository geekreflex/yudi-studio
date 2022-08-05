<script>
import Modal from "./Modal.svelte";
import { publishModal, editor, currentTemplate } from "../store/store";
import SmallPreview from "./SmallPreview.svelte";

let name;

const onClose = () => {
  publishModal.update(() => false);
};

const onNameInput = (val) => {
  name = val.value;
};

const onPublish = () => {
  const payload = {
    name,
    template: JSON.stringify($editor),
  };

  fetch("http://localhost:8400/api/templates", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
</script>

<Modal visible="{$publishModal}" close="{onClose}" title="Publish Design">
  <main>
    <div class="input-group">
      <div class="input-wrap">
        <label for="name">Design Name</label>
        <input
          class="input-form"
          id="name"
          value="{$currentTemplate ? $currentTemplate.name : ''}"
          on:input="{(e) => onNameInput(e.target)}"
          required />
      </div>
      <SmallPreview />
    </div>
    <div class="btn-wrap btn-left">
      <button class="btn-form" on:click="{onPublish}"
        >{$currentTemplate.id ? "Update" : "Publish"}</button>
    </div>
  </main>
</Modal>

<style>
main {
  width: 700px;
}
</style>
