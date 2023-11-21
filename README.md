# npm-webpack-profiling

* [npm-calling-npm](./npm-calling-npm/): what happens when you use `npm run` in the `scripts` section?
* [webpack-heap-profiling](./webpack-heap-profiling/): small example to show how to profile webpack memory usage using the `heap-sampling-webpack-plugin`
* [webpack-my-app](./webpack-my-app/): create-react-app with TypeScript and an updated webpack configuration to show how to profile webpack memory usage using the `heap-sampling-webpack-plugin` and how it can differ based on which options are enabled for webpack

## Heap Sampling Webpack Plugin
This is a plugin that provides heap memory profiling. This is in contrast to [Webpack's ProfilingPlugin](https://webpack.js.org/plugins/profiling-plugin/) which provides CPU timings.

* The source code for heap-sampling-webpack-plugin: https://github.com/kenotron/heap-sampling-webpack-plugin
* The npm package for heap-sampling-webpack-plugin: https://www.npmjs.com/package/heap-sampling-webpack-plugin

## Webpack Profiling Plugin
This is a plugin that generates a JSON file that can be loaded into Chrome Dev Tools to profile event timings. [It is included with webpack.](https://webpack.js.org/plugins/profiling-plugin/)
