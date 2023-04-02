<script lang="ts">
  import { links } from "../../../../../ts/page";

  export let opened = false;

  function click() {
    opened = false;
  }
</script>

<div class="menu" class:opened>
  {#each Object.entries(links) as page}
    <a href="#{page[0]}" on:click={click}>{page[1]}</a>
  {/each}
</div>

<style scoped>
  div.menu {
    position: fixed;
    top: 70px;
    left: 20px;
    width: calc(100% - 40px);
    border-radius: 10px;
    background-color: var(--bg);
    opacity: 0;
    visibility: hidden;
    padding: 20px 25px;
    box-sizing: border-box;
    border: #333 1px solid;
  }

  div.menu * {
    pointer-events: none;
  }

  div.menu.opened {
    opacity: 1;
    visibility: visible;
  }

  div.menu.opened * {
    pointer-events: initial;
  }

  div.menu a {
    display: flex;
    text-decoration: none;
    color: var(--fg);
    width: 100%;
  }

  div.menu a + a {
    margin-top: 5px;
  }

  div.menu a::after {
    content: "arrow_forward_ios";
    font-family: "Material Icons Round";
    font-size: 18px;
    margin-left: auto;
  }

  @media screen and (min-width: 700px) {
    div.menu {
      display: none;
    }
  }
</style>
