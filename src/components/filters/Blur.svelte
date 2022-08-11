<script>
import Switch from "../addons/Switch.svelte";
</script>

<main>
  <div>
    <div class="toggler">
      <span>Blur:</span>
      <Switch id="blur" />
    </div>

    <div>
      <input
        type="range"
        id="blur-value"
        value="0.1"
        min="0"
        max="1"
        step="0.01"
        disabled />
    </div>
  </div>
</main>

<style>
</style>
