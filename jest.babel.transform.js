module.exports = require('babel-jest').createTransformer({
    "babelrc": false,
    "presets": [
        [
            "@babel/preset-env",
            {
                "modules": "commonjs",
                "loose": true,
                "targets": {
                    "node": "current"
                }
            }
        ]
    ],
    "plugins": [
        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose": true
            }
        ]
    ]
})