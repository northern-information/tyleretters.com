import markdownIt from "markdown-it";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy({ "*.png": "/" });
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("site.webmanifest");

  eleventyConfig.addWatchTarget("assets/styles.css");

  const md = markdownIt({ html: true });
  eleventyConfig.addFilter("md", (content) => md.render(content || ""));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "../_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
