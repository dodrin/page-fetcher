const request = require("request");
const fs = require("fs");

//takes command line arguments
const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

//http request?
request(url, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode);
  
  //writes a file
  fs.writeFile(filePath, ("body", body), (err) => {
    if (err) {
      console.error(err);
    }
    fs.stat(filePath, (err, stats) => {
      if (!err) {
        console.log(`Downloaded and saved ${stats.size} bytes to ${filePath}`);
      }
    });
  });
});
