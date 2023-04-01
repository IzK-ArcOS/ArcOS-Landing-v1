<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import Download from "./Release/Download.svelte";
  import Open from "./Release/Open.svelte";
  import Status from "./Release/Status.svelte";
  import Tag from "./Release/Tag.svelte";
  export let release: GitHubRelease;

  function open() {
    window.open(release.html_url, "_blank");
  }
</script>

{#if release}
  <div class="release">
    <div class="items">
      <Open {release} />
      <Download {release} />
      <!-- 
      <Tag {release} /> -->
      <Status {release} />
    </div>
    <h1 class="title">
      {release.tag_name}
    </h1>
    <SvelteMarkdown source={release.body} />
  </div>
{/if}

<style scoped>
  div.release {
    background-color: #151515;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 15px;
    height: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
    position: relative;
  }

  div.release::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 80px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: linear-gradient(to bottom, transparent 40%, #151515 95%);
    pointer-events: none;
  }
  div.release h1 {
    margin: 0;
    margin-bottom: 10px;
  }

  div.release div.items {
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    height: 26px;
    gap: 5px;
  }
</style>
