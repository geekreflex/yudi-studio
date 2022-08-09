<script>
import { onTextWidget } from "../../functions/clickFunctions";

import TextAlignBlockIcon from "../../icons/TextAlignBlockIcon.svelte";
import TextAlignCenterIcon from "../../icons/TextAlignCenterIcon.svelte";
import TextAlignLeftIcon from "../../icons/TextAlignLeftIcon.svelte";
import TextAlignRightIcon from "../../icons/TextAlignRightIcon.svelte";
import { selectedObj, editor } from "../../store/store";
import Color from "../excerpts/Color.svelte";
import FontFamily from "../excerpts/FontFamily.svelte";
import FontSize from "../excerpts/FontSize.svelte";
import PostionSize from "../excerpts/PostionSize.svelte";
import Stroke from "../excerpts/Stroke.svelte";

const onAlignText = (pos) => {
  $editor.getActiveObject().set({ textAlign: pos });
  $editor.renderAll();
};
</script>

<main>
  <FontFamily />
  <FontSize />
  <Color />
  <div class="btn-wrap">
    <button on:click="{() => onTextWidget(true)}" class="btn"
      >Use editor</button>
  </div>
  <PostionSize />
  <div class="item">
    <div class="item-name">Justify:</div>
    <div class="align-btns item-data">
      <button
        class:active="{$selectedObj?.textAlign === 'left'}"
        on:click="{() => onAlignText('left')}"
        class="align-btn"
        data-name="left">
        <TextAlignLeftIcon />
      </button>
      <button
        class:active="{$selectedObj?.textAlign === 'right'}"
        on:click="{() => onAlignText('right')}"
        class="align-btn"
        data-name="right">
        <TextAlignRightIcon />
      </button>
      <button
        class:active="{$selectedObj?.textAlign === 'center'}"
        on:click="{() => onAlignText('center')}"
        class="align-btn"
        data-name="center">
        <TextAlignCenterIcon />
      </button>
      <button
        class:active="{$selectedObj?.textAlign === 'block'}"
        on:click="{() => onAlignText('block')}"
        class="align-btn"
        data-name="block">
        <TextAlignBlockIcon />
      </button>
    </div>
  </div>
  <Stroke />
</main>

<style>
main {
  display: flex;
  flex-direction: column;
}

.align-btns {
  display: flex;
  justify-content: center;
}

.btn-wrap {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}

.item {
  margin-bottom: 10px;
  position: relative;
}
.item-name {
  margin-bottom: 5px;
  font-size: 14px;
  color: #ccc;
}

.align-btn {
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

.active {
  background-color: #08080a !important;
}
</style>
