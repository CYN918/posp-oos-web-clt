const {join, resolve} = require('path');
const devPort = 3001;
const projectVirtualPath = 'posp/oss';
module.exports = {
    scaffoldType: 'react',
    projectVirtualPath,
    publishConfig: {
        leon: {
            uploadApi: 'http://leonidapi.17usoft.com/v1/leonid/static/object',
            userToken: '7af259864d027050380bc65a0ec4ea39',
            pId: '584654bffe8161000130132f',
            bucketName: 'jinfu'
        },
        ftp: {
            host: '10.100.156.173',
            port: 21,
            user: 'webapps',
            password: 'webapps'
        }
    },
    baseOption: {
        px2rem: true,
        cdnPath: [
            '//10.10.5.237:9000/public/'
        ],
        projectCwd: join(__dirname, 'src'),
        outputPath: resolve(__dirname, 'public'),
        htmlTemplate: join(__dirname, 'templates/index{0}.html'),
    },
    buildOption: {
        enableBundleHashName: true,
        rejectWarnings: false,
    },
    serveOption: {
        devPort,
        mockBase: join(__dirname, 'mocks'),
        mockStatic: join(__dirname, 'mocks/statics'),
        mockRouteDefs: {
            '/login': ['common', 'login'],
            '/main': ['common', 'main']
        },
        contentBase: join(__dirname, 'public/'),
        serveTemplate: join(__dirname, 'templates/serve.ejs'),
        moduleTemplate: join(__dirname, 'templates/module.ejs'),
        outputPublicPath: `http://dev.venus.org:${devPort}/public/`,
    },
    babel: {
        presets: [
            '@babel/preset-react'
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": "css"
                }
            ]
        ]
    },
    entries: {
        [`${projectVirtualPath}/login`]: {entry: ['./src/login/index'], options: {mockRouteDef: '/login'}},
        [`${projectVirtualPath}/main`]: {entry: ['./src/main/index'], options: {mockRouteDef: '/main'}}
    },
    webpackAlias: {},
    webpackPerformance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    webpackProxy: {},
    webpackExternal: {},
    webpackModule: {},
    webpackPlugins: [],
};
