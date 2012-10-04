#!/usr/bin/env node

var fs = require('fs')
  , vanilla = require('vanilla')
  , src = process.argv[2]
  , target = process.argv[3]
  ;

if (process.argv.length !== 4) throw new Error('not enough process.argv')

fs.writeFileSync(target, vanilla(fs.readFileSync(src)))