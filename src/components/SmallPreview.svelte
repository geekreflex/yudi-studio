<script>
import { preview } from "../store/store";
</script>

<main class="item">
  <div class="item-name" for="preview">Preview Image</div>
  <div id="preview" class="preview">
    <img class="preview-img" src="{$preview}" alt="Preivew" />
  </div>
</main>

<style>
.preview {
  width: 200px;
  border: 1px solid #555;
  border-radius: 6px;
  min-height: 100px;
  cursor: pointer;
  display: flex;
  overflow: hidden;
}

.preview-img {
  width: 100%;
}
</style>
