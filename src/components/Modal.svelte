<script>
export let visible;
export let close;
export let title;
</script>

<main class:visible>
  <div class="overlay" on:click="{close}"></div>
  <div class="modal-main">
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

.modal-main {
  position: relative;
  background-color: #111;
  border: 1px solid #555;
  border-radius: 10px;
  min-width: 300px;
  max-width: 900px;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.5);
}

.children {
  overflow-y: auto;
  padding: 20px;
  color: #fff;
}

.header {
  display: flex;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid #555;
}

.title {
  font-size: 20px;
  color: #fff;
  font-weight: 600;
}
</style>
