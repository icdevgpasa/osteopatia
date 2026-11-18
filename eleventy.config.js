import * as yaml from "js-yaml";

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.addFilter("nl2br", (s) => (s || "").replace(/\n/g, "<br>"));
  eleventyConfig.addFilter("paras", (s) =>
    (s || "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
  );
  eleventyConfig.addFilter("lines", (s) => (s || "").split("\n").map((l) => l.trim()).filter(Boolean));
  return { dir: { input: "src", output: "_site" } };
}
