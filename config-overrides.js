const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@redux': 'src/redux'
    })(config)
    return config;
}