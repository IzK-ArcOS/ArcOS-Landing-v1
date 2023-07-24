<script lang="ts">
  import screenshot from "../../assets/screenshot.png";
</script>

<div id="screenshot">
  <img src={screenshot} alt="" />
</div>

<style scoped>
  img {
    width: calc(100% - 20%);
    margin: 80px 10%;
    border-radius: 1vw;
    margin-top: -25vh;
  }

  @media screen and (max-width: 800px) {
    img {
      margin: 10%;
    }
  }
</style>
