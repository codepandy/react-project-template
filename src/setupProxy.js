const path = require("path");
const fs = require("fs");
const apiMocker = require("mocker-api");

function getDirFilePaths(dirPath) {
  let filePaths = [];
  function findJsonFile(dir) {
    let files = fs.readdirSync(dir);
    files.forEach(function (item) {
      let fPath = path.join(dir, item);
      let stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) {
        findJsonFile(fPath);
      }
      if (stat.isFile() === true) {
        filePaths.push(fPath);
      }
    });
  }
  findJsonFile(dirPath);
  return filePaths;
}

module.exports = function proxy(app) {
  apiMocker(app, getDirFilePaths(path.resolve("./mocker")));
};
