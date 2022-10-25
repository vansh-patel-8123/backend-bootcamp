const http = require('http');
const fs = require('fs');

const app = http.createServer((req,res) => {
    console.log("Server is listening...");

    // // request
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    // // responce
    // res.setHeader('Content-Type','text/html')
    // res.end('<h1>Hello world !!</h1>')

    // ---------------------------------------------------------------------
    // const url = req.url;

    // if(url === '/'){
    //     res.setHeader('Content-Type','text/html');
    //     res.write('<h1> HELLO WORLD First PAGE !!!</h1>');
    //     res.end();
    //     console.log('In First Page');
    // }else{
    //     res.setHeader('Content-Type','text/html');
    //     res.write('<h1> HELLO WORLD Second PAGE !!!</h1>');
    //     res.end();
    //     console.log('In Second Page');
    // }

    // ---------------------------------------------------------------------
    // const url = req.url;

    // if(url === '/'){
    //     console.log('In /');
    //     res.setHeader('Content-Type','text/html');
    //     res.write('<h1> HELLO WORLD First PAGE !!!</h1>');
    //     return res.end();
    // }
    // if(url === '/file') {
    //     console.log('In /File');
    //     fs.writeFileSync("abcd.txt","hllo world");
    //     res.statusCode = 302;
    //     res.setHeader('Location','/');
    //     return res.end();
    // }
    // res.setHeader('Content-Type','text/html');
    // res.write('<h1> HELLO WORLD Second PAGE !!!</h1>');
    // res.end();
    // console.log('In Second Page');

    // ---------------------------------------------------------------------
    const url = req.url;
    const method = req.method;


    if(url === '/'){
        console.log('In /');
        res.setHeader('Content-Type','text/html');
        res.write('<form action="/file" method="POST" name="msg"><input type="text" name="msg"><button type="submit">Submit</button></form>');
        return res.end();
    }
    if(url === '/file' && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync("abcd.txt", message);
            console.log('In /File');
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        });
    }
    res.setHeader('Content-Type','text/html');
    res.write('<h1> HELLO WORLD Second PAGE !!!</h1>');
    res.end();
    console.log('In Second Page');
});


app.listen(3000);
