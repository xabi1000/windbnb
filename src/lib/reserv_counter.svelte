<script>
  export let guests;
  let children = 0;
  let adults = guests;

  $: total = adults + children;
  $: guests = total;

  const increment = (target) => {
    if (target === "adults") adults++;
    if (target === "children") children++;
  };

  const decrement = (target) => {
    if (target === "adults" && adults > 0) adults--;
    if (target === "children" && children > 0) children--;
  };
</script>

<div class="counters_container">
  <div class="counter">
    <strong>Adults</strong>
    <p>Ages 13 or above</p>
    <div class="btn_container">
      <button on:click={() => decrement("adults")}>₋</button>
      <span>{adults}</span>
      <button on:click={() => increment("adults")}>+</button>
    </div>
  </div>

  <div class="counter">
    <strong>Children</strong>
    <p>Ages 2 - 12</p>
    <div class="btn_container">
      <button on:click={() => decrement("children")}>₋</button>
      <span>{children}</span>
      <button on:click={() => increment("children")}>+</button>
    </div>
  </div>
</div>

<style>
  .counters_container {
    padding-left: 1em;
    display: grid;
    gap: 2em;
  }

  .counters_container * {
    margin: 0;
  }

  .counters_container .counter {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    align-items: center;
    justify-content: center;
  }

  .btn_container {
    display: flex;
    gap: 0.9em;
    align-items: center;
  }
  button {
    outline: 1px solid var(--light);
    padding: 0.9rem;
    border-radius: 5px;
    font-size: 1.1rem;
  }
  button:focus,
  button:hover {
    outline: 1px solid #ffd700;
    color: #26077c;
  }
</style>
