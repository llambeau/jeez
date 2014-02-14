#!/usr/bin/env node

// Let's use minimist, perfect tool, there's almost nothing else to do
var minimist = require('minimist')
var argv = minimist(process.argv.slice(2));
// except removing this
delete argv._;
// Bam!
console.log(JSON.stringify(argv))