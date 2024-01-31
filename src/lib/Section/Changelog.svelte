<script>
  import Section from "../Section.svelte";
  import List from "./Changelog/List.svelte";
</script>

<Section id="changelog">
  <div class="center">
    <div>
      <h1 class="header">Changelog</h1>
      <h3 class="subheader">What's happening?</h3>
      <List />
    </div>
  </div>
</Section>

<style scoped>
  h1.header {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    margin: 0;
    text-align: center;
  }

  h3.subheader {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    opacity: 0.5;
    margin: 0;
    margin-top: 10px;
    text-align: center;
  }
  div.center {
    margin-top: 80px;
  }

  @media screen and (max-width: 800px) {
    h1.header {
      font-size: 28px;
    }

    h3.subheader {
      font-size: 16px;
      margin: 0px 15px;
      margin-bottom: 0;
    }

    div.center {
      margin-top: 40px;
    }
  }
</style>
