const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express()

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, err => {
        if (err) throw err
        console.log('> Ready on http://localhost3000');
    })
})
.catch(ex => {
    console.log(ex.stack)
    process.exit(1)
})

// https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f