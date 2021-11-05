// build your `Resource` model here
const db = require("../../data/dbConfig");

async function getResources() {
  const resources = await db("resources");
  return resources;
}

function createResource(resource) {
  return db("resources")
    .insert(resource)
    .then(([resource_id]) => {
      return db("resources").where("resource_id", resource_id).first();
    });
}
module.exports = { getResources, createResource };
