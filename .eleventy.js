module.exports = function (elevtyConfig) {
  elevtyConfig.addPassthroughCopy("./src/styles");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
