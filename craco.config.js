const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Remove the ModuleScopePlugin which restricts imports outside of src
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
      );
      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      
      // Add aliases to resolve React to a single instance
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        'react': path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      };
      
      return webpackConfig;
    },
  },
};
