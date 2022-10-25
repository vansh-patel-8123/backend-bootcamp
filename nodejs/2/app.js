const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded);


// app.use((req,res,next) => {
//     console.log('midelware 1');
//     next();
// });

// app.use((req,res,next) => {
//     console.log('midelware 2');
//     next();
// });

// app.use((req,res,next) => {
//     console.log('midelware 3');
//     res.send('<h1>Hello world</h1>')
// });

// ------------------------------------------------------------------------------------------------


// app.use('/views',(req,res,next) => {
//     console.log('views');
// });

// app.use('/',(req,res,next) => {
//     console.log('/');
// });


app.listen(3000);