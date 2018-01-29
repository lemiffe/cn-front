const { ReactLoadablePlugin } = require('react-loadable/webpack');
const workboxPlugin = require('workbox-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const workboxModify = (config, { target, dev }) => {
  const newConfig = config;

  if (target === 'web' && !dev) {
    newConfig.plugins.push(
      new workboxPlugin({
        globDirectory: './build/public',
        globPatterns: ['**/*.{html,js,css,svg,png,jpg}'],
        swDest: './build/public/sw.js',
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: new RegExp('https://jsonplaceholder.typicode.com/'),
            handler: 'networkFirst'
          },
          {
            urlPattern: new RegExp('http://localhost:3000/'),
            handler: 'staleWhileRevalidate'
          }
        ]
      })
    );
  }

  return newConfig;
};

const reactLoadableModify = (config, { target }) => {
  const newConfig = config;

  if (target === 'web') {
    newConfig.plugins.push(
      new ReactLoadablePlugin({
        filename: './build/react-loadable.json'
      })
    );
  }

  return newConfig;
};

const extractTextPluginModify = (config, { target, dev }) => {
  const newConfig = config;

  if (target === 'web' && !dev) {
    const i = newConfig.plugins.findIndex(
      plugin => plugin instanceof ExtractTextPlugin
    );

    newConfig.plugins[i] = new ExtractTextPlugin({
      filename: 'static/css/client.[contenthash:8].css',
      allChunks: true
    });
  }

  return newConfig;
};

const commonChunksModify = (config, { target, dev }, webpack) => {
  const newConfig = config;

  if (target === 'web') {
    newConfig.output.filename = dev
      ? 'static/js/[name].js'
      : 'static/js/[name].[hash:8].js';

    newConfig.entry.vendor = [
      require.resolve('razzle/polyfills'),
      require.resolve('react'),
      require.resolve('react-dom'),
      require.resolve('react-router-dom'),
      require.resolve('redux'),
      require.resolve('axios')
      // ... add any other vendor packages with require.resolve('xxx')
    ];

    newConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        minChunks: Infinity
      })
    );
  }

  return newConfig;
};

const cssModify = (config, { target, dev }, webpack) => {
  const appConfig = Object.assign({}, config);
  const isServer = target !== 'web';
  const postCSSLoaderOptions = {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      require('autoprefixer')({
        browsers: ['>1%', 'last 1 versions'],
        flexbox: 'no-2009'
      })
    ]
  };

  const cssConfig = modules =>
    [
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          minimize: !dev,
          sourceMap: dev,
          modules: modules,
          localIdentName: modules
            ? dev ? '[name]-[hash:base64:6]' : '[hash:base64:5]'
            : undefined
        }
      },
      isServer && {
        loader: require.resolve('postcss-loader'),
        options: postCSSLoaderOptions
      }
    ].filter(x => !!x);
  const css = cssConfig(false);
  const cssModules = cssConfig(true);

  const i = appConfig.module.rules.findIndex(
    rule => rule.test && !!'.css'.match(rule.test)
  );

  if (!dev && !isServer) {
    appConfig.module.rules[i] = {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: {
          loader: require.resolve('style-loader'),
          options: {
            hmr: false
          }
        },
        use: css
      })
    };
    appConfig.module.rules.push({
      test: /\.module\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: {
          loader: require.resolve('style-loader'),
          options: {
            hmr: false
          }
        },
        use: cssModules
      })
    });
  } else if (!dev && isServer) {
    appConfig.module.rules[i] = {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: css
    };
    appConfig.module.rules.push({
      test: /\.module\.css$/,
      use: [
        isServer && require.resolve('isomorphic-style-loader'),
        ...cssModules
      ].filter(x => !!x)
    });
  } else {
    appConfig.module.rules[i] = {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: [!isServer && require.resolve('style-loader'), ...css].filter(
        x => !!x
      )
    };
    appConfig.module.rules.push({
      test: /\.module\.css$/,
      use: [
        isServer
          ? require.resolve('isomorphic-style-loader')
          : require.resolve('style-loader'),
        ...cssModules
      ].filter(x => !!x)
    });
  }

  return appConfig;
};

const applyModifyFns = (args, modifyFns) => {
  const argsExceptConfig = args.slice(1);
  return modifyFns.reduce((config, modifyFn) => {
    return modifyFn(config, ...argsExceptConfig);
  }, args[0]);
};

module.exports = {
  modify: (...args) =>
    applyModifyFns(args, [
      workboxModify,
      reactLoadableModify,
      cssModify,
      commonChunksModify,
      extractTextPluginModify
    ])
};
