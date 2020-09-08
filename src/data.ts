const data = {
  name: 'ResponseError',
  meta: {
    body: {
      error: {
        root_cause: [
          {
            type: 'invalid_index_name_exception',
            reason: 'Invalid index name [INVALIDE_NAME], must be lowercase',
            index_uuid: '_na_',
            index: 'INVALIDE_NAME',
          },
        ],
        type: 'invalid_index_name_exception',
        reason: 'Invalid index name [INVALIDE_NAME], must be lowercase',
        index_uuid: '_na_',
        index: 'INVALIDE_NAME',
      },
      status: 400,
    },
    statusCode: 400,
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'content-length': '335',
    },
    warnings: null,
    meta: {
      context: null,
      request: {
        params: {
          method: 'PUT',
          path: '/INVALIDE_NAME',
          body: '',
          querystring: '',
          headers: {
            'user-agent': 'elasticsearch-js/7.9.0 (linux 4.15.0-115-generic-x64; Node.js v14.9.0)',
          },
          timeout: 30000,
        },
        options: {
          warnings: null,
        },
        id: 1,
      },
      name: 'elasticsearch-js',
      connection: {
        url: 'http://127.0.0.1:9200/',
        id: 'http://127.0.0.1:9200/',
        headers: {},
        deadCount: 0,
        resurrectTimeout: 0,
        _openRequests: 0,
        status: 'alive',
        roles: {
          master: true,
          data: true,
          ingest: true,
          ml: false,
        },
      },
      attempts: 0,
      aborted: false,
    },
  },
};

export default data;
