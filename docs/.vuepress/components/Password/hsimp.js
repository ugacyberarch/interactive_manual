var main = require("hsimp-main/bootstrap")(require("hsimp-main"));

var modules = {
  characterSets: require("hsimp-character-sets"),
  period: require("hsimp-period"),
  namedNumber: require("hsimp-named-number"),
  checker: require("hsimp-checker"),
  defaults: {
    calculationsPerSecond: 1e10, // 10 billion
    good: 31557600e6, // 1 million years
    ok: 31557600 // 1 year
  },
};


module.exports = modules
