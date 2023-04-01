<script lang="ts">
  let version = "0.0.0";
  let prerelease = false;
</script>

<div class="download">
  <button class="download">
    <p>Download Latest</p>
  </button>
  <div class="info">
    <p class="version">{version} - {prerelease ? "Uns" : "S"}table</p>
    <div class="dot" />
    <a href="https://github.com/IzK-ArcOS/ArcOS-Frontend/releases"
      >Other versions</a
    >
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

  div.download button::after {
    content: "download";
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
</style>
