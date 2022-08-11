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

const publishNew = (payload) => {
  fetch("http://localhost:8400/api/templates", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      onClose();
    })
    .catch((error) => console.error(error));
};

const updateTemplate = (payload) => {
  fetch(`http://localhost:8400/api/templates/${$currentTemplate.id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      onClose();
    })
    .catch((error) => console.error(error));
};

const onPublish = () => {
  const props = {
    data: $editor,
    width: $editor.getWidth(),
    height: $editor.getHeight(),
  };

  const payload = {
    name,
    template: JSON.stringify(props),
  };

  if ($currentTemplate.id) {
    updateTemplate(payload);
  } else {
    publishNew(payload);
  }
};
</script>

<Modal visible="{$publishModal}" close="{onClose}" title="Publish Design">
  <main>
    <div class="input-group">
      <div class="item">
        <div class="input-wrap">
          <div class="item-name" for="name">Design Name</div>
          <input
            class="input-form"
            id="name"
            type="text"
            value="{$currentTemplate ? $currentTemplate.name : ''}"
            on:input="{(e) => onNameInput(e.target)}"
            required />
        </div>
      </div>
      <SmallPreview />
    </div>
    <div class="btn-wrap btn-left">
      <button class="btn primary" on:click="{onPublish}"
        >{$currentTemplate.id ? "Update" : "Publish"}</button>
    </div>
  </main>
</Modal>

<style>
main {
  width: 700px;
}
</style>
