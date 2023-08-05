'use strict';
const mongoose = require('mongoose');
const configDb = require('../configs/config.mongodb');
console.log(configDb);
const connectString = `mongodb://${configDb.db.host}:${configDb.db.port}/${configDb.db.name}`;
class Database {
    static instance;
    constructor() {
        this.connect();
    }

    connect(type = 'mongodb') {
        if (1 === 0) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }
        mongoose.connect(connectString, {maxPoolsize : 50})
        .then(_ => {
            console.log("connect success");
        }).catch(err => console.log("connect failure: " + err));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongoDb = Database.getInstance();

module.exports = instanceMongoDb;