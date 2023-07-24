<script lang="ts">
  export let release: GitHubRelease;
</script>

<div class="tag" title={release.tag_name}>
  <span class="material-icons-round">local_offer</span>
  <p>{release.tag_name}</p>
</div>

<style scoped>
  div.tag {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 18px;
    padding: 0 6px;
    height: 26px;
    background-color: #222;
    border-radius: 5px;
    box-sizing: border-box;
    max-width: 80px;
  }

  p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  div.tag span.material-icons-round {
    font-size: 16px;
    margin-right: 5px;
  }
</style>
