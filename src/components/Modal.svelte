<script>
export let visible;
export let close;
export let title;
</script>

<main class:visible>
  <div class="overlay" on:click="{close}"></div>
  <div class="main">
    <nav class="header">
      <div class="title">{title}</div>
    </nav>
    <div class="children">
      <slot />
    </div>
  </div>
</main>

<style>
.visible {
  display: flex;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
}

main {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
}

.main {
  position: relative;
  background-color: #08080a;
  border: 1px solid #555;
  border-radius: 10px;
  max-width: 800px;
}

.children {
  overflow-y: auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid #555;
}

.title {
  font-size: 25px;
  color: #fff;
}
</style>
