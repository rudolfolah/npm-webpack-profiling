const HeapSamplingPlugin = require("heap-sampling-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        example: './example/main.js'
    },
    parallelism: 1,
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        symlinks: false,
    },
    output: {
        clean: true,
        filename: '[name].bundle.js'
    },
    plugins: [
        new HeapSamplingPlugin({
            outputPath: "./example.heapprofile",
            checkPeakMemory: true,
            checkPeakMemoryInterval: 1000,
            heapProfile: true,
        }),
        new HtmlWebpackPlugin({
            title: "Heap Profiling",
            template: "./example/index.html",
            meta: {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
            scriptLoading: 'blocking',
        }),
    ],
}
