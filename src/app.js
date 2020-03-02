require("@babel/register")({
    presets: ["@babel/preset-env"]
});

// Import the rest of our application.
module.exports = require('./logs/index.js');
module.exports = require('./services/kafka.js');
module.exports = require('./producer/index');
