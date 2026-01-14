const devConfig = require('./config/webpack.dev.js');
const prodConfig = require('./config/webpack.prod.js');

module.exports = () => {
  if (process.env.NODE_ENV === 'production') {
    return prodConfig;
  }
  return devConfig;
};
