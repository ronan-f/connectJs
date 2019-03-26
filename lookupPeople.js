function findPeople(client, search) {
    const queryString = `SELECT * FROM famous_people WHERE first_name LIKE $1`;
    let counter = 1;

    client.query(queryString, [search], (err, res) => {

        if (err) {
          console.log(err);
          return;
        } else if (!res.rows[0]){
            console.log('Sorry. That record cannot be found.');
            return;
        }
        console.log('Found ' + res.rows.length + ' people by the name ' + res.rows[0].first_name);
        res.rows.forEach((name) => {
            console.log(`${counter}.${name.first_name} ${name.last_name} born on: ${name.birthdate.toDateString()}`);
            counter ++;
     });
  })
}
  exports.findPeople = findPeople;