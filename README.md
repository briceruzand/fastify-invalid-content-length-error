# Fastify : invalid content-length in custom ErrorHandler

## Setup

* run elastic search in background

```sh
docker run -d -p 9200:9200 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.9.0
```

* run fastify simple app

```sh
npm install
npm start
```

## Run theses requests

On these requests fastify will send an invalid content-length: 335

In that case the answer is full, but the connection is close after a timeout of 5 seconds.

```sh
curl -v http://127.0.0.1:3000/ok
```


In that case the answer is truncated because it is longer than 335 bytes.

```sh
curl -v http://127.0.0.1:3000/ko
```

**Note:**
Elastic search client answer an error (throw an async error) on calling elastic search REST api. That answer has a content length of 335 bytes.