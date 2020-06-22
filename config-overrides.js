/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = function override(config) {
    config.resolve.alias = Object.assign(config.resolve.alias, {
        '~': path.resolve(`${__dirname}/src`),
    });

    config.module.rules.push({
        test: /\.scss$/,
        use: [
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        `${__dirname}/src/styles/mixins/responder.scss`,
                        `${__dirname}/src/styles/variables/breakpoints.scss`,
                        `${__dirname}/src/styles/variables/colors.scss`,
                    ],
                },
            },
        ],
    });

    return config;
};
