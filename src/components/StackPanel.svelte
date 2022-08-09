<script>
import Objects from "./Objects.svelte";
import History from "./History.svelte";
import LayerIcon from "../icons/LayerIcon.svelte";
import HistoryIcon from "../icons/HistoryIcon.svelte";

let activeTab = "Objects";

const tabList = [
  { name: "Objects", icon: LayerIcon },
  { name: "History", icon: HistoryIcon },
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
    {#if activeTab === "Objects"}
      <Objects />
    {/if}

    {#if activeTab === "History"}
      <History />
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

.main {
  width: 100%;
}
</style>
