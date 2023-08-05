require('dotenv').config();


const dev = {
    app : {
        port: process.env.DEV_APP_PORT || 8881
    },
    db : {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'shopDev'
    }
}

const pro = {
    app : {
        port: process.env.PRO_APP_PORT || 8882
    },
    db : {
        host: process.env.PRO_DB_HOST || 'localhost',
        port: process.env.PRO_DB_PORT || 27017,
        name: process.env.PRO_DB_NAME || 'shopPro'
    }
}

const config = {dev, pro};
const env = process.env.ENV_USE || "dev";


module.exports = config[env];
