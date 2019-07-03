const net = require("net");
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function(IP, PORT) {
  const conn = net.createConnection({
    host: "192.168.0.102",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", data => {
    console.log("Server says: ", data);
  });
  conn.on("connect", connect => {
    console.log("YOU ARE IN the game")
    conn.write("Name: oly")
  });
  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = {connect};
