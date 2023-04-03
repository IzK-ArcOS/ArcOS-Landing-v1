<script lang="ts">
  import { onMount } from "svelte";
  import Menu from "./Burger/Menu.svelte";

  let opened = false;

  function toggle() {
    opened = !opened;
  }

  onMount(() => {
    document.addEventListener("scroll", () => {
      opened = false;
    });
  });
</script>

<button class="burger material-icons-round" on:click={toggle}>menu</button>
<Menu bind:opened />

<style scoped>
  button.burger {
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    color: var(--fg);
    display: none;
    margin-left: auto;
  }

  button.burger:active {
    opacity: 0.4;
  }

  @media screen and (max-width: 700px) {
    button.burger {
      display: block;
    }
  }
</style>
