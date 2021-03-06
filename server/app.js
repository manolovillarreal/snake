const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require("path");

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

server.listen(port, (err) => {
    if (err) throw new Error();

    console.log(`Servidor corriendo en puerto ${port} `);
});

module.exports.io = io;
require("./sockets.server");