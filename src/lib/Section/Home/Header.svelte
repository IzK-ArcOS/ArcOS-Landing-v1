<script lang="ts">
  import logo from "../../../assets/logo.png";
</script>

<div class="center">
  <div>
    <img src={logo} alt="" />
    <h1 class="header">An OS... In Svelte?</h1>
    <h3 class="subheader">
      <span>Welcome to ArcOS.</span>
    </h3>
    <div class="container">
      <a href="#download" class="download">Download</a>
      <a href="https://web.izk-arcos.nl" class="try">Try in your browser</a>
    </div>
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
    opacity: 1;
    color: #586e86;
    text-align: center;
  }

  div.center h3 > * {
    display: block;
    margin: 0 auto;
  }

  div.center div.container {
    display: flex;
  }

  a {
    margin: 0 auto;
    color: var(--fg);
    width: fit-content;
    padding: 10px 15px;
    text-decoration: none;
    font-size: 14px;
    line-height: 18px;
    align-items: center;
    display: flex;
    margin-top: 0px;
    border-radius: 5px;
  }
  
  .download {
    justify-content: center;
    background-color: var(--gradient-end);
    flex: 1;
    margin-right: 20px;
  }

  .try {
    border: 2px solid var(--gradient-end);
  }


  .download::after {
    content: "download";
    font-family: "Material Icons Round";
    font-size: 20px;
    margin-left: 10px;
  }

  .try::after {
    content: "launch";
    font-family: "Material Icons Round";
    font-size: 20px;
    margin-left: 10px;
  }

  div.center div h1 {
    opacity: 0;
  }

  div.center div h3 {
    opacity: 0;
  }

  div.center div div.container {
    opacity: 0;
  }

  div.center div {
    animation: slide 1s forwards;
    animation-delay: 0.5s;
    padding-top: 80px;
  }
  
  div.center div div.container {
    padding-top: 0px;
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
    animation: fadein 1s forwards;
    animation-delay: 1.4s;
  }

  div.center div div.container {
    animation: fadein 1s forwards;
    animation-delay: 1.4s;
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
