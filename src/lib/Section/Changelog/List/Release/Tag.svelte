<script lang="ts">
  export let release: GitHubRelease;
</script>

<div class="tag">
  <span class="material-icons-round">local_offer</span>{release.tag_name}
</div>

<style scoped>
  div.tag {
    display: flex;
    line-height: 18px;
    padding: 5px 6px;
    background-color: #222;
    border-radius: 5px;
  }

  div.tag span.material-icons-round {
    font-size: 18px;
    margin-right: 5px;
  }
</style>
