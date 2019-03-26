function findPeople(client, search) {
    const queryString = `SELECT * FROM famous_people`;

    client.query(queryString, [], (err, res) => {
        if (err) {
          console.log(err);
          return;
        }

        res.rows.forEach((name) => {
            if(search === name.first_name){
          console.log(`${name.first_name} ${name.last_name} born on: ${name.birthdate.toDateString()}`);
            }
        });
    });
  }
  exports.findPeople = findPeople;