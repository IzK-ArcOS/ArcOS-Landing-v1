<script lang="ts">
  export let gradient = false;
  export let height = 390;
  export let className = "";
  export let id = "";
</script>

<section class:gradient style="height: {height}px;" class={className} {id}>
  <slot />
</section>

<style scoped>
  section {
    background-color: var(--bg);
  }

  section.gradient {
    background: var(--gradient);
  }
</style>
