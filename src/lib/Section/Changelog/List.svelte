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
  {#if releases && releases.length}
    {#each releases as release}
      <Release {release} />
    {/each}
  {:else}
    <div class="fail">
      <span class="material-icons-round">error</span>
      <p>
        Couldn't get the releases! You may be rate limited by GitHub. To see the
        logs, please visit the releases page.
      </p>
      <button>Go to releases</button>
    </div>
  {/if}
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

  @media screen and (max-width: 800px) {
    div.list {
      width: calc(100% - 40px);
      margin: 50px 20px;
      box-sizing: border-box;
    }
  }

  div.fail {
    text-align: center;
  }

  div.fail * {
    display: block;
    max-width: 50%;
    width: fit-content;
    margin: 0 auto;
  }

  div.fail span.material-icons-round {
    font-size: 40px;
    margin: 15px auto;
  }

  div.fail button {
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    background-color: #222;
    color: var(--fg);
  }

  div.fail button:hover {
    opacity: 0.7;
  }

  div.fail button:active {
    opacity: 0.4;
  }

  div.fail p {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    div.list {
      width: calc(100% - 10px);
      margin: 50px 5px;
      box-sizing: border-box;
      padding: 10px;
      border: none;
      margin-top: 30px;
      margin-bottom: 0;
    }

    div.list div.fail p {
      min-width: 100%;
    }
  }
</style>
