<script lang="ts">
  import logo from "../../../assets/logo.png";
</script>

<div class="center">
  <div>
    <img src={logo} alt="" />
    <h1 class="header">An OS... In Svelte?</h1>
    <h3 class="subheader">Welcome to ArcOS.</h3>
  </div>
</div>

<style scoped>
  img {
    height: 200px;
  }

  div.center div {
    text-align: center;
    margin-top: 50px;
  }

  div.center h1 {
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  }

  div.center h3 {
    margin: 0;
    margin-top: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    opacity: 0.5;
  }
</style>
