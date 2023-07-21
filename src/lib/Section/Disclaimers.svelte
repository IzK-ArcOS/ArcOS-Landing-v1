<script lang="ts">
  import Section from "../Section.svelte";
</script>

<Section id="disclaimers">
  <div>
    <ul>
      <li>
        ArcOS cannot be used as a primary operating system. An attempt to do so
        is discouraged.
      </li>
      <li>
        This is not an actual operating system. It is an environment that runs
        on top of your already existing OS, built using web technologies. It
        isn't possible to install already existing applications from third
        parties. This functionality may be implemented in the distant future.
      </li>
      <li>
        All assets in ArcOS, including those created by the team, belong to
        their respective owners. Reuse without credit is not permitted.
      </li>
      <li>
        The ArcOS team is not responsible for loss of data when using ArcAPI. Do
        not store sensitive info on the File System. ArcAPI passwords are
        encrypted using Argon2.
      </li>
    </ul>
  </div>
</Section>

<style scoped>

  ul {
    max-width: 700px;
    opacity: 0.5;
    font-size: 11px;
    padding-left: 20px;
  }

  ul li {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 800px) {
    ul {
      max-width: unset;
      margin-bottom: 10px;
    }
  }
</style>
