import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

export default function (env, argv) {
  return {
    entry: {
      index: './src/index.ts',
      print: './src/print.ts',
    },
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'eval',
    devServer: {
      static: './dist',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)&/i,
          type: 'asset/resource'
        },
        {
          test: /\.(csv|tsv)$/i,
          use: ['csv-loader'],
        },
        {
          test: /\.xml$/i,
          use: ['xml-loader']
        },
        {
          test: /\.tsx?$/i,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
    optimization: {
      runtimeChunk: 'single'
    }
  }
}