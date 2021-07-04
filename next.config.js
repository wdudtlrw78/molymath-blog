module.exports = {
  reactStrictMode: true,

  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },

  cacheDirectories: ['node_modules/', '.next/cache/'],
};
