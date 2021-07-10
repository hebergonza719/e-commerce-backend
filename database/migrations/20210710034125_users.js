
exports.up = function(knex) {
  return knex.schema
    .createTable('user', table => {
      table.increments('id');
      table.string('email', 225).notNullable().unique();
      table.string('username', 225).notNullable().unique();
      table.string('password', 225).notNullable();
      table.string('first_name', 225).notNullable();
      table.string('last_name', 225).notNullable();
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};