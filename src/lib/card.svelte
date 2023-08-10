<script>
  import data from "../data/data.json";
  export let beds, photo, rating, superHost, title, type;
</script>

<article>
  <div class="image_cover">
    <img src={photo} alt={title} />
  </div>
  <div class="info">
    {#if superHost}
      <b>Super Host</b>
      <strong>
        {type} - {beds} beds
      </strong>
      <p>
        <span class="star">✯</span>
        <span class="rating">{rating}</span>
      </p>
    {:else}
      <strong>{type}</strong>
      <p>
        <span class="star">✯</span>
        <span class="rating">{rating}</span>
      </p>
    {/if}
  </div>
  <div class="description">
    <h2>{title}</h2>
  </div>
</article>

<style>
  article {
    flex: 0 0 clamp(325px, 325px + 5vw, 375px);
  }

  .image_cover {
    border-radius: 15px;
    overflow: hidden;
  }

  .image_cover img {
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: clamp(0.6em, 4vw, 0.9em);
  }

  .star {
    font-size: 1.5em;
    color: #ffd700;
  }

  p {
    margin: 0.7em;
  }

  .description h2 {
    font-size: clamp(0.7em, 5vw, 1.1em);
    margin: 0;
  }
</style>
