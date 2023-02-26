const path = require('path');

module.exports = {
  webpack: {
    eslint: {
      enable: false,
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
