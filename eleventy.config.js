module.exports = function(eleventyConfig) {
  // This tells Eleventy to copy the assets folder (images/css) to the final site
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // FIX: This teaches Eleventy how to format dates!
  eleventyConfig.addFilter("date", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};