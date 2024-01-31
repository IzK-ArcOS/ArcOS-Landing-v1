<script>
  import Section from "../Section.svelte";
</script>

<Section id="about">
  <div class="center">
    <div>
      <h1 class="header">About</h1>
      <h3 class="subheader">What even is ArcOS?</h3>
      <p class="context">
        ArcOS is an Operating System Environment built using web technologies.
        With ArcOS we aim to create the best OS experience you can get using web
        development. With over 10 repositories and more lines of code than I can
        count, ArcOS is the biggest project I have ever taken on, and there are
        few things quite like it.
        <br />
        <br />
        I often tell people; "Just like Windows used to run on top of MS-DOS, ArcOS
        runs on top of your operating system"
      </p>
      <a href="https://github.com/IzK-ArcOS" class="github">Visit our GitHub</a>
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
    margin-top: 0px;
  }

  p.context {
    max-width: 700px;
    margin-bottom: 50px;
  }
  a.github {
    display: block;
    margin: 0 auto;
    color: var(--fg);
    background-color: #222;
    width: fit-content;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    margin-bottom: 80px;
  }

  a.github::after {
    content: "launch";
    font-family: "Material Icons Round";
    font-size: 18px;
    margin-left: 10px;
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

    p.context {
      max-width: unset;
      padding: 20px;
      margin-bottom: 10px;
    }
  }
</style>
