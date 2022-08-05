<script>
import PreviewModal from "./components/PreviewModal.svelte";
import Layout from "./components/Layout.svelte";
import PublishModal from "./components/PublishModal.svelte";
import ResizeModal from "./components/ResizeModal.svelte";
import TemplatesModal from "./components/TemplatesModal.svelte";
</script>

<main>
  <Layout />
  <ResizeModal />
  <TemplatesModal />
  <PublishModal />
  <PreviewModal />
</main>
