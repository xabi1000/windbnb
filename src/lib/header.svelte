<script>
  export let location, guests;
  import logo from "../assets/logo.svg";
  import HeaderSearch from "./header-search.svelte";
</script>

<header>
  <div class="logo_container">
    <img src={logo} alt="logo" />
  </div>
  <HeaderSearch bind:location bind:guests />
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
  }

  .logo_container {
    align-self: flex-start;
  }

  .logo_container img {
    width: 9em;
  }

  @media (min-width: 768px) {
    header {
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;
    }

    .logo_container {
      align-self: initial;
    }
  }
</style>
