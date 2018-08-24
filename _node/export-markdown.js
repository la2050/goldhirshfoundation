
'use strict'

let fs = require('fs')
let mkdirp = require('mkdirp')
let parse = require('csv-parse/lib/sync')
let stringify = require('csv-stringify')
let yaml = require('js-yaml')



function getYaml(text, filename) {
  const DELIMITER = '---'
  let items = text.split(DELIMITER)
  if (items.length === 3) {
    return items[1]
  } else {
    console.log('unexpected markdown format detected')
    console.log(items.length)
    console.log(text)
    console.log(filename)
  }
}

function getContent(text, filename) {
  const DELIMITER = '---'
  let items = text.split(DELIMITER)
  if (items.length === 3) {
    // If the content isn’t just whitespace
    if (items[2].replace(/\s/g, "").replace(/\n/g, "") != "") {
      return items[2]
    }
  } else {
    console.log('unexpected markdown format detected')
    console.log(items.length)
    console.log(text)
  }
}



// https://stackoverflow.com/questions/20822273/best-way-to-get-folder-and-file-list-in-javascript#21459809
function getAllFilesFromFolder(dir) {

    let filesystem = require("fs")
    let results = []

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file
        let stat = filesystem.statSync(file)

        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFilesFromFolder(file))
        } else results.push(file)

    })

    return results

}


function loadMarkdown(filename) {
  // let input = fs.readFileSync(filename, 'utf8'); // https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options

  // Get document, or throw exception on error 
  try {
    let text = fs.readFileSync(filename, 'utf8')
    let yamlText = getYaml(text, filename)
    let contentText = getContent(text, filename)

    let data = {}
    data = yaml.safeLoad(yamlText)
    if (contentText) data.content = contentText
    return data

  } catch (e) {
    console.log(e)
  }
}


const skipColumns = {
  "position": 1
}

function getColumns(records) {

  let uniqueColumnNames = {}
  records.forEach(item => {
    for (let name in item) {
      if (item.hasOwnProperty(name)) {
        uniqueColumnNames[name] = 1
      }
    }
  })

  let columns = []
  for (let name in uniqueColumnNames) {
    if (uniqueColumnNames.hasOwnProperty(name) && !skipColumns[name]) {
      columns.push(name)
    }
  }

  return columns
}


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
    .replace(/\“/g, '')
    .replace(/\”/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\"/g, '')
    .replace(/\#/g, '')
    .replace(/\;/g, '')
    .replace(/\-\-\-\-/g, '-')
    .replace(/\-\-\-/g, '-')
    .replace(/\-\-/g, '-')
    .replace(/^\-/g, '') // Remove starting dash
    .replace(/\-$/g, '') // Remove trailing dash
    .replace(' ', '');
}


function saveCSVFile(writePath, filename, records) {

  let data = []
  let columns = getColumns(records)
  data.push(columns)

  records.forEach(item => {
    let array = []
    columns.forEach(column => {
      array.push(item[column])
    })
    data.push(array)
  })

  stringify(data, function(err, output){     
    mkdirp(writePath, function (err) {
      if (err) {
        console.error(err);
      } else {
        fs.writeFileSync(writePath + '/' +  filename + '.csv', output, 'utf8', (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  })
}

function saveYAMLFile(writePath, filename, records) {
  let output = yaml.safeDump(records)

  mkdirp(writePath, function (err) {
    if (err) {
      console.error(err);
    } else {
      fs.writeFileSync(writePath + '/' +  filename + '.yaml', output, 'utf8', (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}


function getRecords(folder) {
  let files = getAllFilesFromFolder(folder)

  let records = []
  for (let index = files.length - 1; index >= 0; index--) {
    if (files[index].indexOf('.DS_Store') >= 0) continue

    // Load the contents of the file
    let record = loadMarkdown(files[index])
    if (!record) continue

    if (record.date) {
      // value = new Date(value).toString()

      let months = "January, February, March, April, May, June, July, August, September, October, November, December".split(", ")
      let date = new Date(record.date)

      record.date = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }
    
    for (let name in skipColumns) {
      if (skipColumns.hasOwnProperty(name)) {
        delete record[name]
      }
    }

    // Add the data to the list of records
    records.push(record)
  }
  return records
}


// const categories = ["learn", "create", "play", "connect", "live"]

// let records = []
// categories.forEach(category => {
//   let next = getRecords(`../_${category}`)
//   records = records.concat(next)
// })

const writePath = "../_data_from_markdown/"

let collection = "jobs"

let records = getRecords(`../_${collection}`)

saveCSVFile(  writePath, collection, records )
saveYAMLFile( writePath, collection, records )


