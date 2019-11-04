#!/usr/bin/env node

const hbs = require('handlebars');
const fs = require('fs');
const pdf = require('html-pdf');

const config = require('./config')

if(process.argv[0]=='/usr/bin/node') process.argv.shift()

const timestamp = () => (new Date()).toISOString().replace(/\D/gi,'')

const template = process.argv[1] || './example.hbs'
const datafile = process.argv[2] || './example.js'
const output = process.env[3] || `${timestamp()}.${config.format || 'pdf'}`

const html = hbs.compile(fs.readFileSync(template).toString())(require(datafile))

pdf.create(html, config).toFile(output, function(err, res){
  if(err) {
    console.error(err.toString());
    throw err;
  }
  console.log('Done!');
  console.log(res.filename);
});
