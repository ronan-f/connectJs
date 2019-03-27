const {knex} = require('./knexConnection');

function addData(name1, name2, bday) {
    let birth = new Date(bday);
    knex('famous_people')
  .insert([
      { first_name: name1, last_name: name2, birthdate: birth}])
  .asCallback((err) => {
      console.log('test');
    if(err){
        console.log(err);
    }
    knex.destroy();
  }

)};

exports.addData = addData;