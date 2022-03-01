// import net from "net";
// import { EventEmitter } from "events";

// const server = net.createServer((socket) => {
//   socket.write("hello world\n");
//   socket.on("data", (data) => {
//     console.log(data.toString());
//   });
// });
// server.listen(8080);

// telnet 127.0.0.1 8080

import dgram from "dgram";

const server = dgram.createSocket("udp4");

server.on("error", (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on("message", (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(8081);
// Prints: server listening 0.0.0.0:8081
// echo "hi" | nc -w1 -u 127.0.0.1 8081
