<script lang="ts">
  export let release: GitHubRelease;
</script>

<div class="release-status" class:pre={release.prerelease}>
  {release.prerelease ? "Pre-release" : "Stable"}
</div>

<style scoped>
  div.release-status {
    padding: 0 8px;
    line-height: 26px;
    height: 26px;
    background-color: #283e28;
    border-radius: 5px;
    color: #abffa6;
  }

  div.release-status.pre {
    background-color: #543d1b;
    color: #ffad32;
  }
</style>
