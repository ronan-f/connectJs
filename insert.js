const queries = require('./add_person');

const first = process.argv[2];
const lastName = process.argv[3];
const birth = process.argv[4];

queries.addData(first, lastName, birth);
