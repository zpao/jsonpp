# There's a bajillion of these already... why more?

* `python -m json.tool` doesn't seem to work how I expect it to
* ditto for `prettify_json.rb`
* I didn't find one on npm already
* it's *JSON* so why shouldn't this be done by the JS engine

# Usage

`jsonpp --help` will spell it out, but for the lazy...

```
usage: jsonpp <infile> <outfile> [options]

infile      JSON file to parse
outfile     file to write to. if not specified, output will be printed to stdout

options:
   -s, --spaces     number of spaces to use when indenting. default is 2
   -t, --use-tabs   use spaces instead of tabs. overrides --spaces
```

# TODO

* parse json piped to the file

