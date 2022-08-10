<script>
import Switch from "../addons/Switch.svelte";
let visible;

const onSwitch = (e) => {
  visible = e.target.checked;
};
</script>

<main>
  <div class="toggler">
    <div>Shadow</div>
    <Switch onSwitch="{onSwitch}" checked="{false}" />
  </div>
  <div class:visible class="main">Shadow comp</div>
</main>

<style>
main {
  width: 100%;
}
.toggler {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main {
  display: none;
}

.visible {
  display: flex;
}
</style>
