const fs = require("fs");
const path = require("path");
const program = require("commander");
const _ = require("lodash");

const writeFile = (filePath, content) => {

  fs.writeSync(fs.openSync(filePath, "w"), content);
  console.log("Write file: ", filePath);
};

const run = (dir, name, options) => {

  var className = _.capitalize(_.camelCase(name));
  var filePath = path.resolve(dir, className + '.js');


  var fileContent = `const ${className} = () => {

}

exports.${className} = ${className};
`;

  writeFile(filePath, fileContent);
};


exports.run = run;