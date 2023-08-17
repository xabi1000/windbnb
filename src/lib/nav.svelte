<script>
  import { menuStore } from '../strores/toggle_menu.js';
  import ReservCounter from './reserv_counter.svelte';
  export let location, guests, filterData;

  let focusedTEXT = false;
  let focusedNUMBER = false;

  const handleFocusInput = (e) => {
    e.target.closest('#inputText')
      ? (focusedTEXT = true)
      : (focusedTEXT = false);

    e.target.closest('#inputNumber')
      ? (focusedNUMBER = true)
      : (focusedNUMBER = false);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<aside
  class="aside"
  class:translate={$menuStore}
  on:click={(e) => handleFocusInput(e)}
>
  <header>
    <h2>Edit Your Search</h2>
    <button>Ⓧ</button>
  </header>

  <form on:submit|preventDefault>
    <ul class="ul_input_text" id="inputText">
      <li>
        <label for="location">
          <input
            type="text"
            id="location"
            name="location"
            placeholder="🏁 Location"
            autocomplete="off"
            bind:value={location}
          />
        </label>
      </li>
      {#if focusedTEXT}
        <li class="overflow">
          <ul>
            {#each filterData() as { country, city }}
              <li class="housing_options">
                <span>🏁</span><strong>{city}, {country}</strong>
              </li>
            {/each}
          </ul>
        </li>
      {/if}
    </ul>

    <ul class="ul_input_text" id="inputNumber">
      <li>
        <label for="guests">
          <input
            type="number"
            id="guests"
            name="guests"
            placeholder="👨‍👩‍👦‍👦 Guests"
            autocomplete="off"
            bind:value={guests}
          />
        </label>
      </li>
      {#if focusedNUMBER}
        <li>
          <ReservCounter bind:guests />
        </li>
      {/if}
    </ul>

    <ul class="ul_input_button">
      <li>
        <input
          type="button"
          value="🔍 Search"
          on:click={() => menuStore.toggleMenu()}
        />
      </li>
    </ul>
  </form>
</aside>

<style>
  aside {
    position: fixed;
    inset: 0;
    height: 85vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr;
    align-content: start;
    align-items: start;
    gap: 1.5em;
    background-color: #213547f2;
    padding: 2em 1.5em;
    transform: translateY(-100%);
    transition: transform 2s ease-in-out;
    z-index: 100;
  }

  .translate {
    transform: translateY(0);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9em;
    min-width: 100%;
  }

  header h2 {
    margin: 0;
    font-size: 0.9rem;
  }

  header button {
    font-size: 2em;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.1em;
    height: 100%;
  }

  form ul {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  ul {
    padding: 1em;
  }

  form input {
    padding: 1em;
    outline: 1px solid var(--label-color);
  }

  form input:focus {
    color: #26077c;
    outline: 1px solid #ffd700;
  }

  form input[type='number'],
  form input[type='text'] {
    width: 100%;
  }

  .ul_input_text {
    max-height: 70vh;
  }

  .ul_input_button {
    margin-top: auto;
  }

  .overflow {
    overflow-y: scroll;
  }

  .overflow::-webkit-scrollbar {
    width: 7px;
  }

  .overflow::-webkit-scrollbar-track {
    background-color: var(--footer-color);
  }

  .overflow::-webkit-scrollbar-thumb {
    background-color: var(--dark);
    border-radius: 5px;
  }

  .overflow::-webkit-scrollbar-thumb:hover {
    background-color: var(--light);
  }

  .housing_options {
    font-size: 1.1em;
  }

  /* *******************MEDIA QUERIES******************* */

  @media (min-width: 768px) {
    header {
      display: none;
    }

    aside {
      grid-template-columns: 1fr;
    }

    form {
      display: grid;
      grid-template-columns: 3fr 3fr 1fr;
      grid-template-rows: 75vh;
    }

    .ul_input_button {
      margin-top: inherit;
    }
  }
</style>
