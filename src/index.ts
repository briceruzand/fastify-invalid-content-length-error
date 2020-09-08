import { Client } from '@elastic/elasticsearch';
import fastify from 'fastify';
import stringify from 'json-stringify-safe';

const server = fastify({ logger: { level: 'info' } });

async function creatIndex() {
  const elastic = new Client({ node: 'http://127.0.0.1:9200' });
  await elastic.indices.create({ index: 'INVALIDE_NAME' });
}

server.get('/ok', async (request, reply) => {
  await creatIndex();
});

server.get('/ko', async (request, reply) => {
  await creatIndex();
});

server.setErrorHandler((error, request, reply) => {
  const statusCode = error.statusCode || 500;

  console.log(stringify(error, null, 2));

  // generate a long json answer
  let repeat = 310;
  if ((request.url as string).startsWith('/ko')) {
    repeat = 336;
  }

  const response = ['#'.repeat(repeat), 'HERE IT STOP'];
  reply.code(statusCode).send(response);
});

const start = async () => {
  await server.listen(3000, '0.0.0.0');
};

start();
