
exports.up = function(knex) {
    return knex.schema.createTable("comments", table => {
        table.increments();
        table.integer("user_id")
        table.integer("mountain_id")
        table.integer("comment")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("comments")
};
