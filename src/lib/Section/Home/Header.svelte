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
    z-index: 0;
  }

  div.center div * {
    z-index: 0;
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

  div.center div h1 {
    opacity: 0;
  }

  div.center div h3 {
    opacity: 0;
  }

  div.center div {
    animation: slide 1s forwards;
    animation-delay: 0.5s;
    padding-top: 80px;
  }

  div.center div h1 {
    animation: fadein 1s forwards;
    animation-delay: 0.9s;
  }

  div.center div img {
    animation: fadein 1s forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  div.center div h3 {
    animation: fadein-half 1s forwards;
    animation-delay: 1.4s;
  }

  @keyframes fadein-half {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.5;
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes slide {
    0% {
      padding-top: 80px;
    }

    100% {
      padding-top: 0;
    }
  }

  @media screen and (max-width: 500px) {
    div.center img {
      height: 180px;
    }

    div.center h1,
    div.center h3 {
      line-height: unset;
    }
    div.center h1 {
      font-size: 30px;
    }

    div.center h3 {
      font-size: 22px;
    }
  }
</style>
