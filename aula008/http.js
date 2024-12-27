const http = require('http');
const esport = ['soccer', 'volley', 'basketball', 'tennis'];

const serve = http.createServer(async (request, response) => {
    const { method, statusCode ,url } = request;

    response.setHeader('Content-Type', 'text/html; charset=utf-8')

    const bodyPromise = new Promise((resolve, reject) => {
        let body 

        request.on('data', data => {
            body = JSON.parse(data)
        })

        request.on('end', data => {
            resolve(body)
        })
    })

    if (url === '/') {
        response.write(`<div> <h1>Hello from node</h1> <p>http serve</p> </div>`);
        response.end();
        return;
    }

    if (url === '/api/esport') {
        if (method === 'GET') {
            response.write(JSON.stringify(esport));
            response.end();
            return;
        }

        if (method === 'POST') {
            
            const body = await bodyPromise

            const { name } = body;

            if (!esport.map(esport => esport.toLowerCase()).includes(name.toLowerCase())) {
                esport.push(name.toLowerCase());
                console.log('enter')
            }

            response.write(name.toLowerCase())
            response.end()
            return;
        }
    }

    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write(`<h1>Página não encontrada</h1>`);
    response.end();
});

serve.listen(3000, 'localhost', () => {
    console.log('Server running on http://localhost:3000');
});