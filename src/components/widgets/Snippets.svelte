<script>
import { selectedObj } from "../../store/store";
import { afterUpdate } from "svelte";
import { fontList } from "../../data/fontList";
import {
  onFontFamilyChange,
  onFontSize,
  onFontUnderline,
  onFontWeight,
} from "../../functions/editorFunctions";
import BoldIcon from "../../icons/BoldIcon.svelte";
import UnderlinedIcon from "../../icons/UnderlinedIcon.svelte";
import ItalicIcon from "../../icons/ItalicIcon.svelte";
import Color from "../excerpts/Color.svelte";

afterUpdate(() => {
  let snippetsWrap = document.getElementById("snippets-wrap");
  snippetsWrap.style.marginLeft = `${$selectedObj?.left}px`;

  if ($selectedObj?.top <= 30) {
    snippetsWrap.style.marginTop = `${
      $selectedObj?.top + $selectedObj?.height + 50
    }px`;
  } else {
    snippetsWrap.style.marginTop = `${$selectedObj?.top - 100}px`;
  }
});
</script>

<main
  class:visible="{$selectedObj?.type === 'textbox'}"
  id="snippets-wrap"
  style="left: {$selectedObj?.left}, top: {$selectedObj?.top}">
  <div class="section top">
    <div class="input-wrap select">
      <select
        value="{$selectedObj?.fontFamily}"
        on:input="{(e) => onFontFamilyChange(e.target.value)}">
        {#each fontList as font}
          <option value="{font}" style="font-family:{font}">{font}</option>
        {/each}
      </select>
    </div>
    <div class="input-wrap">
      <input
        type="number"
        value="{$selectedObj?.fontSize}"
        on:input="{(e) => onFontSize(e.target.value)}" />
    </div>
  </div>
  <div class="section bottom">
    <div class="text-format">
      <button
        class:activeBtn="{$selectedObj?.fontWeight === 'bold'}"
        class="action-btn"
        on:click="{() => onFontWeight('bold')}"><BoldIcon /></button>
      <button
        on:click="{() => onFontUnderline()}"
        class:activeBtn="{$selectedObj?.underline}"
        class="action-btn"><UnderlinedIcon /></button>
      <button
        on:click="{() => onFontWeight('italic')}"
        class:activeBtn="{$selectedObj?.fontWeight === 'italic'}"
        class="action-btn"><ItalicIcon /></button>
    </div>
    <Color mode="fill" val="{$selectedObj?.fill}" />
  </div>
</main>

<style>
main {
  position: absolute;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.7);
  width: 450px;
  border-radius: 6px;
  color: #ffffff;
  border: 1px solid #888;
  backdrop-filter: blur(10px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  transition: margin-top 100ms;
  display: none;
  padding: 5px;
}

.section {
  display: flex;
}

.top {
  margin-bottom: 5px;
}

.visible {
  display: block;
}

.text-format {
  display: flex;
}

/* .text-format button {
  background-color: #333;
} */

.activeBtn {
  background-color: #333 !important;
}

.select {
  width: 75%;
  margin-right: 10px;
}

.color-block {
  width: 60px;
  height: 30px;
  border: 2px solid #666;
  border-radius: 4px;
}
</style>
