<script>
  import Download from "./Content/Download.svelte";
  import Info from "./Content/Info.svelte";
</script>

<div class="content">
  <Info />
  <Download />
</div>

<style scoped>
  div.content {
    width: 640px;
    height: 230px;
    background-color: rgba(255, 255, 255, 0.04);
    border-radius: 20px;
    text-align: left;
    padding: 40px;
    box-sizing: border-box;
    display: flex;
  }

  @media screen and (max-width: 800px) {
    div.content {
      flex-direction: column;
      width: 100%;
      height: unset;
      padding: 40px 20px;
      background-color: transparent;
    }
  }
</style>
