'use strict';

var Metalsmith  = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    tojson = require('metalsmith-to-json'),
    filter = require('metalsmith-filter'),
    json = require('jsonfile');

let settings = {
  "name": "markdown-json",
  "cwd": "./",
  "src": "public/cms/",
  "filePattern": "**/*.md",
  "ignore": "*(icon|input)*",
  "dist": "public/"
}

const writeJson = (files, metalsmith, done) => {
  var data = {
    data: []
  }
  let fname
  for (var file in files) {
    files[file].contents = files[file].contents.toString()
    files[file].id = file.replace(/\.md|\.html/, '').replace(/\//g, '__')
    // Removing unnecessaries properties...
    delete files[file].mode
    delete files[file].stats
    delete files[file].template
    // consolidating data
    if (files[file].contents.length>2) {
        data.data.push(files[file])
    }
    if (!fname && file.split('/')[0].length > 1) {
        fname = file.split('/')[0]
    }
  }

  json.writeFileSync(settings.dist + fname + '.json', data, {spaces: 2}, (err) => {
    console.log(err)
  })

  if (settings.display) {
    console.log(`Total files: ${Object.keys(files).length}`)
    console.log(`Output file created on: ${settings.dist}`)
    console.log('Markdown to json process has been finished!')
  }
  done()
}

Metalsmith('public/')
    .use(filter('**/*.md'))
    .use( markdown() )
    .use( tojson({
        outputPath : './public/',
        createIndexes : true,
        indexPaths : ['./public/cms/_slider'],
        onlyOutputIndex : true
    }))
    .use(writeJson)
    .use((data) => {
        console.log(data)
    })
    .source('cms')
    .build(function( err, files ) {
        if( err ) throw err;
    });