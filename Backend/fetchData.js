const fse = require("fs-extra");
const file = "hemingway.txt";

function findWord(word, length) {
  var mid = Math.floor(word.length / 2);
  var conditionalWord = word.slice(0, mid)
  var regex = new RegExp(`${conditionalWord}[a-z|A-Z]*`, "gi");

  var text = fse.readFileSync(file, "utf8");

//Here i have used .match method with regular expression, since this is the fastest method, i compared a lot of methods and found this
//fastest, i also tried vanilla js algos but this was fast so this is my approach.
//Also make sure to not open the txt file during execution else the corpus update part will be lost.

  var toRead = text.match(regex);
  var sendData = [];

  for (length in toRead) {
    if (length < 3) {
      sendData.push(toRead[length]);
    } else break;
  }

  var removeRegex = new RegExp(sendData[0]);

  var toReplace = text.replace(removeRegex, "");
  fse.writeFileSync(file, toReplace + word + "\n");
  return sendData;
}

const getData = (req, res, next) => {
  var word = req.params.param;
  var length = 0;

  var data = findWord(word, length);
  
  res.json({ data });
};

module.exports = {
  getData,
};
