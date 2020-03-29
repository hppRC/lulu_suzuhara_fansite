<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  import Counter from '../components/Counter.svelte';

  let count = 100;
  const test: number = 0;

  onMount(() => {
    console.log('App mounted');
  });
</script>

<style>
  h1,
  figure,
  p {
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    margin: 0 0 0.5em 0;
    font-size: 2.8em;
    font-weight: 700;
    text-transform: uppercase;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
  <img alt="Borat" src="great-success.png" />
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<p>
  <strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong>
</p>

<p>
  <Counter />
  <Counter value={1}>Counter 1</Counter>
  <Counter value={count} step={3}>Counter 2</Counter>
</p>
