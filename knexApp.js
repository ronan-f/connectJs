const database = require('./knex');
const queries = require('./knexSearch');

const arg = process.argv[2];

queries.knexSearch(database.knex, arg);
