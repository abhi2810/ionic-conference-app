const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    seleniumAddress: 'https://<BROWSERSTACK_USERNAME>:<BROWSERSTACK_ACCESS_KEY>@hub-cloud.browserstack.com/wd/hub',
    specs: [
        './src/**/*.mobile-e2e-spec.ts'
    ],
    multiCapabilities: [
        {
            'browserName': 'chrome',
            'build': 'Protractor Test',
            'device': 'Google Pixel 3',
            'os_version': '10.0',
            'app': 'bs://<APP_ID>',
            'browserstack.debug': true,
            'browserstack.networkLogs': true,
            autoWebview: true,
            autoWebviewTimeout: 20000
        },
        {
            'browserName': 'chrome',
            'build': 'Protractor Test',
            'device': 'Samsung Galaxy S20',
            'os_version': '10.0',
            'app': 'bs://<APP_ID>',
            'browserstack.debug': true,
            'browserstack.networkLogs': true,
            autoWebview: true,
            autoWebviewTimeout: 20000
        }
    ],
    restartBrowserBetweenTests: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        print: function () { }
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
};
