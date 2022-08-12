<script>
import Layout from "./components/Layout.svelte";
import PublishModal from "./components/PublishModal.svelte";
import TemplatesModal from "./components/TemplatesModal.svelte";
import SkewWidget from "./components/widgets/SkewWidget.svelte";
import ResizeWidget from "./components/widgets/ResizeWidget.svelte";
import TextWidget from "./components/widgets/TextWidget.svelte";
import UnfinishedModal from "./components/UnfinishedModal.svelte";
import FilterWidget from "./components/widgets/FilterWidget.svelte";
import ShadowStrokeWidget from "./components/widgets/ShadowStrokeWidget.svelte";
import DownloadWidget from "./components/widgets/DownloadWidget.svelte";

import { filterWidget, shadowStrokeWidget } from "./store/store";
</script>

<main>
  <Layout />
  <TemplatesModal />
  <PublishModal />
  <SkewWidget />
  <ResizeWidget />
  <TextWidget />
  <UnfinishedModal />
  <svelte:component this="{$filterWidget && FilterWidget}" />
  <svelte:component this="{$shadowStrokeWidget && ShadowStrokeWidget}" />
  <DownloadWidget />
</main>
