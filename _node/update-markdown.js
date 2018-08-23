
'use strict';

let fs = require('fs');
let yaml = require('js-yaml');

function getYaml(text, filename) {
  const DELIMITER = '---';
  let items = text.split(DELIMITER);
  if (items.length === 3) {
    return items[1];
  } else {
    console.log('unexpected markdown format detected');
    console.log(items.length);
    console.log(text);
    console.log(filename);
  }
}

function getContent(text, filename) {
  const DELIMITER = '---';
  let items = text.split(DELIMITER);
  if (items.length === 3) {
    return items[2];
  } else {
    console.log('unexpected markdown format detected');
    console.log(items.length);
    console.log(text);
  }
}

function loadMarkdown(filename) {
  // let input = fs.readFileSync(filename, 'utf8'); // https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options

  // Get document, or throw exception on error 
  try {
    let text = fs.readFileSync(filename, 'utf8');
    let yamlText = getYaml(text, filename);
    let contentText = getContent(text, filename);

    if (!yamlText || !contentText) return;

    let data = {}
    data.yaml = yaml.safeLoad(yamlText);
    data.content = contentText;
    return data;

  } catch (e) {
    console.log(e);
  }
}

function saveMarkdown(filename, data) {

  console.dir(data);

  let output;

  if (data.content && data.content.replace(/\s/g, "").replace(/\n/g, "") != "") {

    // https://www.npmjs.com/package/js-yaml#safedump-object---options-
    output =
`---
${yaml.safeDump(data.yaml)}
---

${data.content}
`

  } else {
    output =
`---
${yaml.safeDump(data.yaml)}
---
`
  }

  fs.writeFileSync(filename, output, 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// https://stackoverflow.com/questions/20822273/best-way-to-get-folder-and-file-list-in-javascript#21459809
function getAllFilesFromFolder(dir) {

    let filesystem = require("fs");
    let results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        let stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};

function updateMarkdownFiles(folder) {
  let files = getAllFilesFromFolder(folder);

  //console.log(files);

  // For each markdown file
  for (let index = 0; index < files.length; index++) {
    if (files[index].indexOf('.DS_Store') >= 0) continue;

    let filename = files[index]

    // Load the contents of the file
    let data = loadMarkdown(filename);

    // Add a position value that counts backwards
    data.yaml.position = (files.length - 1) - index;
    if (!data) continue;

    saveMarkdown(filename, data);
  }
}

// updateMarkdownFiles('../_jobs');
// updateMarkdownFiles('../_press');
// updateMarkdownFiles('../_posts');

