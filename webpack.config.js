const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new ModuleFederationPlugin({
      name: 'repro',
      filename: 'remoteEntry.js',
      exposes: {
        './greeting': './src/greeting.js',
      },
    }),
  ],
};
