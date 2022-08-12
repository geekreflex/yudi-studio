<script>
import Paint2 from "../icons/Paint2.svelte";
import { filterWidget, shadowStrokeWidget } from "../store/store";
import { onSkewWidget } from "../functions/clickFunctions";

let visible = false;

const onFilterClick = () => {
  visible = false;
  $filterWidget = true;
};

const onSSClick = () => {
  visible = false;
  $shadowStrokeWidget = true;
};

const onSkewClick = () => {
  visible = false;
  onSkewWidget(true);
};
</script>

<main>
  <div class="filters">
    <button
      class="add-tool"
      title="Filters and Shadows"
      on:click="{() => (visible = !visible)}">
      <Paint2 />
    </button>
    <div class:visible class="dropdown">
      <ul>
        <li on:click="{onFilterClick}">Filters</li>
        <li on:click="{onSSClick}">Stroke and Shadow</li>
        <li on:click="{onSkewClick}">Skew</li>
      </ul>
    </div>
  </div>
</main>

<style>
button {
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  height: 48px;
  width: 50px;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  opacity: 0.5;
}

.dropdown {
  position: fixed;
  top: 100px;
  left: 100px;
  color: #fff;
  z-index: 9999;
  background-color: #222;
  width: 300px;
  border-radius: 6px;
  padding: 10px 0;
  cursor: pointer;
  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.4);
  display: none;
}

.visible {
  display: block;
}

ul,
li {
  list-style: none;
}

li {
  padding: 5px 20px;
}

li:hover {
  background-color: #333;
}
</style>
