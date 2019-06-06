// This file is work around for jest-environment-jsdom plugin which kills debugger
const JSDOM = require('jsdom').JSDOM;
// We want to execute all scripts, because this is for test environment only
const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
    runScripts: 'dangerously'
});
const window = jsdom.window;
global.window = window;
global.document = window.document;
global.navigator = window.navigator;
global.usingJSDOM = true;
