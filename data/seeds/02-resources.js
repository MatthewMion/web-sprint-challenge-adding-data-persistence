exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    {
      resource_name: "Resource 1",
      resource_description: "Resource 1 description",
    },
    {
      resource_name: "Resource 2",
      resource_description: "Resource 2 description",
    },
    {
      resource_name: "Resource 3",
      resource_description: "Resource 3 description",
    },
  ]);
};
