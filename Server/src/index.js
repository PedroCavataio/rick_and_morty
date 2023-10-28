const server = require("./app.js");
const PORT = process.env.PORT;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

