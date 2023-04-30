const sass = require("sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images");
  
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function(inputContent) {
      let result = sass.compileString(inputContent);
      return async (_) => result.css;
    }
  });
};