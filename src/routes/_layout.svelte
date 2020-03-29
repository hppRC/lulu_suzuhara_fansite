<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style lang="scss">
  main {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
</style>

<main>
  <slot />
</main>
