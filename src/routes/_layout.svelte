<script>
  import { stores } from "@sapper/app";
  const { preloading, page } = stores();
</script>

<style>
  main {
    padding: 20px;
  }
  main.root {
    padding: 40px;
  }
</style>

<main class:root={$page.path == `/`}>
  <slot />
</main>
