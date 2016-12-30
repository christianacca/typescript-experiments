// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html
const testGlob = 'src/tests.js';
var debug = process.env.npm_lifecycle_event === 'test:debug'

module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // libraries
            //'node_modules/lodash/lodash.js',
            testGlob
        ],
        preprocessors: {
            [testGlob]: ['webpack']
        },
        webpack: {
            resolve: {
                extensions: ['.ts', '.tsx', '.js', '.jsx']
            },
            devtool: 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        exclude: /node_modules/,
                        loaders: [`awesome-typescript-loader?tsconfig=tsconfig.json`]
                    }
                ]
            }
        },
        webpackMiddleware: {
            stats: {
                chunks: false,
                chunkModules: false,
                colors: true,
                hash: false
            }
        },
        reporters: ['jasmine-diff', 'dots', 'spec'],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,
        browsers: ['Chrome']
    });
};
