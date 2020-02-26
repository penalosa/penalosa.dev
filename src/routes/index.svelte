<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`articles.json`)
      .then(r => r.json())
      .then(articles => {
        return { articles };
      });
  }
</script>

<script>
  export let articles;
</script>

<style>
  h1 {
    margin: 0px;
    font-size: 12vw;
    font-weight: normal;
  }
  h2 {
    margin: 0px;
    font-size: 1.2em;
  }
  p,
  .article {
    width: 73vw;
    max-width: 900px;
    margin: 0px;
  }
  @media (max-width: 600px) {
    p,
    .article {
      width: 100%;
    }
  }
  @media (min-width: 1000px) {
    p,
    .article {
      font-size: 21px;
    }
  }
  @media (min-width: 1233px) {
    h1 {
      font-size: 148px;
    }
  }
  .article {
    display: block;
    text-decoration: none;
    color: white;
    border-left: 2px solid white;
    padding: 5px 15px;
    margin: 20px 0px;
  }
  .article:first-of-type {
    margin-top: 40px;
  }
  .article:hover {
    background: rgba(255, 255, 255, 0.1);
  }
</style>

<svelte:head>
  <title>Samuel Macleod</title>
</svelte:head>

<h1>Hi, I'm Samuel</h1>

<p>
  It’s nice to meet you! I’m a student studying maths at the University of
  Edinburgh. I also do a lot of more computery things, from Freshair —
  Edinburgh’s student radio — where I’m the webmaster, to CompSoc — the
  computing society at Edinburgh — where I run SigWeb, the web development
  branch. I’ve worked in a breadth of technologies, from Rust to React, and
  played around in way more. I’ve even got a sort of blog where I write about
  …stuff. You can scroll down to read some of my articles — but don’t feel
  obliged to, I’m very much still exploring the medium. Have a good day!
</p>

{#each articles as article}
  <a href={article.data.href} class="article">
    <h2>{article.data.heading}</h2>
    <p>{article.data.brief}</p>
  </a>
{/each}
