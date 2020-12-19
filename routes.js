const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    const body = [];
    if (url === '/') {
        res.write('<html><body><form action="create-users" method="POST"><input type="text"name="val"></input><button>Submit</button></form></body></html>');
        res.end()
    }
    if (url === '/users') {
        res.write('<html><body><ul><li>Harsh</li><li>Choti</li></ul></body></html>');
        res.end();
    }
    if (url === '/create-users') {
        req.on('data', (chunk) => {
            console.log('gad',chunk)
            body.push(chunk);
        });
        return req.on('end', () => {
            const user = Buffer.concat(body).toString();
            console.log('this',user);
            res.write(user);
           return res.end();
        });

    }

}
exports.handler = requestHandler;