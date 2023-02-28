const config = {
      moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
        "\\.svg$": "jest-svg-transformer",
        '^nanoid$': require.resolve('nanoid')
    }
};

if (process.env.COMPONENTS_MODE) {
  config.testMatch = ['**/*.component.test.tsx'];
  config.testEnvironment = 'jsdom';
} else {
  config.testPathIgnorePatterns = ['[.]component[.]test[.]tsx$'];
}

module.exports = config;