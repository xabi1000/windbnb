<script>
  export let location = 'Finland',
    available;
</script>

<div class="stays_container">
  <h1>Stays in {location}</h1>

  <div class="available">
    <strong>{available} +</strong>&nbsp;
    <b>stays</b>
  </div>
</div>

<style>
  .stays_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: clamp(1.1em, 5vw, 2.1em);
    margin: 0;
  }
  .available {
    font-size: clamp(0.7em, 5vw, 1.1em);
  }
</style>
