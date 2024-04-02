const fs = require('fs')
const path = require('path')


/**
 * get npm argument
 * @param {string} key - the key of argument
 */
const getArgument = (key) => {
  const arguments = process.argv.slice(2);
  const arg = arguments.find((arg) => arg.includes(key));

  if (arg) {
    return arg.split("=")[1];
  } 

  return undefined
}



const fileName = getArgument('file-name')

if (fileName) {
  
  const fileExtension = getArgument('extension')
  if (!fileExtension) {
    console.error("Error: The file extension doesn't entered...");
    return;
  }
  const dir = path.join(__dirname, `${fileName}.${fileExtension}`)

  fs.writeFileSync(dir, '')
} else {
  console.error("Error: The file name doesn't entered...");
}
