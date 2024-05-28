const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports.handler = async (event, context) => {
  const method = event.httpMethod;
  const url = event.path;
  const body = event.body;

  const req = { method, url, body };
  const res = {
    locals: {},
  };

  server(req, res, () => {});

  return {
    statusCode: res.locals.status || 200,
    body: JSON.stringify(res.locals.data || {}),
  };
};
