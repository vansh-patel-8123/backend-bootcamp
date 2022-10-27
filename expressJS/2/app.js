const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs'); 
app.use(express.static('public'));

app.get('/',(req,res) => {
    // res.send('Hello Form Express');
    // res.sendFile(path.resolve(__dirname,".","views","index.html"));
    res.render('index', {
        title: 'my home page' 
    });
});
app.get('/about',(req,res) => {
    // res.sendFile(path.resolve(__dirname,".","views","about.html"));
    res.render('about', {
        title: 'About Page' 
    });
});
 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
