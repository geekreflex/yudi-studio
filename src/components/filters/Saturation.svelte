<script>
import Switch from "../addons/Switch.svelte";
</script>

<main>
  <div>
    <div class="toggler">
      <span>Saturation:</span>
      <Switch id="saturation" />
    </div>
    <div>
      <input
        type="range"
        id="saturation-value"
        value="0"
        min="-1"
        max="1"
        step="0.003921"
        disabled />
    </div>
  </div>
</main>
