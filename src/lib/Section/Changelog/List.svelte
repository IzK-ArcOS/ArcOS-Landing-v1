<script lang="ts">
  import { onMount } from "svelte";
  import { getReleases } from "../../../ts/fetch";
  import Release from "./List/Release.svelte";

  let releases: GitHubRelease[] = [];

  onMount(async () => {
    releases = await getReleases();
  });
</script>

<div class="list">
  {#each releases as release}
    <Release {release} />
  {/each}
</div>

<style scoped>
  div.list {
    width: 700px;
    height: 300px;
    border: #222 1px solid;
    border-radius: 10px;
    margin-top: 50px;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 20px;
  }
</style>
