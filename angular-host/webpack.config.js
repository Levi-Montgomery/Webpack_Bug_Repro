const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  externalsType: 'promise',
  output: {
    uniqueName: "angularHost",
    publicPath: "auto",
    environment: {
      asyncFunction: true,
    }
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'angularHost',
      filename: 'remoteEntry.js',
      shared: ['@angular/core', '@angular/common', '@angular/router'] // Add other shared libs as needed
    })
  ],
};
