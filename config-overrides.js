// Copyright 2019-2020 @paritytech/bridge-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

module.exports = function override(webpackConfig) {
  webpackConfig.module.rules.push({
    include: /node_modules/,
    test: /\.mjs$/,
    type: 'javascript/auto'
  });

  return webpackConfig;
};
