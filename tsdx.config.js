const commonjs = require('@rollup/plugin-commonjs')

module.exports = {
	rollup(config, _options) {
		config.plugins.push(commonjs())
		return config
	},
}
