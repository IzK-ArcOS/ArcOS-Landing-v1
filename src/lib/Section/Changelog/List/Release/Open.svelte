<script lang="ts">
  export let release: GitHubRelease;

  function open() {
    window.open(release.html_url, "_blank");
  }
</script>

<button
  class="material-icons-round"
  on:click={open}
  title="Go to releases page of {release.tag_name}">launch</button
>

<style scoped>
  button {
    width: 26px;
    height: 26px;
    border: none;
    padding: 0;
    border-radius: 5px;
    background-color: #222;
    color: var(--fg);
    font-size: 18px;
  }

  button:hover {
    opacity: 0.7;
  }

  button:active {
    opacity: 0.4;
  }
</style>
