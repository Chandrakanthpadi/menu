module.exports = function (elevtyConfig) {
  elevtyConfig.addPassthroughCopy("./src/styles");
  elevtyConfig.addPassthroughCopy("./src/admin");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
