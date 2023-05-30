const sass = require("sass");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function (inputContent) {
      let result = sass.compileString(inputContent);
      return async (_) => result.css;
    },
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  eleventyConfig.addShortcode("formatISODate", (date) =>
    DateTime.fromISO(date).toISODate()
  );
};
