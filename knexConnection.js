const settings = require('./settings');
const knex = require('knex')({

    client   : 'pg',
    connection: {
        user     : settings.user,
        password : settings.password,
        database : settings.database,
        host     : settings.hostname,
        port     : settings.port,
        ssl      : settings.ssl
    }
})

exports.knex = knex;