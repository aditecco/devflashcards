const fs = require("fs");
const PATH = "";

fs.readFile(PATH, (err, data) => {
  if (err) return;

  const patterns = [/#{6}\s[0-9]\./g, /\n-{3}\n\n/g];

  const processedSource = data.toString().split(patterns[1]);

  // console.log(processedSource.length, processedSource[1]);

  processedSource.slice(1).forEach((card, i) => {
    fs.writeFile("./card-" + i + ".md", card, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
});
