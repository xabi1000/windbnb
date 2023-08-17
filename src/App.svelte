<script>
  import { onMount } from 'svelte';
  import data from './data/data.json';
  // COMPONENETS
  import Header from './lib/header.svelte';
  import Footer from './lib/footer.svelte';
  import Nav from './lib/nav.svelte';
  import Card from './lib/card.svelte';
  import CountryStays from './lib/country-stays.svelte';

  // VARIABLES

  let location = 'Finland',
    guests = 0;
  $: console.log(location);

  // FUNCTIONS

  $: filterData = () => {
    return data.filter(
      ({ city, country, maxGuests }) =>
        (country.toLowerCase().includes(location.toLowerCase()) &&
          maxGuests >= guests) ||
        (city.toLowerCase().includes(location.toLowerCase()) &&
          maxGuests >= guests)
    );
  };

  onMount(() => {
    filterData();
  });
</script>

<Nav bind:location bind:guests {filterData} />
<Header bind:location bind:guests />

<CountryStays {location} available={filterData().length} />
<main>
  <section class="cards_container">
    {#each filterData() as { beds, photo, rating, superHost, title, type }}
      <Card {beds} {photo} {rating} {superHost} {title} {type} />
    {:else}
      <p class="error">
        We are sorry, but at this time we do not have services in: <strong
          >{location.toUpperCase()}</strong
        >.
      </p>
    {/each}
  </section>
</main>

<Footer />

<style>
  main {
    height: 100%;
    position: relative;
  }

  .cards_container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 2.3em;
  }

  .error {
    color: red;
    font-size: 1.3rem;
    text-align: center;
    position: absolute;
    inset: 30% 2rem auto 2rem;
  }
  .error strong {
    color: yellowgreen;
  }
  @media (min-width: 768px) {
    .cards_container {
      justify-content: space-between;
    }

    .error {
      font-size: 2.3rem;
    }
  }
</style>
