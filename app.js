const fs = require('fs')
const path = require('path')
/* The line `const dirPath = path.join(__dirname,"views")` is creating a variable `dirPath` that stores
the path to a directory called "views". The `path.join()` function is used to join multiple path
segments together, in this case, it joins the current directory (`__dirname`) with the "views"
directory. */
const dirPath = path.join(__dirname,"views")
/* `console.log(dirPath)` is printing the value of the `dirPath` variable to the console. */

// console.log(dirPath)

// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/apple${i}.txt`,"a simple text file")
// }



console.log(fs.readdirSync(dirPath,{withFileTypes:true}))