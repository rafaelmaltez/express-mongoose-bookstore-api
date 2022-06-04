const http = require('http');
const PORT = 3000;

const routes = {
  '/': 'start page',
  '/books': 'Books Route',
  '/authors': 'Authors Route',
  '/about': 'Project info'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(routes[req.url] || '<h1> 404: No such route</h1>');
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})