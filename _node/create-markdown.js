
'use strict';

let fs = require('fs');
let mkdirp = require('mkdirp');
// let parse = require('csv-parse/lib/sync');
let yaml = require('js-yaml');

function stringToURI(str) {
  return String(str).toLowerCase()
    .replace(/\s/g, '-')
    .replace(/\//g, '-')
    .replace(/\&/g, '-')
    .replace(/\./g, '-')
    .replace(/\:/g, '-')
    .replace(/\|/g, '-')
    .replace(/\_/g, '-')
    .replace(/\,/g, "-")
    .replace(/\+/g, "-")
    .replace(/\r\n?/, '-')
    .replace(/\'/g, '')
    .replace(/\‘/g, '')
    .replace(/\’/g, '')
    .replace(/\′/g, '')
    .replace(/\“/g, '')
    .replace(/\”/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\"/g, '')
    .replace(/\#/g, '')
    .replace(/\$/g, '')
    .replace(/\;/g, '')
    .replace(/\—/g, '-')
    .replace(/\–/g, '-')
    .replace(/\-\-\-\-/g, '-')
    .replace(/\-\-\-/g, '-')
    .replace(/\-\-/g, '-')
    .replace(/^\-/g, '') // Remove starting dash
    .replace(/\-$/g, '') // Remove trailing dash
    .replace(' ', '');
}

function createMarkdownFile(data, folderName) {
  console.log('createMarkdownFile for ' + data.title);
  let writePath = '../_' + folderName;

  let filename = stringToURI(data.title); //.split("-").slice(0,5).join("-");

  if (data.date) {

    let date = new Date(data.date)

    let month = date.getMonth() + 1
    if (month < 10) {
      month = `0${month}`;
    } 

    let day = date.getDate()
    if (day < 10) {
      day = `0${day}`;
    }

    filename = `${date.getFullYear()}-${month}-${day}-${filename}`;

    data.date = date.toString() // 2018-08-08 16:54:00 -07:00

  }

  let output;

  if (data.body) {
    let content = data.body;
    delete data.body;

    console.dir(data);

    // https://www.npmjs.com/package/js-yaml#safedump-object---options-
    output =
`---
${yaml.safeDump(data)}
---

${content}
`

  } else {
    console.dir(data);

    output =
`---
${yaml.safeDump(data)}
---
`
  }

  mkdirp(writePath, function (err) {
    if (err) {
      console.error(err);
    } else {
      fs.writeFileSync(writePath + '/' +  filename + '.markdown', output, 'utf8', (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

function generateCollections(file_name, category) {

  console.log('generateCollections: ' + file_name);

  let input = fs.readFileSync('../_yaml/' + file_name, 'utf8'); // https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options

  let records = yaml.safeLoad(input).items;

  for (let index = 0; index < records.length; index++) {
    let data = records[index];
    data.position = index;
    createMarkdownFile(data, category);
  }
  return records;
}


// generateCollections('press.yaml', 'press');
// generateCollections('jobs.yaml', 'jobs');
// generateCollections('speaking.yaml', 'speaking');
// generateCollections('opportunities.yaml', 'opportunities');
generateCollections('capital.yaml', 'capital');
generateCollections('initiatives.yaml', 'initiatives');

