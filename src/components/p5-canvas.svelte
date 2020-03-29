<script>
  export let id;
  export let sketch;
  import { onMount } from 'svelte';

  let p5;

  onMount(async () => {
    p5 = (await import('./p5.min')).default;
    let myp5 = new p5(sketch, id);
  });
</script>

<style>

</style>

<div {id} />
