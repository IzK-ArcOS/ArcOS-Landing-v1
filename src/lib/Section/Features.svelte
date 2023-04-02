<script>
  import Section from "../Section.svelte";
  import Customization from "./Features/Customization.svelte";
  import Filesystem from "./Features/Filesystem.svelte";
  import Messaging from "./Features/Messaging.svelte";
</script>

<Section height={900} id="features">
  <div class="center">
    <div>
      <Customization />
      <Messaging />
      <Filesystem />
    </div>
  </div>
</Section>
