var path = require('path')
var webpack = require('webpack')

module.exports = {
  // entry: './src/main.js',
  entry: './src/lib/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    // filename: 'build.js',
    filename: 'vue-neon-light.js',
    library: 'vue-neon-light',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include:[
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/opentype.js')
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
          test: /\.(ttf|eot|svg|TTF)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
      }
      // { test: /\.TTF$/, loader: 'ignore-loader' },
      // { test: /\.ttf$/, loader: 'ignore-loader' }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
      uglifyOptions: {
          compress: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
