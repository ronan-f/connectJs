exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('milestones', function(table){
        table.string('description');
        table.string('date_achieved');
        table.timestamps();
        table.increments('id').unsigned.primary;
      })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('milestones')
    ])
  };