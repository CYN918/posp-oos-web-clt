module.exports = {
    verbose: true,

    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/index.ts',
        '!__tests__/**/*',
        '!tests/**/*'
    ],

    coverageDirectory: 'coverage',
    coverageReporters: [
        'html',
        'lcov',
        'text'
    ],
    globals: {
        usingJSDOM: true,
        usingJest: true
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    moduleNameMapper: {},
    rootDir: __dirname,
    setupFiles: [],
    setupFilesAfterEnv: [
        require.resolve('./jest-debug.js')
    ],

    testMatch: [
        '<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)',
        '<rootDir>/tests/**/*.(ts|tsx|js|jsx)',
        '<rootDir>/?(*.)(spec|test).(ts|tsx|js|jsx)'
    ],

    transform: {

        '^.+\\.jsx?$': '<rootDir>/jest.babel.transform.js',
        '^.+\\.tsx?$': '<rootDir>/jest.ts.transform.js'

    },
    reporters: [
        [
            'jest-silent-reporter',
            {
                useDots: true
            }
        ]
    ]
}
