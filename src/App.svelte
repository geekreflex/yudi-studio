<script>
import PreviewModal from "./components/PreviewModal.svelte";
import Layout from "./components/Layout.svelte";
import PublishModal from "./components/PublishModal.svelte";
import TemplatesModal from "./components/TemplatesModal.svelte";
import ColorWidget from "./components/widgets/ColorWidget.svelte";
import SkewWidget from "./components/widgets/SkewWidget.svelte";
</script>

<main>
  <Layout />
  <TemplatesModal />
  <PublishModal />
  <PreviewModal />
  <ColorWidget />
  <SkewWidget />
</main>
