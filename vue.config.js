const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@store", resolve("src/store"))
            .set("@assets", resolve("src/assets"))
    }
}