const md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return "";
  }
});
const matter = require("gray-matter");
const hljs = require("highlight.js");
const mk = require("markdown-it-katex");
md.use(mk);
const fs = require("fs").promises;
export default async () =>
  await fs.readdir("./articles", "utf8").then(files =>
    Promise.all(
      files
        .map(async file => ({
          path: file,
          file: matter(await fs.readFile(`./articles/${file}`, `utf8`))
        }))
        .map(async f =>
          f.then(f => ({
            path: f.path,
            data: f.file.data,
            content: md.render(f.file.content)
          }))
        )
    )
  );
