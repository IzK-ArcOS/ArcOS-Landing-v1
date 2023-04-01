<script lang="ts">
  export let release: GitHubRelease;

  function download() {
    window.open(release.assets[0].browser_download_url);
  }
</script>

<button
  class="material-icons-round"
  on:click={download}
  title="Download {release.tag_name}">download</button
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
