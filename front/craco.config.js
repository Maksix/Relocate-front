const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#78BA4D',
              '@menu-horizontal-line-height': '65px',
              '@menu-item-height': '65px',
              '@text-color': '#7B7C7E',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
