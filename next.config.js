const webpackAliases = require("./aliases");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...webpackAliases,
    };
    return config;
  },
};

module.exports = nextConfig;
