<script>
import { fabric } from "fabric";

import {
  publishModal,
  preview,
  editor,
  previewModal,
  selectedObj,
} from "../store/store";
import NavList from "./NavList.svelte";
import ObjectActions from "./widgets/ObjectActions.svelte";

const onPreview = () => {
  preview.set($editor.toDataURL("png"));
  previewModal.update(() => true);
};
const onPublish = () => {
  publishModal.update(() => true);
  preview.set($editor.toDataURL("png"));
};
</script>

<main>
  <div class="left">
    <NavList />
    <ObjectActions />
  </div>
  <div class="right">
    <button on:click="{onPreview}">Preview</button>
    <button on:click="{onPublish}">Publish</button>
  </div>
</main>

<style>
main {
  width: 100%;
  height: 50px;
  background-color: #111;
  border-bottom: 1px solid #333;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.left {
  display: flex;
}
</style>
