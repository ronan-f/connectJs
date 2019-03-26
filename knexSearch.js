function knexSearch(knex, search) {
    let counter = 1;
    knex
    .select('*')
    .from('famous_people')
    .where({'first_name': search}).then((rows) => {

         if (!rows[0]){
            console.log('Sorry. That record cannot be found.');
            return;
        }
        console.log('Found ' + rows.length + ' people by the name ' + rows[0].first_name);
        rows.forEach((name) => {
            console.log(`${counter}. ${name.first_name} ${name.last_name} born on: ${name.birthdate.toDateString()}`);
            counter++;
        })
        knex.destroy();
     })
}


  exports.knexSearch = knexSearch;