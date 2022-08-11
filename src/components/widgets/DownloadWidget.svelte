<script>
import { downloadWidget, editor } from "../../store/store";
import Draggable from "../Draggable.svelte";

let fileName = "Unititled";
let selectedFormat = "png";
let selectedQuality = 0.8;

function onSave(e) {
  let image = $editor.toDataURL({
    format: selectedFormat,
    quality: parseInt(selectedQuality, 10),
  });
  this.href = image;
  this.download = `${fileName}.${selectedFormat.toLowerCase()}`;
}

const formatList = ["png", "jpg", "pdf"];
</script>

<Draggable
  centered="{true}"
  visible="{$downloadWidget}"
  title="Download"
  close="{() => ($downloadWidget = false)}">
  <main>
    <div class="item">
      <div class="item-name">File name</div>
      <div class="input-wrap">
        <input
          type="text"
          value="{fileName}"
          on:input="{(e) => (fileName = e.target.value)}" />
      </div>
    </div>
    <div class="item">
      <div class="item-name">Format</div>
      <div class="formats">
        {#each formatList as format}
          <div
            on:click="{() => (selectedFormat = format)}"
            class:btn-primary="{format === selectedFormat}"
            class="format btn">
            {format}
          </div>
        {/each}
      </div>
    </div>
    <div class:visible="{selectedFormat === 'png'}" class="item select">
      <div class="item-name">Quality</div>
      <div class="input-wrap ">
        <select
          value="{selectedQuality}"
          on:change="{(e) => (selectedQuality = e.target.value)}">
          <option value="{0.2}">20%</option>
          <option value="{0.4}">40%</option>
          <option value="{0.6}">60%</option>
          <option value="{0.8}">80%</option>
          <option value="{1}">100%</option>
        </select>
      </div>
    </div>
    <a href class="btn btn-primary" on:click="{onSave}">Save</a>
  </main>
</Draggable>

<style>
main {
  width: 400px;
  color: #fff;
  padding: 20px;
}

.formats {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
}

.select {
  width: 150px;
  display: none;
}

.visible {
  display: block;
}
</style>
