 const { error } = require('console');
const fs=require('fs');


//  sync blocking code async non blocking code 

// write

// fs.writeFileSync('example.txt', 'Hello, World!');

// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     confirm.log('File written successfully');
// })

// read

// const data=fs.readFileSync('example.txt', 'utf-8');
// confirm.log(data);



// fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if(error){
//         console.log('Error reading file:', error);
//     }else{
//         console.log(data);
//     }
// })

// update 
// fs.appendFile('example.txt', '\nThis is an appended line.', (err) => {
//     console.log('File updated successfully');
// })


// cpSync
// unlikSynce
// mkdirsynce
// statSync
// mkdirSync
