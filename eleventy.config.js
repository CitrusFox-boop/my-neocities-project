module.exports = function(eleventyConfig) {
  // This tells Eleventy to copy the assets folder (images/css) to the final site
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};