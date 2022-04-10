const path = require("path");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(".","build"),
        filename : "bundle.js",
    },
    mode : "development",//production when deploy
    module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' },
        ],
      },
      
    }