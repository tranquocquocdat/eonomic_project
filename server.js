const app = require("./src/app");
require('dotenv').config();
const env = require("./src/configs/config.mongodb");
const PORT = env.app.port || 3000

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server closed");
    process.exit(0); // Exit the process with a status code of 0
  });
});
