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
    <h1 class="title">
      <span>
        {release.tag_name}
      </span>
      <div class="items">
        <Open {release} /><!-- 
        <Download {release} /> -->

        <Tag {release} />
        <Status {release} />
      </div>
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
    height: 90px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: linear-gradient(to bottom, transparent 40%, #151515 90%);
    pointer-events: none;
  }
  div.release h1 {
    margin: 0;
    margin-bottom: 10px;
    display: flex;
  }

  div.release h1 span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  div.release h1 div.items {
    margin-left: auto;
    display: flex;
    gap: 5px;
    font-style: normal;
    font-size: 16px;
    font-weight: normal;
    padding-left: 10px;
  }

  @media screen and (max-width: 800px) {
    div.release {
      margin-bottom: 10px;
    }
  }
</style>
