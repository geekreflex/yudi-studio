<script>
import { onMount } from "svelte";
import TextAlignBlockIcon from "../../icons/TextAlignBlockIcon.svelte";
import TextAlignCenterIcon from "../../icons/TextAlignCenterIcon.svelte";
import TextAlignLeftIcon from "../../icons/TextAlignLeftIcon.svelte";
import TextAlignRightIcon from "../../icons/TextAlignRightIcon.svelte";
import { selectedObj, editor } from "../../store/store";
import FontSize from "./FontSize.svelte";
import PostionSizeWidget from "./PostionSizeWidget.svelte";

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
      btn.style.backgroundColor = "#333";
    }
  });
};

const onAlignText = (pos) => {
  $editor.getActiveObject().set({ textAlign: pos });
  activeBtn();
  $editor.renderAll();
};

const onFillChange = (e) => {
  $editor.getActiveObject().set({ fill: e.target.value });
  $editor.renderAll();
};
</script>

<main>
  <FontSize />
  <div class="item">
    <div class="item-name">Color:</div>
    <div class="item-data color">
      <input
        type="color"
        value="{$selectedObj?.fill}"
        name="fill"
        on:input="{onFillChange}" />
    </div>
  </div>
  <PostionSizeWidget />
  <div class="item">
    <div class="item-name">Justify:</div>
    <div class="align-btns item-data">
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
  </div>
</main>

<style>
main {
  display: flex;
  flex-direction: column;
}

.align-btns {
  display: flex;
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.item-name {
  margin-right: 20px;
}

.color input {
  width: 100px;
  height: 30px;
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
