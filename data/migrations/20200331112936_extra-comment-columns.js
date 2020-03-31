
exports.up = function(knex) {
    return knex.schema.table("comments", table => {
        table.string("title")
        table.datetime("created_at")
    })
};

exports.down = function(knex) {
  
};
