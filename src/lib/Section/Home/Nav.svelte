<script lang="ts">
  import logo from "../../../assets/logo.png";
  import { links } from "../../../ts/page";
  import Burger from "./Nav/Burger.svelte";
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
  <Burger />
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

  div.nav div.logo img {
    width: 30px;
    height: 30px;
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
    text-decoration: none;
    color: var(--fg);
  }

  div.nav div.pages a + a {
    margin-left: 20px;
  }

  div.nav div.pages a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 700px) {
    div.nav div.pages {
      display: none;
    }
    div.nav div.sep {
      display: none;
    }

    div.nav {
      padding: 20px 30px;
    }
  }
</style>
