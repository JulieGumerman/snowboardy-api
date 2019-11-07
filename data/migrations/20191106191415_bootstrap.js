
exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
      table.increments();
      table.string("username").notNullable().unique();
      table.string("password").notNullable();
  }).createTable("mountains", table => {
      table.increments();
      table.string("mountain_name").notNullable();
      table.string("nearest_town").notNullable();
      table.text("description").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("mountains").dropTableIfExists("users");
};
