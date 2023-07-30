const app = require("./src/app");

const PORT = 3052;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 
process.on("SIGINT", () => {
    server.close(() => console.log("Exist server express"));
});


