const { prefix } = require("../src/api/character/routes/character");

module.exports = {
  rest: {
    defaultLimit: 10,
    maxLimit: 100,
    withCount: true,
    prefix: "/v1", //prefix
  },
};
