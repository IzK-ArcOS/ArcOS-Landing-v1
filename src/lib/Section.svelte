<script lang="ts">
  export let gradient = false;
  export let height = 390;
</script>

<section class:gradient style="height: {height}px;">
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
