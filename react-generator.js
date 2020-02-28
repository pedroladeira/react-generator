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
  var filePath = path.resolve(dir, className + '.tsx');
  
  
  var fileContent = `import React, { Component, ReactNode } from 'react';

interface Props {

}

export default class ${className} extends Component<Props> {

  render (): ReactNode {
    return (<div>Sample code</div>);
  }
}
`;

  writeFile(filePath, fileContent);
};


exports.run = run;