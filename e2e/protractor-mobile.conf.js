const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    browserstackUser: process.env.BROWSERSTACK_USERNAME || 'abhisingh5',
    browserstackKey: process.env.BROWSERSTACK_ACCESS_KEY || 'mJjAQUZRjDyqhxMxQxjq',
    specs: [
        './src/**/*.mobile-e2e-spec.ts'
    ],
    multiCapabilities: [
        {
            'browserName': 'chrome',
            'build': 'Protractor Test',
            'device': 'Google Pixel 3',
            'os_version': '10.0',
            'app': 'bs://88e05c29eee6ec245c5aae039ee764b0a128c22a',
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
            'app': 'bs://88e05c29eee6ec245c5aae039ee764b0a128c22a',
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
