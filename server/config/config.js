const env = process.env.NODE_ENV ? "test" : "development";
console.log(`*** ${env.toUpperCase()} ***`);

if( env === "development" || env === "test" ){
    let config = require("./config.json");
    let envConfig = config[env];

    console.log(envConfig);
    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}