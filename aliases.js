const path = require("path");

const tsconfig = require("./tsconfig.json");

const tsconfigPaths = tsconfig.compilerOptions.paths;

const webpackAliases = {};

for (const key in tsconfigPaths) {
  const aliasKey = key.replace("/*", "");
  const aliasPath = tsconfigPaths[key][0].replace("/*", "");
  webpackAliases[aliasKey] = path.resolve(__dirname, aliasPath);
}

module.exports = webpackAliases;
