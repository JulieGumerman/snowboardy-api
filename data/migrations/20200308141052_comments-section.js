
exports.up = function(knex) {
    return knex.schema.createTable("comments", table => {
        table.increments();
        table.integer("mountain_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("mountains")
        table.integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
        table.text("comment")
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("comments")
};
