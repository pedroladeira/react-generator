#! /usr/bin/env node

const fs         = require("fs");
const path       = require("path");
const program    = require("commander");
const _          = require("lodash");
const reactGenerator = require('./react-generator');
const jsGenerator = require('./js-generator');

function run(name, options) {

  console.log('options.file', options.file);
  
  const dirPath = _.split(name, '.');
  var dir = './';
  const fileName = dirPath.pop();
  dirPath.forEach(e => {
    dir += e + '/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  });

  if (options.file === 'tsx') {
    reactGenerator.run(dir, fileName, options);
  } else if (options.file === 'js') {
    jsGenerator.run(dir, fileName, options);
  }

  
//   var dir       = path.resolve(name);
//   var stylesExt = options.styles || "css";
//   var styles    = path.resolve(dir, name + "." + stylesExt);
//   var fileName  = _.capitalize(_.camelCase(name));
//   var filePath = path.resolve(dir, fileName + (options.typescript ? '.tsx' : '.jsx'));
//   var index     = path.resolve(dir, "index" + (options.typescript ? '.tsx' : '.jsx'));
//   var className = _.capitalize(_.camelCase(name));
//   var dirName   = _.kebabCase(name);

// var tsxContent = `import React, { Component, ReactNode } from 'react';

// interface Props {

// }

// export default class ${className} extends Component<Props> {

//   render (): ReactNode {
//     return (<div>Sample code</div>);
//   }
// }
// `;

//   var indexContent = `export { default } from './${fileName}';`;

//   fs.mkdirSync("./" + dirName);
//   fs.openSync(styles, "w");
//   fs.writeSync(fs.openSync(filePath, "w"), tsxContent);
//   fs.writeSync(fs.openSync(index, "w"), indexContent);
  console.log("Finished");

}

program
  .version('0.0.5')
  .option('-f, --file [extension]', 'type of file [default: js]')
  .arguments('<name>')
  .action(run)
  .parse(process.argv);
