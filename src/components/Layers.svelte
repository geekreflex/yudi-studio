<script>
import EyeOneIcon from "../icons/EyeOneIcon.svelte";
import { items, editor } from "../store/store";

const generatePreview = () => {
  return $editor.toDataURL("png");
};

const onObjectClick = (index) => {
  $editor.setActiveObject($editor.item(index));
  $editor.renderAll();
};
</script>

<main>
  <p>Layer(Objects)</p>
  <div class="objects">
    {#each $items as item, index}
      <div class="object" on:click="{() => onObjectClick(index)}">
        <div class="object-left-info">
          <div class="object-eye">
            <EyeOneIcon />
          </div>
        </div>
        <div class="object-right-info">
          <div class="object-preview">
            <img src="{generatePreview()}" alt="Preview" />
          </div>
          <div class="object-name">Layer #{index + 1}- {item.type}</div>
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
main {
  height: 100%;
  overflow: auto;
}
.objects {
  display: flex;
  flex-direction: column;
}

.object {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
}

.object:hover {
  background-color: #222;
}

.object-left-info {
  display: flex;
  margin-right: 30px;
}

.object-eye {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%;
}

.object-right-info {
  display: flex;
  align-items: center;
}

.object-preview {
  width: 50px;
  height: 50px;
  border: 2px solid #888;
  margin-right: 20px;
  padding: 3px;
  border-radius: 3px;
}

.object-name {
  color: #ccc;
  white-space: nowrap;
}
</style>
