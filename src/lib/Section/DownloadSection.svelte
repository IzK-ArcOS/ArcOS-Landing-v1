<script>
  import Section from "../Section.svelte";
  import Content from "./DownloadSection/Content.svelte";
  import Icon from "./DownloadSection/Icon.svelte";
</script>

<Section height={390} gradient className="download-section" id="download">
  <div class="wrapper">
    <Icon />
    <Content />
  </div>
</Section>

<style scoped>
  div.wrapper {
    width: inherit;
    height: inherit;
    padding: 80px;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    div.wrapper {
      padding: 20px;
    }
  }
</style>
