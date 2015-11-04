#! /usr/bin/env node

var fs         = require("fs");
var path       = require("path");
var program    = require("commander");
var changeCase = require("change-case");

function run(name, options) {

  var dir       = path.resolve(name);
  var stylesExt = options.styles || "css";
  var styles    = path.resolve(dir, name + "." + stylesExt)
  var jsx       = path.resolve(dir, name + ".jsx");
  var js        = path.resolve(dir, name + ".js");
  var index     = path.resolve(dir, "index.js");

var jsContent = `class ${name} extends React.Component {
  render() {
    return require("./${name}.jsx").call(this);
  }
}

export default ${name};
`;

var jsxContent = `import "./${name}.${stylesExt}";

export default function () {
  return (
    <div className="${changeCase.paramCase(name)}"></div>
  );
};
`;

var indexContent = `export default require("./${name}");
`;

  fs.mkdirSync("./"+name);
  fs.openSync(styles, "w");
  fs.writeSync(fs.openSync(js, "w"), jsContent);
  fs.writeSync(fs.openSync(jsx, "w"), jsxContent);
  fs.writeSync(fs.openSync(index, "w"), indexContent);
  console.log("Finished");

}

program
  .version('0.0.1')
  .option('-s, --styles [extension]', 'styles extension [default: css]')
  .arguments('<name>')
  .action(run)
  .parse(process.argv);
