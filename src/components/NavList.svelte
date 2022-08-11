<script>
import Paint2 from "../icons/Paint2.svelte";
import FilePlusIcon from "../icons/FilePlusIcon.svelte";
import { filterWidget, shadowStrokeWidget } from "../store/store";

let visible = false;

const onFilterClick = () => {
  visible = false;
  $filterWidget = true;
};

const onSSClick = () => {
  visible = false;
  $shadowStrokeWidget = true;
};
</script>

<main>
  <button class="action-btn" title="New File">
    <FilePlusIcon />
  </button>
  <div class="filters">
    <button
      class="action-btn"
      title="Filters and Shadows"
      on:click="{() => (visible = !visible)}">
      <Paint2 />
    </button>
    <div class:visible class="dropdown">
      <ul>
        <li on:click="{onFilterClick}">Filters</li>
        <li on:click="{onSSClick}">Stroke and Shadow</li>
        <li>Gradient</li>
      </ul>
    </div>
  </div>
</main>

<style>
main {
  display: flex;
  align-items: center;
  margin-right: 50px;
}

.filters {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 50px;
  left: 0;
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
