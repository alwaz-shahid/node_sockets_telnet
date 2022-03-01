import net from "net";
// import { EventEmitter } from "events";

const server = net.createServer((socket) => {
  socket.write("hello world\n");
  socket.on("data", (data) => {
    console.log(data.toString());
  });
});
server.listen(8080);

// telnet 127.0.0.1 8080
