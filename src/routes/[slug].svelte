<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  .content :global(h2) {
    margin: 0px;
  }
  .content :global(h1) {
    margin: 0px;
  }
  .content :global(pre) {
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  .content :global(blockquote) {
    border-left: 3px solid white;
    margin: 0px;
    padding: 5px 30px;
    font-style: italic;
  }
  .content :global(blockquote p:first-child) {
    margin-top: 0px;
  }
  .content :global(blockquote p:first-child) {
    margin-bottom: 0px;
  }
  .content {
    width: 100%;
    max-width: 700px;
  }
  .content :global(a) {
    text-decoration: none;
    font-style: italic;
    color: rgba(0, 0, 0, 0.6);
  }
</style>

<svelte:head>
  <title>{post.data.heading}</title>
</svelte:head>

<h1>{post.data.heading}</h1>

<div class="content">
  {@html post.content}
</div>
