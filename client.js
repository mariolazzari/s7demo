const snap7 = require("node-snap7");

const s7client = new snap7.S7Client();
s7client.ConnectTo("192.168.100.1", 0, 0, err => {
  if (err)
    return console.log(
      " >> Connection failed. Code #" + err + " - " + s7client.ErrorText(err)
    );

  // Read the first byte from PLC process outputs...
  s7client.ABRead(0, 1, (err, res) => {
    if (err)
      return console.log(
        " >> ABRead failed. Code #" + err + " - " + s7client.ErrorText(err)
      );

    // ... and write it to stdout

    console.log(res);
  });

  s7client.DBRead(1, 0, 2, function(err, res) {
    if (err)
      return console.log(
        " >> ABRead failed. Code #" + err + " - " + s7client.ErrorText(err)
      );

    // ... and write it to stdout
    console.log("DBread", res);
  });

  s7client.GetPlcDateTime((err, date) => console.log(date));
});
