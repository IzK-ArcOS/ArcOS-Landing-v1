<script lang="ts">
  import { onMount } from "svelte";
  import { getReleases } from "../../../../ts/fetch";

  let version = "0.0.0";
  let prerelease = false;
  let releases: GitHubRelease[] = [];
  let loaded = true;

  onMount(async () => {
    releases = await getReleases();

    if (!releases.length) return (loaded = false);

    version = releases[0].tag_name;
    prerelease = releases[0].prerelease;
    loaded = true;
  });

  function download() {
    window.open(
      /*  loaded
        ? releases[0].assets[0].browser_download_url */
      "https://github.com/IzK-ArcOS/ArcOS-Frontend/releases"
    );
  }
</script>

<div class="download">
  <button
    class="download"
    on:click={download}
    disabled={!navigator.userAgent.toLowerCase().includes("windows") && loaded}
  >
    <p>
      <!-- {loaded
        ? navigator.userAgent.toLowerCase().includes("windows")
          ? "Download Latest"
          : "Windows Only"
        : "Go to GitHub"} -->
      Go to GitHub
    </p>
  </button>
  <div class="info">
    {#if loaded}
      <p class="version">{version} - {prerelease ? "Uns" : "S"}table</p>
      <div class="dot" />
      <p class="version">Electron</p>
      <!--<a href="https://github.com/IzK-ArcOS/ArcOS-Frontend/releases"
        >Other versions</a
      > -->
    {:else}
      Unable to get releases.
    {/if}
  </div>
</div>

<style scoped>
  div.download {
    min-width: 175px;
    margin: 40px 0;
    margin-left: 50px;
  }

  div.download button {
    width: 100%;
    text-align: left;
    height: 35px;
    position: relative;
    border: none;
    border-radius: 5px;
    color: var(--fg);
    background-color: #fff1;
    padding: 10px;
    transition: all 0.15s;
  }

  div.download button:disabled {
    opacity: 0.4;
  }

  div.download button::after {
    content: "launch";
    font-family: "Material Icons Round";
    font-size: 18px;
    position: absolute;
    right: 9px;
    top: 9px;
  }

  div.download button p {
    margin: 0;
    font-size: 13px;
  }

  div.download button:hover {
    background-color: #fff2;
  }

  div.download button:active {
    opacity: 0.5;
  }

  div.download div.info {
    display: flex;
    font-size: 11px;
    height: 14px;
    opacity: 0.3;
    justify-content: center;
    margin-top: 5px;
  }

  div.download div.info p {
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  div.download div.info a {
    white-space: nowrap;
  }

  div.download div.info div.dot {
    width: 2px;
    height: 2px;
    margin: 6px 5px;
    background-color: var(--fg);
    border-radius: 50%;
  }

  div.download div.info a {
    color: var(--fg);
  }

  @media screen and (max-width: 800px) {
    div.download {
      margin-left: 0;
      text-align: center;
    }

    div.download button {
      width: 175px;
    }
  }
</style>
