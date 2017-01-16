var autoprefixer = require('autoprefixer')
var path = require('path')
var src  = path.resolve(__dirname, 'src')

module.exports = {
  entry: src + '/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'Libtest5',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: src,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      }
    ]
  },
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
    ];
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: []
}
