<script lang="ts">
  export let gradient = false;
  export let className = "";
  export let id = "";
</script>

<section class:gradient class={className} {id}>
  <slot />
</section>

<style scoped>
  section {
    background-color: var(--bg);
  }

  section.gradient {
    background: var(--gradient);
    border-radius: 20px;
    border-bottom-left-radius: 50% 10vh;
    border-bottom-right-radius: 50% 10vh;
    margin: 20px;
  }

  @media screen and (max-width: 600px) {
    section.gradient {
      margin: 0;
      border-radius: 0;
      border-bottom-left-radius: 50% 5vh;
      border-bottom-right-radius: 50% 5vh;
    }
  }
</style>
