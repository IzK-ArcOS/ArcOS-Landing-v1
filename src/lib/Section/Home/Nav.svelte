<script lang="ts">
  import logo from "../../../assets/logo.png";

  const links = {
    download: "Download",
    changelog: "Changelog",
    contact: "Contact",
  };
</script>

<div class="nav">
  <div class="logo">
    <img src={logo} alt="" />
    <p>ArcOS</p>
  </div>
  <div class="sep" />
  <div class="pages">
    {#each Object.entries(links) as link}
      <a href="#{link[0]}">{link[1]}</a>
    {/each}
  </div>
</div>

<style scoped>
  div.nav {
    width: 100%;
    height: 70px;
    padding: 20px 60px;
    box-sizing: border-box;
    display: flex;
    line-height: 30px;
    overflow: hidden;
  }

  div.nav div.logo {
    display: flex;
  }

  div.nav div.logo p {
    margin: 0;
    margin-left: 10px;
    font-weight: bold;
  }

  div.nav div.sep {
    min-width: 1px;
    height: 20px;
    margin: 5px 15px;
    background-color: #cccccc1a;
  }

  div.nav div.pages a {
    margin: 0;
    margin-right: 20px;
    text-decoration: none;
    color: var(--fg);
  }

  div.nav div.pages a:hover {
    text-decoration: underline;
  }
</style>
