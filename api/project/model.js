const db = require("../../data/dbConfig");

async function getProjects() {
  const projects = await db("projects");

  return projects.map((project) => {
    return { ...project, project_completed: !!project.project_completed };
  });
}

function getProjectById(project_id) {
  return db("projects").where("project_id", project_id).first();
}

function createProject(project) {
  return db("projects")
    .insert(project)
    .then(([project_id]) => {
      return db("projects")
        .where("project_id", project_id)
        .first()
        .then((res) => {
          return { ...res, project_completed: !!res.project_completed };
        });
    });
}

module.exports = { getProjects, getProjectById, createProject };
