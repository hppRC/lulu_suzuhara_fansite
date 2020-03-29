<script>
  import Canvas from '../components/p5-canvas.svelte';
  import sketch from '../sketch/test';
</script>

<style lang="scss">
  div :global(canvas) {
    position: fixed;
    top: 0;
    left: 0;
  }
</style>

<Canvas {sketch} id="id" />
