<script>
import { onMount } from "svelte";

import TextAlignBlockIcon from "../../icons/TextAlignBlockIcon.svelte";
import TextAlignCenterIcon from "../../icons/TextAlignCenterIcon.svelte";
import TextAlignLeftIcon from "../../icons/TextAlignLeftIcon.svelte";
import TextAlignRightIcon from "../../icons/TextAlignRightIcon.svelte";
import { selectedObj, editor } from "../../store/store";

onMount(() => {
  activeBtn();
});

const activeBtn = () => {
  const btns = document.querySelectorAll(".align-btn");
  btns.forEach((btn) => {
    // @ts-ignore
    btn.style.backgroundColor = "";
    if (btn["dataset"].name === $selectedObj?.textAlign) {
      btn.classList.add("active");
      // @ts-ignore
      btn.style.backgroundColor = "#222";
    }
  });
};

console.log($selectedObj);

const onAlignText = (pos) => {
  $editor.getActiveObject().set({ textAlign: pos });
  activeBtn();
  $editor.renderAll();
};
</script>

<main class="{$selectedObj?.type === 'textbox' ? 'visible' : ''}">
  <div class="align-btns">
    <button
      on:click="{() => onAlignText('left')}"
      class="align-btn"
      data-name="left">
      <TextAlignLeftIcon />
    </button>
    <button
      on:click="{() => onAlignText('right')}"
      class="align-btn"
      data-name="right">
      <TextAlignRightIcon />
    </button>
    <button
      on:click="{() => onAlignText('center')}"
      class="align-btn"
      data-name="center">
      <TextAlignCenterIcon />
    </button>
    <button
      on:click="{() => onAlignText('block')}"
      class="align-btn"
      data-name="block">
      <TextAlignBlockIcon />
    </button>
  </div>
</main>

<style>
main {
  display: none;
}
.visible {
  display: flex;
}

.align-btns {
  display: flex;
}

button {
  background: transparent;
  border: none;
  outline: none;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 3px;
}
</style>
