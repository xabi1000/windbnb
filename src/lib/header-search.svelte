<script>
  import { menuStore } from "../strores/toggle_menu.js";
  export let location, guests;
</script>

<form on:submit|preventDefault>
  <label for="location">
    <input
      bind:value={location}
      type="text"
      id="location"
      placeholder="Helsinki, Finland"
      autocomplete="off"
    />
  </label>
  <label for="guests">
    <input
      bind:value={guests}
      type="number"
      id="guests"
      placeholder="Add Guests"
      autocomplete="off"
    />
  </label>
  <input
    type="button"
    id="search"
    name="search"
    value="🔍"
    on:click={() => menuStore.toggleMenu()}
  />
</form>

<style>
  form {
    display: grid;
    grid-template-columns: 43% 43% 1fr;
    gap: 1px;
    width: 325px;
    height: 3.3rem;
    border: 1px solid #ccc;
    background-color: var(--label-color);
    border-radius: 9px;
    box-shadow: 0px 1px 9px 1px #15092c45;
    overflow: hidden;
    font-size: 0.9em;
    align-self: center;
  }

  form * {
    background-color: var(--dark);
    color: var(--light);
    display: inline-block;
    height: 100%;
    max-width: 100%;
    text-align: start;
  }

  input[type="number"],
  input[type="text"] {
    padding-left: 0.5rem;
  }

  input[type="button"] {
    text-align: center;
  }

  input[type="button"]:focus {
    background-color: hsla(260, 91%, 17%, 0.7);
  }

  /* MEDIA QUERIES */

  @media (min-width: 768px) {
    form {
      align-self: initial;
    }
  }
</style>
