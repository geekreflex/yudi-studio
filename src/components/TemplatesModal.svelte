<script>
import { templatesModal, editor, currentTemplate } from "../store/store";
import Modal from "./Modal.svelte";

let templates = [];

const renderTemplate = (template) => {
  let data = JSON.parse(template.template);

  currentTemplate.set({ name: template.name, id: template._id });
  $editor.setDimensions({
    width: parseFloat(data.width),
    height: parseFloat(data.height),
  });
  $editor.loadFromJSON(data.data, $editor.renderAll.bind($editor));
  console.log($editor.getWidth());
  closeModal();
};

const renderBlank = () => {
  $editor.clear();
  $editor.setDimensions({ width: 600, height: 500 });
  $editor.set({ backgroundColor: "white" });
  currentTemplate.set({ name: null, id: null });
  closeModal();
};

const closeModal = () => {
  templatesModal.update(() => false);
};

fetch("http://localhost:8400/api/templates")
  .then((res) => res.json())
  .then((data) => {
    templates = data.payload;
  });
</script>

<Modal visible="{$templatesModal}" close="{closeModal}" title="Templates">
  <main>
    <div class="template-list">
      <div class="template" on:click="{renderBlank}">Blank</div>
      {#each templates as template}
        <div class="template" on:click="{() => renderTemplate(template)}">
          {template.name}
        </div>
      {/each}
    </div>
  </main>
</Modal>

<style>
main {
  width: 750px;
}

.template-list {
  display: flex;
}

.template {
  width: 300px;
  border: 1px solid #666;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  padding: 30px;
}
</style>
