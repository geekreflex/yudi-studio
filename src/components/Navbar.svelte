<script>
import DownloadIcon from "../icons/DownloadIcon.svelte";
import {
  publishModal,
  preview,
  editor,
  items,
  downloadWidget,
} from "../store/store";
import UndoRedo from "./UndoRedo.svelte";
import ObjectActions from "./widgets/ObjectActions.svelte";
import FileAction from "./FileAction.svelte";

const onPublish = () => {
  publishModal.update(() => true);
  preview.set($editor.toDataURL("png"));
};

const onDownloadBtn = () => {
  $downloadWidget = true;
};
</script>

<main>
  <div class="left">
    <FileAction />
    <ObjectActions />
    <UndoRedo />
  </div>
  <div class="right">
    <!-- <button class="btn primary" on:click="{onPublish}">Publish</button> -->
    <button
      class:active-download="{$items.length}"
      class="download-btn btn btn-primary"
      on:click="{onDownloadBtn}"
      ><span>Download</span>
      <DownloadIcon />
    </button>
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

.right {
  display: flex;
  align-items: center;
}

.right button {
  margin-left: 10px;
}

.active-download {
  opacity: 1 !important;
  pointer-events: visible !important;
}

.download-btn {
  opacity: 0.5;
  pointer-events: none;
}
</style>
