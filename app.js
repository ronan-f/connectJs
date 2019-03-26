const database = require('./test_script');
const queries = require('./lookupPeople');

const arg = process.argv[2];
queries.findPeople(database.client, arg);