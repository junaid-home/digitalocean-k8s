const { Sequelize } = require("sequelize");

const connectionStr =
  process.env.DATABASE_URL ||
  "postgres://postgres:12345678@localhost:5432/postgres";

const sequelize = new Sequelize(connectionStr);

function init() {
  (async function () {
    try {
      await sequelize.authenticate();
      console.log("[ OK ] Connection has been established successfully.");

      await sequelize.sync({ force: true });
      console.log(`[ OK ] All models were synchronized successfully.`);
    } catch (error) {
      console.error(`[ ERROR ] Unable to connect to the database: ${error}`);
    }
  })();
}

module.exports.init = init;
module.exports.sequelize = sequelize;
