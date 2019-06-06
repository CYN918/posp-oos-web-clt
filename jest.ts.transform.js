module.exports = {
    process(src, path) {
        const typescript = require('typescript');
        const babelJest = require('babel-jest').createTransformer({
            babelrc: false,
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: 'commonjs',
                        loose: true,
                        targets: {
                            node: 'current',
                        },
                    },
                ],
            ],
            plugins: [
                ['@babel/plugin-proposal-class-properties', {loose: true}],
            ],
        });
        const tsConfig = require('./tsconfig.json');
        const jestConfig = require('./jest.config.js');
        return babelJest.process(
            typescript.transpile(src, tsConfig.compilerOptions, path, []),
            path,
            jestConfig,
        );
    }
};