#!/usr/bin/env node

var options = {
  infile: {
    position: 0,
    required: true,
    help: "JSON file to parse"
  },
  outfile: {
    position: 1,
    required: false,
    help: "file to write to. if not specified, output will be printed to stdout"
  },
  spaces: {
    abbr: "s",
    help: "number of spaces to use when indenting. default is 2",
    default: 2
  },
  useTabs: {
    abbr: "t",
    full: "use-tabs",
    flag: true,
    help: "use spaces instead of tabs. overrides --spaces",
    default: false
  }
};
var opts = require("nomnom").options(options).parse();

var fs = require("fs");

fs.readFile(opts.infile, function(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  var whitespace = opts.spaces;
  if (opts.useTabs)
    whitespace = "\t";
  prettyData = JSON.stringify(JSON.parse(data), null, whitespace);

  if (opts.outfile) {
    fs.writeFile(opts.outfile, prettyData, function(err) {
      if (err) {
        console.log(err);
      }
    });
  }
  else {
    console.log(prettyData);
  }
});

