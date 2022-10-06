const jsonServer = require('json-server');
const {bodyParser} = require('json-server');
const fs = require('fs');

const mockServer = jsonServer.create();
const middlewares = jsonServer.defaults();

const port = '3000';
mockServer.use(middlewares);
mockServer.use(bodyParser);

function readFileJSON(){
  let rawData = fs.readFileSync('../db.json');
  return JSON.parse(rawData.toString());
}

mockServer.get('/posts', (req, res) => {
  const responseData = readFileJSON()
  res.json(responseData.posts)
})

mockServer.listen(port, () => {
  console.log(`Server is listening on port 3000`);
});