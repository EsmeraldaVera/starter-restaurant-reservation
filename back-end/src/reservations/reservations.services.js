const knex = require("../db/connection");

function list(date, mobile_number) {
  if (date) {
    return knex(tableName)
      .select("*")
      .where({ reservation_date: date })
      .orderBy("reservation_time", "asc");
  }

  if (mobile_number) {
    return knex(tableName)
      .select("*")
      .where("mobile_number", "like", `${mobile_number}%`);
  }

  return knex(tableName).select("*");
}
module.exports = {
  list,
};
