const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Substitua pelo seu arquivo JSON
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports.handler = (event, context) => {
  const handler = server.listen(8000);
  return handler(event, context);
};
