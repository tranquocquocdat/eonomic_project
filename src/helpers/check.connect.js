'use strict';
const { default: mongoose } = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;
 const countConnect = () => {
    const numberConnetion = mongoose.connections.length;
    console.log("numberConnetion: " + numberConnetion);
}
 const checkOverload = () => {
    setInterval(() => {
        const numberConnetion = mongoose.connections.length;
        const numberCores = os.cpus.length;
        const memoryUsage = process.memoryUsage(); // Corrected line
        const maxConnetins = numberCores * 5;
        console.log("number of connections: " + numberConnetion);
        console.log(`memory usage: ${memoryUsage.heapUsed/1024/1024} Mb`); // Accessing specific memory property
        if (numberConnetion > maxConnetins) {
            console.log("connection overfloaded: " + numberConnetion);
        }
    }, _SECONDS)
}
 module.exports = {
    countConnect,
    checkOverload
};