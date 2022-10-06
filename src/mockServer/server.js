import jsonServer from 'json-server';
const {bodyParser} = jsonServer;

const mockServer = jsonServer.create();
const middlewares = jsonServer.defaults();

const port = '3000';
mockServer.use(middlewares);
mockServer.use(bodyParser);


mockServer.get('/posts', (req, res) => {
  res.json([
    { "id": 1, "title": "json-server", "author": "typicode" }
  ])
})

mockServer.listen(port, () => {
  console.log(`Server is listening on port 3000`);
});