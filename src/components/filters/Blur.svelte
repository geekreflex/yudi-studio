<script>
import Switch from "../addons/Switch.svelte";

let value = false;

const onSwitch = (e) => {
  value = e.target.checked;
};
</script>

<main>
  <div>
    <div class="toggler">
      <span>Blur:</span>
      <Switch id="blur" value="{value}" onSwitch="{onSwitch}" />
    </div>

    <div>
      <input
        class:value
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
input {
  opacity: 0.5;
  pointer-events: none;
}
.value {
  opacity: 1;
  pointer-events: visible;
}
</style>
