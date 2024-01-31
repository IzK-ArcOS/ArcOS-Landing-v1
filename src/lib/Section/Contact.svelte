<script lang="ts">
  import discord from "../../assets/discord.png";
  import github from "../../assets/github.png";
  import Section from "../Section.svelte";
</script>

<Section id="contact">
  <div class="center">
    <div>
      <h1 class="header">Contact</h1>
      <h3 class="subheader">Want to get in touch?</h3>
      <div class="places">
        <a
          class="place discord"
          title="Join our Discord server"
          href="https://discord.gg/S3fTadu88C"
        >
          <img src={discord} alt="" />
        </a>
        <a
          class="place"
          title="Go to our GitHub"
          href="https://github.com/IzK-ArcOS"
        >
          <img src={github} alt="" />
        </a>
        <a
          class="place"
          title="Send us an E-mail"
          href="mailto:izaak@arcapi.nl"
        >
          <span class="material-icons-round">email</span>
        </a>
      </div>
    </div>
  </div>
</Section>

<style scoped>
  h1.header {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    margin: 0;
    margin-top: 50px;
    text-align: center;
  }

  h3.subheader {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    opacity: 0.5;
    margin: 0;
    margin-top: 10px;
    text-align: center;
  }
  div.center {
    margin-top: 30px;
  }

  div.places {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 60px 0;
  }

  div.places a {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    display: block;
    height: 28px;
  }

  div.places a img {
    width: 28px;
  }

  div.places a.discord img {
    margin-top: 3px;
  }
  div.places a span.material-icons-round {
    font-size: 28px;
    color: #fff;
  }

  div.places a:hover {
    opacity: 0.7;
  }

  div.places a:active {
    opacity: 0.4;
  }

  @media screen and (max-width: 800px) {
    h1.header {
      font-size: 28px;
    }

    h3.subheader {
      font-size: 16px;
      margin: 0px 15px;
      margin-bottom: 0;
    }

    div.places {
      margin-top: 30px;
    }

    div.center {
      margin: 0;
    }
  }
</style>
