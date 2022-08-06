<script>
import Layers from "./Layers.svelte";
import History from "./History.svelte";
import LayerIcon from "../icons/LayerIcon.svelte";

let activeTab = "History";

const tabList = [
  { name: "Layers", icon: LayerIcon },
  { name: "History", icon: LayerIcon },
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
    {#if activeTab === "Layers"}
      <Layers />
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
.tablist {
  display: flex;
  position: relative;
}

.tab {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 5px;
  background-color: #08080a;
  margin-right: 5px;
  font-size: 14px;
  cursor: pointer;
}

.activeTab {
  border: 1px solid #444;
  border-bottom: none;
  position: relative;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  background-color: #111;
}

.activeTab:after {
  width: 100%;
  position: absolute;
  bottom: -1px;
  height: 1px;
  background-color: #111;
  content: "";
}

.main {
  border: 1px solid #444;
  flex: 1;
}

#tab-name {
  margin-left: 10px;
}
</style>
