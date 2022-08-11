<script>
import DownloadIcon from "../icons/DownloadIcon.svelte";
import { publishModal, preview, editor } from "../store/store";
import NavList from "./NavList.svelte";
import ObjectActions from "./widgets/ObjectActions.svelte";

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
    <button class="btn primary" on:click="{onPublish}">Publish</button>
    <button class="btn btn-primary"
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
</style>
