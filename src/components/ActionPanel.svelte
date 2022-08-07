<script>
import { selectedObj } from "../store/store";
import ToolsIcon from "../icons/ToolsIcon.svelte";
import ToolOptions from "./ToolOptions.svelte";
import CubeIcon from "../icons/CubeIcon.svelte";

let activeTab = "Tool Options";

const tabList = [
  { name: "Tool Options", icon: ToolsIcon },
  { name: "Patterns", icon: CubeIcon },
];

const onTabClick = (name) => {
  activeTab = name;
};
</script>

<main>
  <div class="tablist">
    {#each tabList as tab}
      <div
        class="tab"
        class:activeTab="{tab.name === activeTab}"
        on:click="{() => onTabClick(tab.name)}">
        <span id="tab-icon"><svelte:component this="{tab.icon}" /></span>
        <span id="tab-name">{tab.name}</span>
      </div>
    {/each}
  </div>
  <div class="main">
    {#if activeTab === "Tool Options"}
      <ToolOptions />
    {/if}

    {#if activeTab === "Patters"}
      <div>Patterns</div>
    {/if}
  </div>
</main>

<style>
main {
  padding: 3px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
